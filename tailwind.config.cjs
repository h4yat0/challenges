/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			roboto: ["Roboto, sans-serif"],
			inter: ["Inter, sans-serif"],
		},
		extend: {
			colors: {
				background: "#0B0911",
				testeBackground: "#130F1E",
				grid: "#1c162c",
			},
		},
	},
	plugins: [],
};
