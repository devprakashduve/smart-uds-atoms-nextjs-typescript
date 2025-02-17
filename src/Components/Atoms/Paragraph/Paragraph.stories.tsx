import Paragraph from '.';

export default {
  title: 'Components/Atoms/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
};

export const Thin = {
  args: {
    children: 'This is a paragraph.',
    className: 'font-light',
    thin: true,
  },
};

export const Normal = {
  args: {
    children: 'This is a paragraph.',
    className: 'font-light',
    normal: true,
  },
};

export const Bold = {
  args: {
    children: 'This is a custom styled paragraph.',
    className: 'font-dark',
    bold: true,
  },
};
