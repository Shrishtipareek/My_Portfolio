/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0A0A0A",
        darkSec: "#111111",
        cardBg: "#1A1A1A",
        borderColor: "#2A2A2A",
        textPrimary: "#F5F5F5",
        textSec: "#A1A1AA",
        lavender: "#A78BFA",
        iceBlue: "#7DD3FC",
        silver: "#D4D4D8",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 10s infinite',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
