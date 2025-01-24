import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/auth";
import { LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";
import { logout } from "../(home)/lib/actions";

export default async function NavbarAuth() {
	const { session, user } = await getUser();

	return (
		<div className="inline-flex items-center gap-3">
			{session && user.role === "CUSTOMER" ? (
				<Link
					href="/my-tickets"
					className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
				>
					My Tickets
				</Link>
			) : (
				<Link
					href="/sign-in"
					className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
				>
					Sign In
				</Link>
			)}

			{session && user.role === "CUSTOMER" && (
				<form action={logout}>
					<Button variant="destructive" className="rounded-full">
						<LogOut className="w-4 h-4" />
					</Button>
				</form>
			)}
		</div>
	);
}
