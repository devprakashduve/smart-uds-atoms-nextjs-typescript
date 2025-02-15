import type { Config } from 'tailwindcss';

const darkPinkWhitePalette = {
  primary: {
    light: '#FBCFE8', // Light Pink
    DEFAULT: '#DB2777', // Dark Pink
    dark: '#9D174D', // Deep Magenta
  },
  secondary: {
    light: '#F5F5F5', // Soft White
    DEFAULT: '#FFFFFF', // Pure White
    dark: '#E5E5E5', // Light Grayish White
  },
  accent: {
    light: '#FDE8E8', // Light Rose
    DEFAULT: '#E11D48', // Crimson
    dark: '#BE123C', // Dark Red
  },
  line: {
    light: '#FBCFE8', // Light Pink
    DEFAULT: '#DB2777', // Dark Pink
    dark: '#9D174D', // Deep Magenta
  },
  letter: {
    light: '#9CA3AF', // Gray (Slate-400)
    DEFAULT: '#1F2937', // Dark Charcoal (Slate-800)
    dark: '#111827', // Almost Black (Slate-900)
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
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '30px',
        '3xl': '36px',
        '4xl': '48px',
        '5xl': '64px',
        '6xl': '80px',
        '7xl': '96px', // New font size (7xl)
      },
      lineHeight: {
        DEFAULT: '1',
        normal: '1.5',
        relaxed: '1.75',
        snug: '1.25',
        tight: '1.1',
        loose: '2',
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
        menu: '0px',
        DEFAULT: '8px',
        lg: '12px', // Large border radius
        xl: '16px', // Extra large border radius
        '2xl': '24px', // 2x Extra large border radius
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
