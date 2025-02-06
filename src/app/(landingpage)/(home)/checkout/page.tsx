import React from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <>
      <section
        id="Header"
        className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top h-[290px] relative"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] h-[290px]">
          <Navbar />
          <div className="title container max-w-[1130px] mx-auto flex flex-col gap-1 pt-[50px] pb-[68px]">
            <h1 className="font-bold text-[32px] leading-[48px]">Checkout</h1>
            <p className="font-medium text-lg leading-[27px]">
              Enjoy new experience of flight
            </p>
          </div>
          <div className="w-full h-[15px] bg-gradient-to-t from-[#080318] to-[rgba(8,3,24,0)] absolute bottom-0" />
        </div>
      </section>

      <section id="Content" className="container max-w-[1130px] mx-auto -mt-[33px] z-10 relative">
    <div className="checkout-container flex flex-col lg:flex-row gap-[70px]">
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
        <div className="flex flex-col mt-[63px] gap-[30px]">
            <div className="flex flex-col gap-4">
                <p className="font-semibold">Additional Benefits</p>
                <div className="flex flex-col md:flex-row gap-[30px]">
                    <div className="benefit-card flex items-center gap-[14px] p-[14px_20px] ring-1 ring-white rounded-[20px]">
                        <div className="w-8 h-8 flex shrink-0">
                            <Image width={32} height={32} src="../assets/images/icons/crown-white.svg" className="w-8 h-8" alt="icon" />
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <p className="font-bold text-lg">Business First</p>
                            <p className="text-flysha-off-purple">Gulfstream 109-BB</p>
                        </div>
                    </div>
                    <div className="benefit-card flex items-center gap-[14px] p-[14px_20px] ring-1 ring-white rounded-[20px]">
                        <div className="w-8 h-8 flex">
                            <Image width={32} height={32} src="../assets/images/icons/shield-tick-white.svg" className="w-8 h-8" alt="icon" />
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <p className="font-bold text-lg">Safe Guard</p>
                            <p className="text-flysha-off-purple">Airplane Metal X</p>
                        </div>
                    </div>
                    <div className="benefit-card flex items-center gap-[14px] p-[14px_20px] ring-1 ring-white rounded-[20px]">
                        <div className="w-8 h-8 flex">
                            <Image width={32} height={32} src="../assets/images/icons/building-3-white.svg" className="w-8 h-8" alt="icon" />
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <p className="font-bold text-lg">Home Pickup</p>
                            <p className="text-flysha-off-purple">Bentley Banta</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[30px] w-[400px]">
                <div className="flex flex-col gap-[18px]">
                    <p className="font-semibold">Payment Details</p>
                    <div className="flex justify-between">
                        <span>Seat Price</span>
                        <span className="font-semibold">Rp 25.590.333</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Insurance 24%</span>
                        <span className="font-semibold">Rp 89.294.599</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Baggage</span>
                        <span className="font-semibold">Rp 5.394.283</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Grand Total</span>
                        <span className="font-bold text-flysha-light-purple">Rp 149.384.293</span>
                    </div>
                </div>
                <a href="success-checkout.html" className="font-bold text-flysha-black bg-flysha-light-purple rounded-full h-12 w-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF] flex justify-center items-center">Checkout with Midtrans</a>
            </div>
        </div>
    </div>
  </section>
    </>
  );
}
