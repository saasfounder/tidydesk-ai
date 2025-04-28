import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-tidydesk-primary',
    'text-tidydesk-light',
  ],
  theme: {
    extend: {
      colors: {
        'tidydesk-primary': '#091235',
        'tidydesk-accent': '#14202E',
        'tidydesk-secondary': '#2B4257',
        'tidydesk-light': '#88A9C3',
      },
    },
  },
  plugins: [],
}

export default config

