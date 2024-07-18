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
    screens: {
      "2xl": { min: "1536px" },
      // => @media (max-width: 1535px) { ... }
      xl: { min: "1280px" },
      // => @media (max-width: 1279px) { ... }
      lg: { min: "1024px" },
      // => @media (max-width: 1023px) { ... }
      md: { min: "768px" },
      // => @media (max-width: 767px) { ... }
      sm: { min: "600px" },
      // => @media (max-width: 639px) { ... }
      xsm: { min: "480px" },
      xlmx: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }
      lgmx: { max: "1024px" },
      mx910: { max: "910px" },
      // => @media (max-width: 1023px) { ... }
      mdmx: { max: "768px" },
      // => @media (max-width: 767px) { ... }
      smmx: { max: "600px" },
      // => @media (max-width: 639px) { ... }
      xsmmx: { max: "480px" },
    },
  },
  plugins: [],
};
export default config;
