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
          main: '#4CAF50',
          hover: '#45A049',
          light: '#81C784',
          dark: '#388E3C',
        },
        secondary: {
          main: '#2196F3',
          light: '#64B5F6',
          dark: '#1976D2',
        },
        accent: {
          earth: '#D7CCC8',
          warm: '#FFAB91',
        },
        heading: {
          dark: '#1B5E20',
        },
        background: {
          light: '#F1F8E9',
        },
        card: {
          white: '#FFFFFF',
        },
        text: {
          muted: '#546E7A',
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
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in',
        slideUp: 'slideUp 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
