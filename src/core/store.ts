import { useEffect, useState } from "react";

let isOnMetaWidgetOpen: boolean = false;
let mutateState: React.Dispatch<React.SetStateAction<boolean>> | null;

export const closeWidget = () => {
	isOnMetaWidgetOpen = false;
	listener(false);
};

export const openWidget = () => {
	isOnMetaWidgetOpen = true;
	listener(true);
};

const listener = (value: boolean) => {
	if (mutateState) mutateState(value);
};

export default function useStore(initalState: boolean = isOnMetaWidgetOpen) {
	const [state, setState] = useState(initalState);

	useEffect(() => {
		mutateState = setState;

		return () => {
			if (mutateState) mutateState = null;
		};
	}, [state]);

	return state;
}
