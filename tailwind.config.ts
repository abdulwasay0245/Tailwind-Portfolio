import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      screens: {
        "2lg-max": {'max': '1280px'},
        "lg-max": { 'max': '1024px' },
        "md-max": { 'max': '768px'},
        "sm-max": { 'max': '640px' },
        "xsm-max": { 'max': '320px' },
      },
      colors: {
        darkBlue: '#3D5A80',
        buttons: '#EE6C4D',
        sections: '#293241'
      },
    },
  },
  plugins: [],
} satisfies Config;
