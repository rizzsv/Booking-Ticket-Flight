"use client";

import useCheckoutData from "@/hooks/useCheckoutData";
import useTransaction from "@/hooks/useTransaction";
import { rupiahFormat, SEAT_VALUES, type SeatValuesType } from "@/lib/utils";
import type { User } from "lucia";
import React, { useMemo } from "react";

interface PaymentDetailProps {
	user: User | null;
}

export default function PaymentDetail({ user }: PaymentDetailProps) {
	const { data } = useCheckoutData();

	const selectedSeat = useMemo(() => {
		return SEAT_VALUES[(data?.seat as SeatValuesType) ?? "ECONOMY"];
	}, [data?.seat]);

	const { isLoading, payTransaction } = useTransaction({ user });

	return (
		<div className="flex flex-col gap-[30px] w-[400px]">
			<div className="flex flex-col gap-[18px]">
				<p className="font-semibold">Payment Details</p>
				<div className="flex justify-between">
					<span>Seat Price</span>
					<span className="font-semibold">
						{data?.flightDetail?.price
							? rupiahFormat(
									data.flightDetail.price +
										selectedSeat.additionalPrice
							  )
							: 0}
					</span>
				</div>
				<div className="flex justify-between">
					<span>Insurance 24%</span>
					<span className="font-semibold">FREE</span>
				</div>
				<div className="flex justify-between">
					<span>Baggage</span>
					<span className="font-semibold">FREE</span>
				</div>
				<div className="flex justify-between">
					<span>Grand Total</span>
					<span className="font-bold text-flysha-light-purple">
						{data?.flightDetail?.price
							? rupiahFormat(
									data.flightDetail.price +
										selectedSeat.additionalPrice
							  )
							: 0}
					</span>
				</div>
			</div>
			<button
				type="button"
				onClick={payTransaction}
				disabled={isLoading}
				className="font-bold text-flysha-black bg-flysha-light-purple rounded-full h-12 w-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF] flex justify-center items-center"
			>
				Checkout with Midtrans
			</button>
		</div>
	);
}
