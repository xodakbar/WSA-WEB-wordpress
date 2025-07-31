/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        zoomPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-6px) translateX(3px)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        pingCustom: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
          '75%, 100%': { transform: 'translate(-50%, -50%) scale(2)', opacity: '0' },
        },
      },
      animation: {
        zoomPulse: 'zoomPulse 1.5s infinite',
        float: 'float 3s ease-in-out infinite',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite',
        'ping-custom': 'pingCustom 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
}
