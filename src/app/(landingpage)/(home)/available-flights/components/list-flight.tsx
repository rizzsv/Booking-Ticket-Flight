import React from 'react'
import FlightItemPage from './flight-item'

export default function ListFlightPage() {
  return (
    <div className="ticket-container flex flex-col w-full gap-6">
    
    <FlightItemPage />
    <FlightItemPage />
    <FlightItemPage />
    <FlightItemPage />
    
    <p className="text-center text-sm text-[#A0A0AC] h-fit">You’ve reached the end of results.</p>
</div>
  )
}
