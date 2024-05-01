import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F29AA7",
        "secondary-color": "#EFEFEF",
        "ternary-color": "#5C7855",
        "quaternary-color": "#C6A86C",
        "light-gray": "#C0C0C0",
      },
    },
  },
  plugins: [],
};
export default config;
