The unofficial onmeta react sdk for integrating onmeta widget into your React application. The official documentation can found [here](https://docs.onmeta.in/widget/getting-started)

### Requirements

```json
"engines": {
    "node": ">=10"
  },
  "peerDependencies": {
    "react": ">=16",
    "react-dom": ">=16"
  },
```

### Installation

install via npm
```sh
npm install onmeta-react
```
Or via yarn
```sh
yarn add onmeta-react
```
### Getting Started.

Add `OnMetaWidget` component at the top level of your react app. Like putting in the root layout if you are using new `app` dir or in `_app.tsx` just like below example.

```tsx
import "./globals.css";
import { Inter } from "next/font/google";

import OnMetaWidget from "onmeta-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "OnMeta React Example.",
	description: "A wrapper for onmeta.js sdk for react.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<OnMetaWidget
					config={{
						apiKey: process.env.NEXT_PUBLIC_ONMETA_API_KEY,
						fiatAmount: 100,
						tokenAddress: process.env.NEXT_PUBLIC_TOKEN_ADDRESS,
						walletAddress: process.env.NEXT_PUBLIC_WALLET_ADDRESS,
					}}
				/>
			</body>
		</html>
	);
}

```

### Listen to Onmeta wdiget events with `useOnMetaEvents`

You can combine multiple atoms to create a derived atom.

```tsx
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

```
