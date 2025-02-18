import type { Config } from 'tailwindcss';

const darkPinkWhitePalette = {
  atom: {
    spinner: {
      background: '#9D174D',
    },
    avatar: {
      background: '#9D174D',
      text: '#fff',
    },
    icon: {
      text: '#9D174D',
    },
    badge: {
      background: '#ccc',
      text: '#9D174D',
    },
    input: {
      background: '#9CA3AF',
      DEFAULT: '#9D174D', // Dark Pink
      text: '#000',
    },
    tag: {
      text: '#ccc',
      background: '#9D174D',
    },
    progressBar: {
      background: '#9D174D',
    },
    list: {
      background: '#fff',
      text: '#000',
    },
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
    './node_modules/atomic-uds-next-app/\*\*/\_.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      colors: darkPinkWhitePalette,
      zIndex: {
        auto: 'auto', // Add a custom `z-auto` class
        '-9': '-9', // Add a custom `z-[-9]` class
      },

      borderRadius: {
        input: '20px',
        checkbox: '5px',
        radio: '5px',
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
