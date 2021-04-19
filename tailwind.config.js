const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        htle_yellow: "#FCE373",
        htle_sidebar: "#231F20",
        htle_beige: "#7D775F",
      },
    },
  },

  // vi fjerner dette pis for at være hurtige
  
  // variants: {
  //   extend: {
  //     opacity: ["disabled"],
  //     animation: ["hover"],
  //     transform: ["hover", "group-hover"],
  //   },
  // },
};
