import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      0: [
        "0px",
        {
          letterSpacing: "0px",
        },
      ],
      xxsm: [
        ".5rem",
        {
          lineHeight: "14px",
        },
      ],
      xsm: [
        ".75rem",
        {
          lineHeight: "21px",
        },
      ],
      sm: [
        ".875rem",
        {
          lineHeight: "24.5px",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "28px",
        },
      ],
      md: [
        "1.125rem",
        {
          lineHeight: "31.5px",
        },
      ],
      lg: [
        "1.25rem",
        {
          lineHeight: "35px",
        },
      ],

      xl: [
        "1.5rem",
        {
          lineHeight: "42px",
        },
      ],

      "2xl": [
        "2rem",
        {
          lineHeight: "56px",
        },
      ],

      "3xl": [
        "2.5rem",
        {
          lineHeight: "60px",
        },
      ],

      "4xl": [
        "3.5rem",
        {
          lineHeight: "98px",
        },
      ],
    },
    colors: {
      "salmon-pink": "#fe7587",
      fuchsia: "#e879f9",
      yellow: "#facc15",
      zic: "#09090b",
      sky: "#38bdf8",
      white: "#ffffff",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary":
          "linear-gradient(90deg, rgba(254,117,135,1) 31%, rgba(232,121,249,1) 100%)",
        "radial-primary":
          "radial-gradient(circle, rgba(232,121,249,1) 0%, rgba(9,9,11,1) 99%)",
      },
    },
  },
  plugins: [],
};
export default config;
