"use client";

import React, { type FC, type ReactNode } from "react";
import QCProvider from "../available-flights/providers/query-provider";
import Script from "next/script";

interface LayoutProps {
	children: ReactNode;
}

const midtransClientKey = process.env.MIDTRANS_CLIENT_KEY ?? "";

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<QCProvider>{children}</QCProvider>

			<Script
				type="text/javascript"
				src="https://app.sandbox.midtrans.com/snap/snap.js"
				data-client-key={midtransClientKey}
			/>
		</>
	);
};

export default Layout;
