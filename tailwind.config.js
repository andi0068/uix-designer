/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        accent: colors.blue[700],
        separator: 'hsla(0, 0%, 50%, .24)',
        foreground: {
          DEFAULT: colors.neutral[900],
          secondary: colors.neutral[700],
          tertiary: colors.neutral[500],
        },
        background: {
          DEFAULT: colors.neutral[50],
          secondary: colors.neutral[100],
        },
        dark: {
          foreground: {
            DEFAULT: colors.neutral[50],
            secondary: colors.neutral[400],
            tertiary: colors.neutral[500],
          },
          background: {
            DEFAULT: colors.neutral[950],
            secondary: colors.neutral[900],
          },
        },
      }),
    },
  },
  plugins: [],
};
