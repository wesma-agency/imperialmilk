import { defineConfig } from 'vite';
// import { resolve } from 'path';

export default defineConfig({
	// Можно указать пустую строку, для встроенного развертывания
	base: './',

	server: {
		// open: true,
	},

	build: {
		// Не обязательные опции
		// minify: true,
		// sourcemap: true,
	},

	preview: {
		open: true,
	},
});
