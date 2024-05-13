import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "870px",
        md: "1060px",
        lg: "1200px",
        sc: "1260px",
        nv: "1460px",
        xl: "1700px",
      },
      colors: {
        blue: "#1f57c3",
        darkerBlue: "#19469c",
        green: "#13544e",
        lightGreen: "#91e6b3",
        gray: "#D2D2C1",
        light: "#cfcfcf",
        ultraLight: "#F2F2F2",
        dark: "#777B7E",
        overlay: "rgba(255, 255, 255, 0.4)",
      },

      backgroundColor: {
        blue: "#1f57c3",
        darkerBlue: "#19469c",
        green: "#13544e",
        lightGreen: "#91e6b3",
        gray: "#D2D2C1",
        ultraLight: "#F1F1F1",
        light: "#efefef",
        dark: "#777B7E",
        overlay: "rgba(0, 0, 0, 0.1)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
