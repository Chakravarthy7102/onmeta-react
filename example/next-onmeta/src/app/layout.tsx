import "./globals.css";
import { Inter } from "next/font/google";

import OnMetaWidget from "onmeta-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "OnMeta React Example.",
	description: "A wrapper for onmeta.js sdk for react.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<OnMetaWidget
					config={{
						apiKey: process.env.NEXT_PUBLIC_ONMETA_API_KEY,
						fiatAmount: 100,
						tokenAddress: process.env.NEXT_PUBLIC_TOKEN_ADDRESS,
						walletAddress: process.env.NEXT_PUBLIC_WALLET_ADDRESS,
					}}
				/>
			</body>
		</html>
	);
}
