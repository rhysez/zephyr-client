import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        zephyr_blue: "#7289da",
        zephyr_pink: "#a051bd",

        dark_1: "#424549",
        dark_2: "#36393e",
        dark_3: "#282b30",
        dark_4: "#1e2124",

        light_1: "#f5f5f5",
        light_2: "#e3e3e3"
      },
    },
  },
};
export default config;
