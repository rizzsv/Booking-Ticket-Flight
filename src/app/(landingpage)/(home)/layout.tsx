import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import "../../globals.css";
import Navbar from "../components/navbar";
import CompanyLogos from "../components/company-logos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Flysha - Website booking ticket",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} text-white font-poppins bg-flysha-black`}>

				{children}
			</body>
		</html>
	);
}
