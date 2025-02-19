import type { NextRequest } from "next/server";
import prisma from "../../../../../lib/prisma";
import { makeid } from "@/lib/utils";

const MIDTRANS_URL = process.env.MIDTRANS_TRANSACTION_URL ?? "";
const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY ?? "";

export async function POST(request: NextRequest) {
	const body = await request.json();

	try {
		const transaction = await prisma.ticket.create({
			data: {
				bookingDate: body.bookingDate,
				price: body.price,
				status: "PENDING",
				customerId: body.customerId,
				flightId: body.flightId,
				seatId: body.seatId,
				code: `TRX${makeid(7)}`,
			},
		});

		await prisma.flightSeat.update({
			where: {
				id: transaction.seatId,
			},
			data: {
				isBooked: true,
			},
		});

		// handle untuk midtrans
		const parameter = {
			transaction_details: {
				order_id: transaction.id,
				gross_amount: body.price,
			},
			credit_card: {
				secure: true,
			},
			item_details: [
				{
					id: body.flightId,
					price: body.price,
					quantity: 1,
					name: `Tiket Pesawat ${body.departureCityCode} - ${body.destinationCityCode}`,
				},
			],
		};

		const resMidtrans = await fetch(MIDTRANS_URL, {
			method: "POST",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				authorization: `Basic ${Buffer.from(MIDTRANS_SERVER_KEY).toString("base64")}`,
			},
			body: JSON.stringify(parameter),
		});

		const midtrans = await resMidtrans.json();

		await prisma.ticket.update({
			where: {
				id: transaction.id,
			},
			data: {
				tokenMidtrans: midtrans.token,
			},
		});
		// handle untuk midtrans

		return Response.json({ midtrans, transaction_id: transaction.id });
	} catch (error) {
		console.log(error);
		return Response.json({ error }, { status: 500 });
	}
}
