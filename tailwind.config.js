/** @type {import('tailwindcss').Config} */
const { root } = require('postcss');
const css = require('styled-jsx/css');
const colors = require("tailwindcss/colors");
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    // container: {
    //   center: true,
    //   padding: "1rem",
    // },
    // i want custom container which is customizbale according to width
    container: {
      center: true,
      padding: {
        DEFAULT: "0rem",
        xxs: "0rem",
        xs: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    screens: {
      xxs: "280px",
      xs: "380px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#EEF0F4",
        black: "#121723",
        dark: "#1D2430",
        primary: "#3AC8F7",
        // green: "#65BD56",
        //custom colors
        "secondary": "#5BF55B",
        "text-primary": "#021823",
        "text-secondary": "#35444a",
        "shade": "#36BB83",
        "total-black": "#000800",
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
        'gradient-start': '#5BF55B',
        'gradient-end': '#3AC8F7',
        yellow: "#FBB040",
        "bg-color-dark": "#171C28",
        "body-color": {
          DEFAULT: "#20343e",
          dark: "#959CB1",
        },
        stroke: {
          stroke: "#E3E8EF",
          dark: "#353943",
        },
        gray: {
          ...colors.gray,
          // dark: "#13161C",
          dark: "#000102",
          light: "#F0F2F9",
        },
      },

      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },
      animation: {
        gradient: "gradient 6s ease-in infinite",
        'expand-from-center': 'expand-from-center 0.5s ease-out forwards',
        'gradient-fade': 'gradient-fade 3s infinite',
        meteor: "meteor 5s ease-in infinite",
        grid: "grid 15s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",

      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        'expand-from-center': {
          '0%': { transform: 'scale-y(0)' },
          '100%': { transform: 'scale-y(1)' },
        },
        'gradient-fade': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)',
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

// #4A6CF7 - new 1D2430
//bg-dark #1E232E -light #F0F2F9