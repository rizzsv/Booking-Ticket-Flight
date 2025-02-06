import React from 'react'

export default function PaymentDetailPage() {
  return (
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
  )
}
