import { withTV } from "tailwind-variants/dist/transformer.js";
import type { Config } from "tailwindcss";

const config: Config = withTV({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      sm: "16px",
      md: "32px",
      lg: "38px",
      xl: "40px",
      "2xl": "48px",
      "3xl": "56px",
      "6xl": "64px",
      "7xl": "72px",
      "8xl": "96px",
      "9xl": "128px",
    },
    backgroundImage: {
      "bg-image": "url('/bg.png')",
    },

    colors: {
      brand: {
        primary: {
          normal: "#D54E45",
          normalHover: "#EC4237",
        },
        text: {
          base: "#ffffff",
        },
        surface: {
          normal: "#1A1C1F",
        },
      },
    },
    extend: {
      fontWeight: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
});

export default config;
