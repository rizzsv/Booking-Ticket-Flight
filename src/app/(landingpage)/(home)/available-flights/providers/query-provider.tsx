"use client";

import React, { type FC, type ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface QCProviderProps {
	children: ReactNode;
}

const queryClient = new QueryClient();

const QCProvider: FC<QCProviderProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};

export default QCProvider;
