/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#333",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
