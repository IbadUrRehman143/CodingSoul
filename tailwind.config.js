/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",  // Prefix for all Tailwind CSS classes
  important: true,
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        GlobalColorprimary: "#6EC1E4",
        GlobalColorsecondary: "#54595F",
        GlobalColortext: "#7A7A7A",
        GlobalColoraccent: "#61CE70",
        GlobalColor05b8906: "#643EFE",
        GlobalColorc85df0c: "#1DE3FE",
        GlobalColord4b0483: "#4877FC",
      },
      fontSize: {
        FSm: "17px",
        FMd: "20px",
        FMdl: "22px",
        FLg: "24px",
        Fxlg: "38px",
        Fxxlg: "42px",
        Fxl: "46px",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    // prefix: "twh-",  // Ensure DaisyUI uses the same prefix
  }
}
