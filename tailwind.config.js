/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ### Primary

        "Scissors-Gradient-1": "hsl(39, 89%, 49%) ",
        "Scissors-Gradient-2": "hsl(40, 84%, 53%)",
        "Paper-Gradient": "hsl(230, 89%, 62%)",
        "Paper-Gradient-2": " hsl(230, 89%, 65%)",
        "Rock-Gradient": "hsl(349, 71%, 52%) ",
        "Rock-Gradient-2": "hsl(349, 70%, 56%)",

        "Cyan-1": "hsl(189, 59%, 53%) ",
        "cyan-2": "hsl(189, 58%, 57%)",

        // ### Neutral

        "Dark Text": "hsl(229, 25%, 31%)",
        "Score Text": "hsl(229, 64%, 46%)",
        "Header Outline": "hsl(217, 16%, 45%)",

        // ### Background

        "1-background": "hsl(214, 47%, 23%)",
        "2-background": "hsl(237, 49%, 15%)",
      },
      fontFamily: {
        Barlow: "Barlow Semi Condensed",
      },
    },
  },
  plugins: [],
};
