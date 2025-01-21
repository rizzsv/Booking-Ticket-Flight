"use client"

import { Button } from "@/components/ui/button";
import { getUrFile } from "@/lib/supabase";
import type { Airplane, Flight, FlightSeat } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ColumnRouteFlight from "./columns-route-flight"
import ColumnSeatPrice from "./column-seatprice";

export type FlightColumn = Flight & {
    plane: Airplane,
    seats: FlightSeat[]
}

export const columns: ColumnDef<FlightColumn>[] = [

    {
        accessorKey: 'PlaneId',
        header: 'Pesawat',
        cell: ({row}) => {
            const flight = row.original

            const planeImageUrl = getUrFile(flight.plane.image)

            return (
                <div className="inline-flex items-center gap-5">
                    <Image src={planeImageUrl} alt="Image Plane" width={120} height={120} className="rounded-xl"/>
                    <div className="font-bold">
                        {flight.plane.name}
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: 'departureCity',
        header: 'Rute',
        cell: ({row}) => {
            const flight = row.original

            return <ColumnRouteFlight flight={flight} />
        }
    },
    {
        accessorKey: 'price',
        header: 'Harga / Kursi',
        cell: ({row}) => {
            const flight = row.original

            return <ColumnSeatPrice flight={flight}/>
        }
    },
    {
        id: 'actions',
        cell: ({row}) => {
            const flight = row.original

            return (
                <div className="inline-flex gap-5 items-center">
                    <Button variant='secondary' size='sm' asChild>
                        <Link href={`/dashboard/flights/edit/${flight.id}`}>
                        <Pencil className="mr-2 h-4 w-4"/>
                        Edit
                        </Link>
                    </Button>
                    {/* <DeleteAirplane id={plane.id} /> */}
                </div>
            )
        } 
    }        
]
