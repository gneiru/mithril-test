import { defineConfig } from "vite";

export default defineConfig({
	esbuild: {
		jsx: "transform",
		jsxFactory: "m",
		jsxFragment: "'['",
		jsxInject: "import m from 'mithril';",
	},
});
