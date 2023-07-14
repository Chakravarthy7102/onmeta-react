import React, { useEffect, useRef } from "react";

import useStore, { closeWidget } from "@/core/store";
import CrossIcon from "@/icons/CrossIcon";

import "../index.css";

export interface OnMetaConfigI {
	apiKey: string;
	walletAddress: string;
	fiatAmount: number;
	//Onmeta script url
	//ref: https://docs.onmeta.in/widget/widget-creation#ipFzz
	onMetaScript?: string;
	userEmail?: string;
	chainId?: string;
	tokenAddress: string;
	metaData?: { userID: string; userName: string };
	offRamp?: "enabled" | "disabled";
	onRamp?: "enabled" | "disabled";
	successRedirectUrl?: string;
	failureRedirectUrl?: string;
}

interface OnMetaProps {
	config: OnMetaConfigI;
}

export default function OnMetaWidget({
	config: {
		onMetaScript = "https://stg.platform.onmeta.in/onmeta-sdk.js",
		...onMetaConfig
	},
}: OnMetaProps) {
	const widgetRef = useRef<any | null>(null);
	const isOnMetaWidgetOpen = useStore();

	useEffect(() => {
		const script = document.createElement("script");
		script.src = onMetaScript;
		script.async = true;
		document.head.appendChild(script);

		script.onload = () => {
			widgetRef.current = new window.onMetaWidget({
				elementId: "widget",
				...onMetaConfig,
			});

			widgetRef.current.init();

			//@todo: listen to this events with observers.
			widgetRef.current.on("ALL_EVENTS", (data: unknown) =>
				console.log("ALL_EVENTS --> ", data)
			);
		};
	}, []);

	return (
		<>
			{isOnMetaWidgetOpen ? (
				<div className="onmeta__widget" id="widget">
					<CrossIcon className="icon" onClick={closeWidget} />
					{/* Widget container */}
				</div>
			) : null}
		</>
	);
}
