const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        htle_yellow: "#FCE373",
        htle_sidebar: "#231F20",
        htle_beige: "#7D775F",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      animation: ["hover"],
      transform: ["hover", "group-hover"],
    },
  },
};
