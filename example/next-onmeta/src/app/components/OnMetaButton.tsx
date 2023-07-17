"use client";

import { openWidget, useOnMetaEvents } from "onmeta-react";
import { useEffect } from "react";

export default function OnMetaButton() {
	const { subscriber, unsubscribe } = useOnMetaEvents();

	function listener(data: unknown) {
		console.log(data);
	}

	useEffect(() => {
		subscriber(listener);
		return () => {
			unsubscribe(listener);
		};
	}, []);

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
