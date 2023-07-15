import OnMetaButton from "./components/OnMetaButton";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
			<h1 className="text-3xl text-center">Demo App</h1>
			<OnMetaButton />
		</main>
	);
}
