import React, { type FC, type ReactNode } from "react";
import QCProvider from "./providers/query-provider";
import FlightProvider from "./providers/flight-provider";

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<QCProvider>
			<FlightProvider>{children}</FlightProvider>
		</QCProvider>
	);
};

export default Layout;
