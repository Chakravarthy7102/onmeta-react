"use client";

import OnMetaWidget, { openWidget } from "onmeta-react";

export default function OnMetaButton() {
	function handleClick() {
		openWidget();
	}
	return (
		<>
			<button
				onClick={handleClick}
				className="bg-zinc-700 text-white px-4 py-2 rounded-md hover:opacity-80 focus:outline-double focus:outline-4 focus:outline-gray-950"
			>
				open widget
			</button>
		</>
	);
}
