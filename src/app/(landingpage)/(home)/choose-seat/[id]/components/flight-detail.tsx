/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function FlightDetail() {
  return (
    <div className="flex flex-col items-center gap-[30px] mt-[61px] pb-[30px]">
    <h1 className="font-bold text-[32px] leading-[48px] text-center">Jakarta to Shanghai</h1>
    <div className="flex flex-col items-center gap-[30px] w-[335px]">
        <div className="flex flex-col gap-[10px] w-full">
            <div className="flex justify-center shrink-0">
                <img src="../assets/images/icons/plane-dotted-curve.svg" alt="icon" />
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-[2px] text-center">
                    <p className="font-bold text-lg">14:00</p>
                    <p className="text-sm text-flysha-off-purple">CGK</p>
                </div>
                <div className="flex flex-col gap-[2px] text-center">
                    <p className="font-bold text-lg">22:40</p>
                    <p className="text-sm text-flysha-off-purple">PDV</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
            <div className="flex shrink-0 w-full h-[130px] rounded-[14px] overflow-hidden">
                <img src="../assets/images/background/airplane.png" className="w-full h-full object-cover" alt="airplane" />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg">Angga Fly</p>
                    <p className="text-sm text-flysha-grey">AF-293 • First Class</p>
                </div>
                <div className="flex h-fit">
                    <img src="../assets/images/icons/Star.svg" className="w-5 h-5" alt="star" />
                    <img src="../assets/images/icons/Star.svg" className="w-5 h-5" alt="star" />
                    <img src="../assets/images/icons/Star.svg" className="w-5 h-5" alt="star" />
                    <img src="../assets/images/icons/Star.svg" className="w-5 h-5" alt="star" />
                    <img src="../assets/images/icons/Star.svg" className="w-5 h-5" alt="star" />
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-[10px] w-full">
            <div className="flex justify-between">
                <span>Date</span>
                <span className="font-semibold">10 March 2024</span>
            </div>
            <div className="flex justify-between">
                <span>Seat Choosen</span>
                <span className="font-semibold">3C</span>
            </div>
            <div className="flex justify-between">
                <span>Passenger</span>
                <span className="font-semibold">1 Person</span>
            </div>
            <div className="flex justify-between">
                <span>Seat Price</span>
                <span className="font-semibold">Rp 25.590.333</span>
            </div>
        </div>
        <a href="checkout.html" className="font-bold text-flysha-black bg-flysha-light-purple rounded-full h-12 w-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF] flex justify-center items-center">Continue to Book</a>
    </div>
</div>
  )
}
