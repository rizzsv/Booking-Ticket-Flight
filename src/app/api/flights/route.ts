import type { NextRequest } from "next/server";
import prisma from "../../../../lib/prisma";
import type { TypeSeat } from "@prisma/client";

export async function POST(request: NextRequest) {
    const body = await request.json()

    let departureDate : Date | null = null

    if(body.date){
        departureDate = new Date(body.date)
        departureDate.setHours(1)
    }

    //dummy test data 
    // const planeIdDummy = 'bckihwbghb123, beviqhbikhwebbf213, hqbfkiehjbwkh'
    // const planeIdArray = ['bckihwbghb123', 'beviqhbikhwebbf213', 'hqbfkiehjbwkh']



    try {
        const data = await prisma.flight.findMany({
            where: {
                departureCity: body.departure !== null ?body.departure : {},
                destinationCity: body.arrival !== null ?body.arrival : {},
                seats: body.seat !== null ? {
                    some: {
                        type: body.seat as TypeSeat,
                        isBooked: false
                    }
                } : {},
                departureDate: departureDate !== null ? {
                    gte: departureDate
                } : {},
                planeId: body.planeIds.length > 0 ? {
                    in: body.planeIds
                } : {}
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