"use client";

import { Button } from '@/components/ui/button';
import useCheckoutData from '@/hooks/useCheckoutData';
import { rupiahFormat, SEAT_VALUES, type SeatValuesType } from '@/lib/utils';
import React, { useMemo } from 'react'

export default function PaymentDetailPage() {

    const { data } = useCheckoutData();

    const selectedSeat = useMemo(() => {
      return SEAT_VALUES[(data?.seat as SeatValuesType) ?? "ECONOMY"];
    }, [data]);

  return (
    <div className="flex flex-col gap-[30px] w-[400px]">
    <div className="flex flex-col gap-[18px]">
        <p className="font-semibold">Payment Details</p>
        <div className="flex justify-between">
            <span>Seat Price</span>
            <span className="font-semibold">{data?.flightDetail?.price ? rupiahFormat(data.flightDetail.price + selectedSeat.additionalPrice) : 0}</span>
        </div>
        <div className="flex justify-between">
            <span>Insurance 24%</span>
            <span className="font-semibold">Free</span>
        </div>
        <div className="flex justify-between">
            <span>Baggage</span>
            <span className="font-semibold">Free</span>
        </div>
        <div className="flex justify-between">
            <span>Grand Total</span>
            <span className="font-bold text-flysha-light-purple">{data?.flightDetail?.price ? rupiahFormat(data.flightDetail.price + selectedSeat.additionalPrice) : 0}</span>
        </div>
    </div>
    <Button type='button' className="font-bold text-flysha-black bg-flysha-light-purple rounded-full h-12 w-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF] flex justify-center items-center">Checkout with Midtrans</Button>
</div>
  )
}
