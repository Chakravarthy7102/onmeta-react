"use client";

import OnMetaWidget, { openWidget } from "onmeta-react";

export default function OnMetaButton() {
	return (
		<>
			<button
				onClick={openWidget}
				className="bg-zinc-700 text-white px-4 py-2 rounded-md hover:opacity-80 focus:outline-double focus:outline-4 focus:outline-gray-950"
			>
				open widget
			</button>
			<OnMetaWidget
				config={{
					apiKey: "12333",
					fiatAmount: 100,
					tokenAddress: "0x0000000000000000000000",
					walletAddress: "0x23eeeeeeeeeeeeeeeeeee",
				}}
			/>
		</>
	);
}
