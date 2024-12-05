import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        animateDown: "animateDown 1.5s infinite",
      },
      keyframes: {
        animateDown: {
          "0%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(5px)" },
          "60%": { transform: "translateY(3px)" },
        },
      },
    },
  },

  plugins: [],
} satisfies Config;
