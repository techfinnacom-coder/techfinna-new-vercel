const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flowbite = require("flowbite-react/tailwind");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-blue": colors.sky,
        cyan: colors.cyan,
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "infinite-scroll":
          "infinite-scroll 25s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        scroll: {
          to: {
            transform:
              "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("daisyui"),
    addVariablesForColors, // Adding the custom color variables plugin
  ],
};

// Plugin to add Tailwind colors as CSS variables
function addVariablesForColors({
  addBase,
  theme,
}: any) {
  let allColors = flattenColorPalette(
    theme("colors")
  );
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(
      ([key, val]) => [`--${key}`, val]
    )
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = config;
