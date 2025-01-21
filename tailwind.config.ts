import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlack: "var(--custom-black)",
        customBlack2: "var(--custom-black-2)",
        custombackground: "#28282c",
      },
      animation: {},
    },
  },
  variants: {
    extend: {
      content: ["before", "after"], // Enable for 'before' and 'after'
      // Add other properties you want to use with pseudo-elements
    },
  },
  plugins: [],
} satisfies Config;
