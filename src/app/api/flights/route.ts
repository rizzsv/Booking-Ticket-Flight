import type { NextRequest } from "next/server";
import prisma from "../../../../lib/prisma";
import type { TypeSeat } from "@prisma/client";

export async function GET(request: NextRequest) {
    const searchparams = request.nextUrl.searchParams

    const params = {
        departure: searchparams.get('departure'),
        arrival: searchparams.get('arrival'),
        date: searchparams.get('date'),
        planeId: searchparams.get('planeId'),
        seat: searchparams.get('seat'),
    }

    let departureDate : Date | null = null

    if(params.date){
        departureDate = new Date(params.date)
        departureDate.setHours(1)
    }

    //dummy test data 
    // const planeIdDummy = 'bckihwbghb123, beviqhbikhwebbf213, hqbfkiehjbwkh'
    // const planeIdArray = ['bckihwbghb123', 'beviqhbikhwebbf213', 'hqbfkiehjbwkh']



    try {
        const data = await prisma.flight.findMany({
            where: {
                departureCity: params.departure !== null ?params.departure : {},
                destinationCity: params.arrival !== null ?params.arrival : {},
                seats: params.seat !== null ? {
                    some: {
                        type: params.seat as TypeSeat,
                        isBooked: false
                    }
                } : {},
                departureDate: departureDate !== null ? {
                    gte: departureDate
                } : {},
                planeId: params.planeId ? params.planeId.split(',').length > 0 ? {
                    in: [...params.planeId.split(',')]
                } : {} : {},
            },
            include : {
                plane: true
            }
        });

        return Response.json({data})
    } catch (error) {
        return Response.json({
            error: true,
            error_message: 'failed to get data'
        }, {status: 500})
    }
}