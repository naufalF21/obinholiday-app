import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "Obin Holiday - Travel Agency",
	description:
		"Explore the world with Obin Holiday, your trusted travel agency for unforgettable adventures.",
};

const poppins = Poppins({
	subsets: ["latin"],
	weight: "400",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
