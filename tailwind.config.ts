import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
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
