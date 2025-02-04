"use client";

import React, { type FC, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import SeatProvider from "./provider/seat-provider";

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<SeatProvider>
			{children} <Toaster />
		</SeatProvider>
	);
};

export default Layout;
