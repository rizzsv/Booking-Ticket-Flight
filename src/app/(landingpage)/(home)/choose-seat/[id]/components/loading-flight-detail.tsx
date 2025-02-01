/* eslint-disable @next/next/no-img-element */
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function LoadingFlightDetail() {
  return (
    <div className="flex flex-col items-center gap-[30px] mt-[61px] pb-[30px]">
    <Skeleton className='w-[300px] h-8' />
    <div className="flex flex-col items-center gap-[30px] w-[335px]">
        <div className="flex flex-col gap-[10px] w-full">
            <div className="flex justify-center shrink-0">
                <img src="../assets/images/icons/plane-dotted-curve.svg" alt="icon" />
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-[2px] text-center">
                    <Skeleton className='w-[600px] h-5' />
                    <Skeleton className='w-[400px] h-4' />
                </div>
                <div className="flex flex-col gap-[2px] text-center">
                <Skeleton className='w-[600px] h-5' />
                <Skeleton className='w-[400px] h-4' />
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
            <div className="flex shrink-0 w-full h-[130px] rounded-[14px] overflow-hidden">
                <Skeleton className='w-full h-full rounded-lg' />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-[2px]">
                    <Skeleton className='w-[100px] h-5'/>
                    <Skeleton className='w-[150px] h-5'/>
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
                <Skeleton className='w-[60px] h-5' />
            </div>
            <div className="flex justify-between">
                <span>Seat Choosen</span>
                <Skeleton className='w-[60px] h-5' />
            </div>
            <div className="flex justify-between">
                <span>Passenger</span>
                <Skeleton className='w-[60px] h-5' />
            </div>
            <div className="flex justify-between">
                <span>Seat Price</span>
                <Skeleton className='w-[60px] h-5' />
            </div>
        </div>
        <Skeleton className='w-full h-12 rounded-full' />
    </div>
</div>
  )
}
