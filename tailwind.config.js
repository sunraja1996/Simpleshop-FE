/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   extend: {
      colors:{
      'primary' : "#FF6969",
      'secondary' : "#FFD3B0",
      'light' : "#EEF7FF",
      'button1' : "#A6D0DD",
      'button2' : "#D24545",
      "bg" : "#FEFBF6",
      "chatme" : "#C6EBC5",
      "chatfrom" : "#FFE4C9",
      "button1-hover" : "#87BAC6",
      "button2-hover" : "#A94438"
    },
    fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat : ["Montserrat", 'system-ui'],
        benchnine:["BenchNine", 'sans-serif']
      },
  },
},
  plugins: [],
}