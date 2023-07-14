import { defineConfig } from "tsup";

export default defineConfig({
	dts: true,
	minify: true,
	splitting: false,
	sourcemap: true,
	clean: true,
	outDir: "dist",
	format: ["esm", "cjs"],
	entry: ["src/index.ts"],
});
