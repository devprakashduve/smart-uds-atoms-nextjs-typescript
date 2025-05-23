import Breadcrumbs from '@/Components/Molecules/Breadcrumb';
import { link } from 'fs';
import { text } from 'stream/consumers';
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
      background: '#fff',
      DEFAULT: '#9D174D', // Dark Pink
      text: '#000',
    },
    accordion: {
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
    infoBanner: {
      background: '#FFF',
      to_background: '#FBCFE8',
      light: '#FBCFE8',
      DEFAULT: '#DB2777',
      dark: '#9D174D',
    },
    modelBox: {
      background: '#FFF',
      to_background: '#FBCFE8',
      text: '#9D174D',
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
    breadcrumbs: { text: '#DB2777', background: '#FBCFE8' },
    stepTracker: {
      text: '#fff',
      background: '#FF00E2',
      to_background: '#9D00FF',
      light: '#ccc',
    },
    menu: {
      background: '#FBCFE8',
      from_background: '#fff', // Light Pink
      to_background: '#fff', // Dark Pink
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
  },
  h1: {
    from_color: '#9D174D',
    via_color: '#DB2777',
    to_color: '#DB2777',
  },
  h2: {
    from_color: '#9D174D',
    via_color: '#DB2777',
    to_color: '#DB2777',
  },
  h3: {
    from_color: '#9D174D',
    via_color: '#DB2777',
    to_color: '#DB2777',
  },
  h4: {
    from_color: '#9D174D',
    via_color: '#DB2777',
    to_color: '#DB2777',
  },
  h5: {
    from_color: '#9D174D',
    via_color: '#DB2777',
    to_color: '#DB2777',
  },
  h6: {
    from_color: '#9D174D',
    via_color: '#DB2777',
    to_color: '#DB2777',
  },
  p: {
    from_color: '#9D174D',
    via_color: '#DB2777',
    to_color: '#DB2777',
  },
  a: {
    from_color: '#9D174D',
    via_color: '#DB2777',
    to_color: '#DB2777',
  },
  footer: {
    from_color: '#9D174D',
    via_color: '#DB2777',
    to_color: '#DB2777',
    text: '#fff',
    link: '#fff',
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
    './node_modules/atomic-uds-next-app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      colors: darkPinkWhitePalette,
      zIndex: {
        auto: 'auto',
        '-9': '-9',
      },
      borderRadius: {
        input: '5px',
        checkbox: '5px',
        radio: '5px',
        button: '5px',
        card: '5px',
        infoBanner: '5px',
      },
    },
  },
  plugins: [],
} satisfies Config;
