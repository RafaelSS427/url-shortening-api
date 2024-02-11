import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#2acfcf',
          '50': '#f0fdfc',
          '100': '#ccfbf7',
          '200': '#99f6f0',
          '300': '#5eeae6',
          '400': '#2acfcf',
          '500': '#14b5b8',
          '600': '#0d8f94',
          '700': '#0f7176',
          '800': '#11595e',
          '900': '#134b4e',
          '950': '#042b2f',
      },
        darkViolet: 'hsl(257, 27%, 26%)',

        // Secondary
        red: 'hsl(0, 87%, 67%)',

        // Neutral
        gray: 'hsl(0, 0%, 75%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
        lightViolet: "hsl(230, 25%, 95%)"
      }
    },
  },
  plugins: [],
}
export default config
