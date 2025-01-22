import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'
import { columns } from './components/columns-ticket'
import { getTickets } from './lib/data'

export const metada: Metadata = {
    title: 'Dashboard | Tickets'
}

export default async function TicketPage() {
    const tickets = await getTickets()


    return (
        <>

        <div className='flex flex-row items-center justify-between'>
            <div className='my-5 text-2xl font-bold'>Ticket</div>
        </div>
        <DataTable columns={columns} data={tickets}/>
        </>
    )
}
