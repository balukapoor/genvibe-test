/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF6',
          100: '#FAF6EC',
          200: '#F2EBDB',
          300: '#E6DCC5',
        },
        ink: {
          50: '#F3F5F2',
          100: '#E4E8E3',
          200: '#C9D1C9',
          300: '#A3AFA5',
          400: '#77867B',
          500: '#55645A',
          600: '#3E4C43',
          700: '#2B372F',
          800: '#1D2922',
          900: '#121C17',
        },
        coral: {
          100: '#FFE6DE',
          200: '#FFCDBF',
          300: '#FFA48C',
          400: '#FF7D5C',
          500: '#F4532D',
          600: '#D93F1C',
          700: '#B53114',
        },
        sage: {
          100: '#DDEBDD',
          300: '#A9CBAE',
          500: '#5E9970',
          700: '#2F5E43',
        },
        amber: {
          100: '#FBEBC4',
          500: '#C98A12',
          700: '#7A5208',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 3px hsla(150, 20%, 8%, 0.12)',
        md: '0 4px 6px hsla(150, 20%, 8%, 0.1)',
        lg: '0 5px 15px hsla(150, 20%, 8%, 0.12)',
        xl: '0 10px 24px hsla(150, 20%, 8%, 0.14)',
        '2xl': '0 15px 35px hsla(150, 20%, 8%, 0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 36s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
