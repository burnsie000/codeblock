import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/hero.jpeg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.red.200), 0 0 10px theme(colors.red.400), 0 0 20px theme(colors.red.600)',
        'neon-md': '0 0 10px theme(colors.red.200), 0 0 20px theme(colors.red.400), 0 0 40px theme (colors.red.600)',
        'neon-lg': '0 0 15px theme(colors.red.200), 0 0 30px theme(colors.red.400), 0 0 60px theme(colors.red.600)',
        'neon-xl': '0 0 20px theme(colors.red.200), 0 0 40px theme(colors.red.400), 0 0 80px theme(colors.red.600)',
      },
      dropShadow: {
        'neon': '0 0 5px theme(colors.red.200), 0 0 10px theme(colors.red.400), 0 0 20px theme(colors.red.600)',
      },
      colors: {
        primary: '#ED2224',
        "nav": "rgba(10, 10, 10, 0.1)"
      },
    },
  },
  plugins: [],
}
export default config
