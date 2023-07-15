import { useEffect, useState } from "react";

let isOnMetaWidgetOpen: boolean = false;
let mutateState: React.Dispatch<React.SetStateAction<boolean>>;

export const closeWidget = () => {
	isOnMetaWidgetOpen = false;
	mutateState(false);
};

export const openWidget = () => {
	isOnMetaWidgetOpen = true;
	mutateState(true);
};

export default function useStore(initalState: boolean = isOnMetaWidgetOpen) {
	const [state, setState] = useState(initalState);

	console.log({ state });

	useEffect(() => {
		console.log("render")
		mutateState = setState;
	}, [state]);

	return state;
}
