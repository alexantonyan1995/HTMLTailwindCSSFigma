/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        brandPrimary: "#5843F4",
        brandSecondary: "#15FE02",
        neutralWhite: "#FFFFFF",
        neutralDarkest: "#000000",
        neutralDark: "#111111",
        neutralLessDark: "#222222",
        neutralMid: "#333333",
        neutralLight: "#666666",
        neutralLightest: "#BEBEBE",
        symanticDanger: "#FE0215",
        symanticSuccess: "#0FB97C",
        symanticWarning: "#FFD50B",
        symanticInfo: "#0066FF",
        alphaPrimary50: "#5843f47f",
        alphaPrimary10: "#8855ff19",
        alphaSuccess10: "#0fb97c19",
        alphaInfo: "#0066ff19",
        alphaText: "#000000cc",
        yellowLight: "#F5D668",
        greenLight: "#99F96C",
        borderAlpha: "#00000019",
      },
      fontSize: {
        bodyXL: "20px",
        bodyLG: "16px",
        bodyMD: "14px",
        bodySM: "12px",
        bodyXS: "10px",
        headingXL: "32px", 
        headingMD: "24px",
        strongLG: "16px",
        strongMD: "14px",
        footerLG: "11px",
      },
      lineHeight: {
        bodyXL: "28px",
        bodyLG: "22px",
        bodyMD: "20px",
        bodySM: "16px",
        bodyXS: "12px",
        headingXL: "40px",
        headingMD: "32px",
        headingSM: "30px",
        strongLG: "22px",
        strongMD: "20px",
        footerLG: "14px",
      },
      letterSpacing: {
        customLetterSpacing: "-0.02em"
      },
      boxShadow: {
        innerShadow: "inset 0px -0.5px 0px #222222",
        lightShadow: "inset 0px -0.5px 0px #FFFFFF",
        topShadow: "inset 0px 0.5px 0px #222222"
      },
      borderRadius: {
        r_4xl: '32px',
      },
      padding: {
        '60px': '60px',
      }
    },
  },
  plugins: [],
}
