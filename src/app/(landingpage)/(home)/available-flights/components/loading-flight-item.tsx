import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

export default function LoadingFlightItem() {
	return (
		<div className="ticket-card flex justify-between items-center rounded-[20px] p-5 bg-flysha-bg-purple">
			<div className="flex gap-[16px] items-center">
				<div className="flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
					<Skeleton className="w-[90px] h-[70px] bg-white rounded-lg" />
				</div>
				<div className="flex flex-col justify-center-center gap-[2px]">
					<Skeleton className="w-[100px] h-5 bg-white" />
					<Skeleton className="w-[100px] h-4 bg-white" />
					<Skeleton className="w-[100px] h-5 bg-white" />
				</div>
			</div>
			<div className="flex items-center gap-[30px]">
				<div className="flex flex-col gap-[2px] text-center">
					<Skeleton className="w-[50px] bg-white h-5" />

					<Skeleton className="w-[50px] bg-white h-5" />
				</div>
				<Image
					width={60}
					height={60}
					src="../assets/images/icons/plane-dotted.svg"
					alt="icon"
				/>
				<div className="flex flex-col gap-[2px] text-center">
					<Skeleton className="w-[50px] h-5 bg-white" />

					<Skeleton className="w-[50px] h-5 bg-white" />
				</div>
			</div>
			<Skeleton className="w-[150px] bg-white h-6 rounded-lg" />
			<Skeleton className="w-[150px] bg-white h-[48px] rounded-full" />
		</div>
	);
}
