import type { FlightSeat } from '@prisma/client'
import React, { useContext } from 'react'
import { seatContext, type SeatContextType } from '../provider/seat-provider'

interface SeatItemProps {
  seat: FlightSeat
}

export default function SeatItem({seat}: SeatItemProps) {
  const { setSelectedSeat } = useContext(seatContext) as SeatContextType;


  return (
    <div className="group flex shrink-0 w-[60px] h-[60px] items-center justify-center relative">
    <label htmlFor={seat.seatNumber} className="absolute font-bold text-[20px] group-has-[:disabled]:text-[#797684] group-has-[:checked]:text-flysha-black">{seat.seatNumber}</label>
    <input type="radio" name="seat" onClick={() => {setSelectedSeat(seat)}} id={seat.seatNumber} className="w-[60px] h-[60px] appearance-none rounded-[15px] checked:bg-flysha-light-purple ring-2 ring-white checked:ring-flysha-light-purple disabled:ring-0 disabled:bg-flysha-dark-grey" disabled={seat.isBooked ?? false} /> 

</div>
  )
}
