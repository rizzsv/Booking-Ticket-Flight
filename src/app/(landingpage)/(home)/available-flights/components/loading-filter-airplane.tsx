import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingFilterAirline() {
	return (
		<div className="flex flex-col gap-4">
			<p className="font-semibold">Airlines</p>
			{[0, 1, 3].map((val) => (
				<label
					key={`${val}`}
					className="font-semibold flex items-center gap-[10px] text-white"
				>
					<Skeleton className="w-[25px] bg-white h-[25px] rounded" />
					<Skeleton className="w-[150px] bg-white h-5 rounded" />
				</label>
			))}
		</div>
	);
}
