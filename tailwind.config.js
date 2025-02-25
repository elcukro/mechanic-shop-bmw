/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',      /* BMW Black */
        secondary: '#0066B1',    /* BMW Blue */
        accent: '#E10600',       /* BMW M Red */
        mblue: '#0066B1',        /* BMW M Blue */
        mpurple: '#2E007B',      /* BMW M Dark Purple/Blue */
      },
    },
  },
  plugins: [],
}
