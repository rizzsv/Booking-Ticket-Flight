import Image from 'next/image'
import React from 'react'

export default function FlightCard() {
  return (
            <div className="bg-white flex flex-col rounded-[20px] w-[340px]">
                <div className="flex flex-col p-[20px_20px_25px] border-b-2 border-dotted border-flysha-grey gap-4 relative">
                    <div className="flex w-[300px] h-[130px] shrink-0 rounded-[14px] overflow-hidden bg-[#EDE8F5]">
                        <Image width={300} height={130} src="../assets/images/background/airplane.png" className="w-full h-full object-cover" alt="thumbnail" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-[2px]">
                            <p className="font-bold text-lg text-flysha-black">Angga Fly</p>
                            <p className="text-sm text-flysha-grey">AF-293 • First className</p>
                        </div>
                        <div className="flex h-fit">
                            <Image width={20} height={20} src="../assets/images/icons/Star.svg" className="w-5 h-5" alt="star" />
                            <Image width={20} height={20} src="../assets/images/icons/Star.svg" className="w-5 h-5" alt="star" />
                            <Image width={20} height={20} src="../assets/images/icons/Star.svg" className="w-5 h-5" alt="star" />
                            <Image width={20} height={20} src="../assets/images/icons/Star.svg" className="w-5 h-5" alt="star" />
                            <Image width={20} height={20} src="../assets/images/icons/Star.svg" className="w-5 h-5" alt="star" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[370px] absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-[30px]">
                        <div className="w-[30px] h-[30px] rounded-full flex shrink-0 bg-flysha-black" />
                        <div className="w-[30px] h-[30px] rounded-full flex shrink-0 bg-flysha-black" />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px] p-[25px_20px_20px]">
                    <div className="flex justify-between text-flysha-black">
                        <span>Date</span>
                        <span className="font-semibold">10 March 2024</span>
                    </div>
                    <div className="flex justify-between text-flysha-black">
                        <span>Time</span>
                        <span className="font-semibold">09:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between text-flysha-black">
                        <span>Airport</span>
                        <span className="font-semibold">CGK - PDV</span>
                    </div>
                    <div className="flex justify-between text-flysha-black">
                        <span>Name</span>
                        <span className="font-semibold">Angga Risky</span>
                    </div>
                    <div className="flex justify-between text-flysha-black">
                        <span>Seat Choosen</span>
                        <span className="font-semibold">3C</span>
                    </div>
                    <div className="flex justify-between text-flysha-black">
                        <span>Passport No.</span>
                        <span className="font-semibold">AB2091MB</span>
                    </div>
                    <div className="flex justify-between text-flysha-black">
                        <span>Passenger</span>
                        <span className="font-semibold">1 Person</span>
                    </div>
                </div>
            </div>
  )
}
