/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF9500',
          dark: '#E68600',
          light: '#FFB84D',
        },
        secondary: '#111111',
        accent: '#FF9500',
        success: '#34D399',
        warning: '#FBBF24',
        error: '#EF4444',
        gray: {
          100: '#F9FAFB',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#D1D5DB',
          500: '#9CA3AF',
          600: '#6B7280',
          700: '#4B5563',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'btn': '0 4px 6px -1px rgba(255, 149, 0, 0.4)',
      },
    },
  },
  plugins: [],
};