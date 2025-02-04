import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";


import "../../globals.css";


const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Flysha - Modern Flight Booking Platform",
	description: "Book your dream flights with ease and comfort",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${poppins.className} text-white bg-flysha-black antialiased`}>

				{children}
			</body>
		</html>
	);
}
