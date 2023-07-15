import React, { useEffect, useRef } from "react";

import useStore, { closeWidget } from "@/core/store";
import CrossIcon from "@/icons/CrossIcon";
import { css, setup, styled } from "goober";

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

const WidgetContainer = styled("div")`
	position: fixed;
	inset: 0;
	backdrop-filter: blur(10px);
	padding-top: 7rem;
	height: 100vh;
	z-index: 99999;
`;

const icon = css`
	height: 3rem;
	width: 3rem;
	margin-left: 2rem;
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
				<WidgetContainer id="widget">
					<CrossIcon className={icon} onClick={closeWidget} />
				</WidgetContainer>
			) : null}
		</>
	);
}
