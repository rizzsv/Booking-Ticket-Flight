import { DataTable } from '@/components/ui/data-table'
import React from 'react'
import { Metadata } from 'next'
import { columns } from './components/columns-users'
import { getCustomers } from './lib/data'

export const metada: Metadata = {
    title: 'Dashboard | Users'
}

export default async function TicketPage() {
    const users = await getCustomers()


    return (
        <>

        <div className='flex flex-row items-center justify-between'>
            <div className='my-5 text-2xl font-bold'>Users</div>
        </div>
        <DataTable columns={columns} data={users}/>
        </>
    )
}
