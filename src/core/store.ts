import { useState } from "react";

let isOnMetaWidgetOpen: boolean = false;

export const closeWidget = () => {
	isOnMetaWidgetOpen = false;
};

export const openWidget = () => {
	isOnMetaWidgetOpen = true;
};

export default function useStore(initalState: boolean = isOnMetaWidgetOpen) {
	const [state, _] = useState(initalState);
	return state;
}
