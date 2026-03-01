/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#1CA8AF',
          hover: '#148A90',
          light: '#2BB6C4',
        },
        heading: {
          dark: '#0F3F3F',
        },
        background: {
          light: '#F4F7F6',
        },
        card: {
          white: '#FFFFFF',
        },
        text: {
          muted: '#6B7A7A',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
