import type { FlightSeat, TypeSeat } from "@prisma/client"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateSeatPerClass = (flightId: string) => {
  const SEAT_CLASS: TypeSeat[] = ["ECONOMY", "BUSINESS", "FIRST"]
  const SEAT_CODE = ["A", "B", "C", "D"]

  const seats: {seatNumber: string, type: TypeSeat, flightId: string}[] = []

  for (const className of SEAT_CLASS) {
    for (const seat of SEAT_CODE) {
      for (let i = 0; i<= 5; i++) {
        seats.push({
          seatNumber: seat + i,
          type: className as TypeSeat,
          flightId
        })
      }
    }
  }

  return seats;
}

export const dateFormat = (date: Date | string, format = 'DD MM YYYY HH:mm') => {
  if(!date) {
    return ""
  }

  const dateformat = dayjs(date).format(format)

  return dateformat
}

//format rupiah 
export const rupiahFormat = (value: number) => {
  return Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value)
}

// format for seat (sisa kursi)
export const mappingSeats = (seats: FlightSeat[]) => {
  const totalSeatEconomy = seats.filter(item => item.type === "ECONOMY").length
  const totalSeatBusiness = seats.filter(item => item.type === "BUSINESS").length
  const totalSeatFirst = seats.filter(item => item.type === "FIRST").length

  const economy = seats.filter(item => item.type === "ECONOMY" && item.isBooked).length
  const business = seats.filter(item => item.type === "BUSINESS" && item.isBooked).length
  const first = seats.filter(item => item.type === "FIRST" && item.isBooked).length

  return {
    economy,
    business,
    first,

    totalSeatEconomy,
    totalSeatBusiness,
    totalSeatFirst
  }
}