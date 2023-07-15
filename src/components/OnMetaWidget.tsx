import React, { useEffect, useRef } from "react";
import { css, setup } from "goober";

import useStore, { closeWidget } from "@/core/store";
import CrossIcon from "@/icons/CrossIcon";

setup(React.createElement);

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

export interface OnMetaProps {
	config: OnMetaConfigI;
}

const widget__container = css`
	height: 100vh;
	position: fixed;
	inset: 0;
	backdrop-filter: blur(4px);
`;

const widget = css`
	height: 100vh;
	position: fixed;
	padding-top: 2rem;
	inset: 0;
`;

const icon = css`
	height: 2rem;
	width: 2rem;
	margin-left: 2rem;
	cursor: pointer;
`;

export default function OnMetaWidget({
	config: {
		onMetaScript = "https://stg.platform.onmeta.in/onmeta-sdk.js",
		...onMetaConfig
	},
}: OnMetaProps) {
	const isOnMetaWidgetOpen = useStore();
	const widgetRef = useRef<any | null>(null);

	useEffect(() => {
		if (isOnMetaWidgetOpen) {
			const script = document.createElement("script");
			script.src = onMetaScript;
			script.async = true;
			console.info({
				head: window.document.head,
				header: document,
			});
			window.document.head.appendChild(script);

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
		}
	}, [isOnMetaWidgetOpen]);

	return (
		<>
			{isOnMetaWidgetOpen ? (
				<div className={widget__container}>
					<div className={widget} id="widget">
						<CrossIcon className={icon} onClick={closeWidget} />
					</div>
				</div>
			) : null}
		</>
	);
}
