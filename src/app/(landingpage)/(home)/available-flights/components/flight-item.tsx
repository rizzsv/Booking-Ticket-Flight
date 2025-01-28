import React from 'react'
import Image from 'next/image'

export default function FlightItemPage() {
  return (
        <div className="ticket-card flex justify-between items-center rounded-[20px] p-5 bg-flysha-bg-purple">
            <div className="flex gap-[16px] items-center">
                <div className="flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
                    <Image width={60} height={60} src="/assets/images/background/airplane.png" className="w-full h-full object-cover" alt="thumbnail" />
                </div>
                <div className="flex flex-col justify-center-center gap-[2px]">
                    <p className="font-bold text-lg">Pesawat Rasthy</p>
                    <p className="text-sm text-flysha-off-purple">Business Class</p>
                </div>
            </div>
            <div className="flex items-center gap-[30px]">
                <div className="flex flex-col gap-[2px] text-center">
                    <p className="font-bold text-lg">14:00</p>
                    <p className="text-sm text-flysha-off-purple">CGK</p>
                </div>
                <Image width={60} height={60} src="/assets/images/icons/plane-dotted.svg" alt="icon" />
                <div className="flex flex-col gap-[2px] text-center">
                    <p className="font-bold text-lg">22:40</p>
                    <p className="text-sm text-flysha-off-purple">PDV</p>
                </div>
            </div>
            <p className="w-fit h-fit font-bold text-lg">Rp 5.392.444</p>
            <a href="choose-seat.html" className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_20px] h-[48px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]">Book Flight</a>
        </div>
  )
}
