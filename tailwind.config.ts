import type { Config } from 'tailwindcss';

const darkPinkWhitePalette = {
  atom: {
    avatar: {
      background: '#9CA3AF',
      text: '#fff',
    },
    input: {
      background: '#9CA3AF',
      DEFAULT: '#9D174D', // Dark Pink
      text: '#000',
    },
  },

  rating: {
    light: '#FDE047', // Yellow
    DEFAULT: '#FACC15', // Yellow
    dark: '#ccc', // Dark Yellow
  },
  card: {
    background: '#FFF',
    to_background: '#FBCFE8',
    light: '#FBCFE8', // Light Pink
    DEFAULT: '#DB2777', // Dark Pink
    dark: '#9D174D', // Deep Magenta
  },
  menu: {
    background: '#FBCFE8',
    from_background: '', // Light Pink
    to_background: '#FBCFE8', // Dark Pink
    hover: '#f2f2f2', // Deep Magenta
    light: '#FBCFE8', // Light Pink
    DEFAULT: '#DB2777', // Dark Pink
    dark: '#9D174D', // Deep Magenta
  },
  btn: {
    light: '#FBCFE8', // Light Pink
    DEFAULT: '#DB2777', // Dark Pink
    dark: '#9D174D', // Dark Magenta
  },
  neutral: '#F3F4F6', // Neutral Gray
  info: '#3b82f6', // Soft Blue
  success: '#22c55e', // Light Green
  warning: '#eab308', // Yellow
  error: '#ef4444', // Soft Red
};

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: darkPinkWhitePalette,
      zIndex: {
        auto: 'auto', // Add a custom `z-auto` class
        '-9': '-9', // Add a custom `z-[-9]` class
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '72': '18rem', // New spacing value
        '80': '20rem', // New spacing value
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
      },

      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      borderRadius: {
        input: '20px',
        checkbox: '5px',
        radio: '5px',
      },
      boxShadow: {
        default: '0 2px 4px rgba(0, 0, 0, 0.1)',
        md: '0 4px 8px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 20px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
        spacing: 'margin, padding',
        colors: 'color, background-color, border-color',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        // Custom breakpoints for more flexibility
        '3xl': '1800px', // Custom breakpoint for larger screens
      },
    },
  },
  plugins: [],
} satisfies Config;
