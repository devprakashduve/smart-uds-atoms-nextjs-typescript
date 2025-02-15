import Spinner from './index';

export default {
  title: 'Components/Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number' },
      description: 'Width of the spinner.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 50 },
      },
    },
    height: {
      control: { type: 'number' },
      description: 'Height of the spinner.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 50 },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Custom class names to apply to the spinner.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    variant: {
      control: { type: 'select', options: ['css', 'svg'] },
      description: 'Spinner variant to use.',
      table: {
        type: { summary: "'css' | 'svg'" },
        defaultValue: { summary: 'css' },
      },
    },
    colorTheme: {
      control: { type: 'select', options: ['light', 'primary', 'dark'] },
      description: 'Color theme for the spinner.',
      table: {
        type: { summary: "'light' | 'primary' | 'dark'" },
        defaultValue: { summary: 'light' },
      },
    },
    customLoader: {
      control: false,
      description:
        'Custom loader element to render instead of the default spinner.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export const WithCSSLight = {
  args: {
    width: 50,
    height: 50,
    className: '',
    variant: 'css',
    colorTheme: 'light',
  },
};

export const WithCSSPrimary = {
  args: {
    width: 50,
    height: 50,
    className: '',
    variant: 'css',
    colorTheme: 'primary',
  },
};

export const WithCSSDark = {
  args: {
    width: 50,
    height: 50,
    className: '',
    variant: 'css',
    colorTheme: 'dark',
  },
};

export const WithSVG = {
  args: {
    width: 96,
    height: 96,
    className: '',
    variant: 'svg',
  },
};

export const CustomLoader = {
  args: {
    width: 96,
    height: 96,
    className: '',
    variant: 'svg',
    customLoader: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <linearGradient id="a8">
          <stop offset="0" stop-color="#FF156D" stop-opacity="0"></stop>
          <stop offset="1" stop-color="#FF156D"></stop>
        </linearGradient>
        <circle
          fill="none"
          stroke="url(#a8)"
          stroke-width="30"
          stroke-linecap="round"
          stroke-dasharray="0 44 0 44 0 44 0 44 0 360"
          cx="100"
          cy="100"
          r="70"
          transform-origin="center"
        >
          <animateTransform
            type="rotate"
            attributeName="transform"
            calcMode="discrete"
            dur="2s"
            values="360;324;288;252;216;180;144;108;72;36"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </svg>
    ),
  },
};
