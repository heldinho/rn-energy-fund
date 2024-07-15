/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thin: "Sora_100Thin",
        "extra-light": "Sora_200ExtraLight",
        light: "Sora_300Light",
        regular: "Sora_400Regular",
        medium: "Sora_500Medium",
        "semi-bold": "Sora_600SemiBold",
        bold: "Sora_700Bold",
        "extra-bold": "Sora_800ExtraBold",

        "sintony-regular": "Sintony_400Regular",
      },
    },
  },
  plugins: [],
};
