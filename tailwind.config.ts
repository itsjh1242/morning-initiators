import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Custom width
      width: {
        "468": "468px",
      },
      maxWidth: {
        "468": "468px",
      },
      // Custom Height
      height: {
        "585": "585px",
      },
      fontSize: {
        xss: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
