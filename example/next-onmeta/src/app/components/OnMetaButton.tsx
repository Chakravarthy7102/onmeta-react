"use client";

import { openWidget } from "onmeta-react";

export default function OnMetaButton() {
	return (
		<>
			<button
				onClick={openWidget}
				className="bg-zinc-700 text-white px-4 py-2 rounded-md hover:opacity-80 focus:outline-double focus:outline-4 focus:outline-gray-950"
			>
				open widget
			</button>
		</>
	);
}
