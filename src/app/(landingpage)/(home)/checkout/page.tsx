import React from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import FlightCard from "./components/flight-card";
import Benefits from "./components/benefits";
import PaymentDetailPage from "./components/payment-detail";

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
      <FlightCard />
        <div className="flex flex-col mt-[63px] gap-[30px]">
          <Benefits />
          <PaymentDetailPage />
        </div>
    </div>
  </section>
    </>
  );
}
