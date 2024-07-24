/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1025px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      white: '#FFFFFF',
      honeydew: '#EDFFEE',
      emerald: '#48C352',
      charcoal: '#1D1F1E',
      dolphine: '#646A69',
      error: '#ff3939',
      lightgray: '#F3F3F3',
      darkEmerald: '#00271E',
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 10s linear infinite',
      'infinite-scroll-single-element': 'infinite-scroll 10s linear infinite',
      'decrease-width': 'decrease-width 5s linear infinite',
      pulse: 'pulse 1s linear infinite',
      none: 'none',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(calc(-100% - 4rem))' },
      },
      'infinite-scroll-single-element': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-50%)' },
      },
      'decrease-width': {
        from: { width: '70%' },
        to: { width: '0%' },
      },
      pulse: {
        '0%,100%': { transform: 'translateY(0)', opacity: '1' },
        '50%': { transform: 'translateY(3rem)', opacity: '0.5' },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };

      addUtilities(newUtilities);
    },
    require('@tailwindcss/typography'),
  ],
};
