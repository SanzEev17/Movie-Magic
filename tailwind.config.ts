import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        card: "repeat(auto-fill,minmax(176px,1fr))",
      },
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        muted: "var(--muted)",
        sidebar: "var(--sidebar)",
        header: "var(--header)",
        tabs: {
          DEFAULT: "var(--tabs)",
          background: "var(--tabs-background)",
        },
        icon: {
          DEFAULT: "var(--icon)",
          background: "var(--icon-background)",
        },
        input: {
          DEFAULT: "var(--input)",
          background: "var(--input-background)",
        },
        border: {
          DEFAULT: "var(--border)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
