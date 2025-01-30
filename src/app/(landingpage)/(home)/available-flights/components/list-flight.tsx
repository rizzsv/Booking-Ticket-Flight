"use client"

import React, { useContext } from 'react'
import FlightItemPage from './flight-item'
import { FContext, FlightContext } from '../providers/flight-provider'
import LoadindListFlight from './loading-list-flight'

export default function ListFlightPage() {

  const {flights, isLoading} = useContext(FlightContext) as FContext

  console.log(flights);
  
  if (isLoading){
    return <LoadindListFlight />
  }
 
  return (
    <div className="ticket-container flex flex-col w-full gap-6">

      {flights?.map((val) => (
        <FlightItemPage data={val} key={val.id} />
      ))}
    
    <p className="text-center text-sm text-[#A0A0AC] h-fit">You’ve reached the end of results.</p>
</div>
  )
}
