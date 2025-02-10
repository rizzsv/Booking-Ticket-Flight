import Image from "next/image";
import React from "react";

export default function Benefits() {
	return (
		<div className="flex flex-col gap-4">
			<p className="font-semibold">Additional Benefits</p>
			<div className="flex flex-col md:flex-row gap-[30px]">
				<div className="benefit-card flex items-center gap-[14px] p-[14px_20px] ring-1 ring-white rounded-[20px]">
					<div className="w-8 h-8 flex">
						<Image
							width={32}
							height={32}
							src="/assets/images/icons/crown-white.svg"
							className="w-8 h-8"
							alt="icon"
						/>
					</div>
					<div className="flex flex-col gap-[2px]">
						<p className="font-bold text-lg">Business First</p>
						<p className="text-flysha-off-purple">
							Gulfstream 109-BB
						</p>
					</div>
				</div>
				<div className="benefit-card flex items-center gap-[14px] p-[14px_20px] ring-1 ring-white rounded-[20px]">
					<div className="w-8 h-8 flex">
						<Image
							width={32}
							height={32}
							src="/assets/images/icons/shield-tick-white.svg"
							className="w-8 h-8"
							alt="icon"
						/>
					</div>
					<div className="flex flex-col gap-[2px]">
						<p className="font-bold text-lg">Safe Guard</p>
						<p className="text-flysha-off-purple">
							Airplane Metal X
						</p>
					</div>
				</div>
				<div className="benefit-card flex items-center gap-[14px] p-[14px_20px] ring-1 ring-white rounded-[20px]">
					<div className="w-8 h-8 flex">
						<Image
							width={32}
							height={32}
							src="/assets/images/icons/building-3-white.svg"
							className="w-8 h-8"
							alt="icon"
						/>
					</div>
					<div className="flex flex-col gap-[2px]">
						<p className="font-bold text-lg">Home Pickup</p>
						<p className="text-flysha-off-purple">Bentley Banta</p>
					</div>
				</div>
			</div>
		</div>
	);
}
