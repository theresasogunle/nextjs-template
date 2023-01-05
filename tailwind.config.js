const defaultTheme = require("tailwindcss/defaultTheme");
const config = require("./tailwind.config.template.js");

module.exports = {
  presets: [config.preset],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: [config.utils.pxRem(12), 1.5],
      base: [config.utils.pxRem(16), 1.5],
      lg: [config.utils.pxRem(24), 1.25],
    },
  },
};
