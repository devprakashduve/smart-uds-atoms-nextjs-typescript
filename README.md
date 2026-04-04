# smart-uds-atoms-nextjs-typescript

<img width="403" alt="Screenshot 2025-02-27 at 1 46 29 AM" src="https://github.com/user-attachments/assets/42a3ea5a-2ab6-4213-a2fe-ffbc157d36ad" />

<img width="400" alt="Screenshot 2025-02-27 at 1 40 37 AM" src="https://github.com/user-attachments/assets/696039fb-a18e-451c-9ada-46ed2f961a27" />

<img width="1079" alt="Screenshot 2025-02-27 at 1 57 33 AM" src="https://github.com/user-attachments/assets/33a4f30c-6dfa-4cc4-a79d-464f11ba6da2" />

# Overview

Smart UDS Atoms is a component library built with Next.js and TypeScript, following atomic design principles. It provides reusable UI components (atoms, molecules, organisms, etc.) to streamline development and maintain consistency across projects.

This library is designed to be easily integrated into other Next.js projects, providing a robust set of UI components with a pre-configured design system.

# Typical Atoms Components

Component Name Description Example Props/Features
Button Basic interactive button variant, size, onClick, disabled
Input Text input field type, placeholder, onChange, error
Icon SVG/icon display name (icon type), size, color
Typography Text elements (headings, paragraphs) variant (h1-h6, body), align, color
Avatar User/profile image src, alt, size, shape (circle/square)
Badge Small status indicator count, variant (success/error), position
Spinner Loading indicator size, color, speed
Checkbox Toggle checkbox checked, onChange, disabled
Radio Radio button selected, onChange, label
Chip Compact element for tags/filters label, onDelete, color
Divider Horizontal/vertical separator orientation, thickness, color
ProgressBar Visual progress indicator value, max, variant (linear/circular)

# Configuration

# Integration Guide

To integrate Smart UDS Atoms into your Next.js project, follow these steps:

## Step 1: Install the Library

Install the core library from npm:

```bash
npm install @devprakashduve/atomic-uds-next-app
```

## Step 2: Install Peer Dependencies

The library relies on several peer dependencies. Ensure they are installed in your project:

```bash
npm install @heroicons/react ajv enzyme next react react-dom
```

## Step 3: Configure Tailwind CSS

You need to update your `tailwind.config.ts` (or `tailwind.config.js`) to include the library's components in the `content` array and extend the theme with the project's color palette and border radii.

### 1. Update Content Array
Add the following path to your `content` array so Tailwind can scan the library's components:

```typescript
content: [
  // ... your project's paths
  './node_modules/@devprakashduve/atomic-uds-next-app/**/*.{js,ts,jsx,tsx,mdx,css}',
],
```

### 2. Extend the Theme
The library uses a specific color palette and custom styling. You can either copy the entire configuration or extend your existing one. 

The custom palette used is:

```typescript
const darkPinkWhitePalette = {
  atom: {
    spinner: { background: '#9D174D' },
    avatar: { background: '#9D174D', text: '#fff' },
    icon: { text: '#9D174D' },
    badge: { background: '#ccc', text: '#9D174D' },
    input: { background: '#fff', DEFAULT: '#9D174D', text: '#000' },
    accordion: { background: '#9CA3AF', DEFAULT: '#9D174D', text: '#000' },
    tag: { text: '#ccc', background: '#9D174D' },
    progressBar: { background: '#9D174D' },
    list: { background: '#fff', text: '#000' },
    infoBanner: { background: '#FFF', to_background: '#FBCFE8', light: '#FBCFE8', DEFAULT: '#DB2777', dark: '#9D174D' },
    modelBox: { background: '#FFF', to_background: '#FBCFE8', text: '#9D174D' },
    rating: { light: '#FDE047', DEFAULT: '#FACC15', dark: '#ccc' },
    card: { background: '#FFF', to_background: '#FBCFE8', light: '#FBCFE8', DEFAULT: '#DB2777', dark: '#9D174D' },
    breadcrumbs: { text: '#DB2777', background: '#FBCFE8' },
    stepTracker: { text: '#fff', background: '#FF00E2', to_background: '#9D00FF', light: '#ccc' },
    menu: { background: '#FBCFE8', from_background: '#fff', to_background: '#fff', hover: '#f2f2f2', light: '#FBCFE8', DEFAULT: '#DB2777', dark: '#9D174D' },
    btn: { light: '#FBCFE8', DEFAULT: '#DB2777', dark: '#9D174D' },
  },
  h1: { from_color: '#9D174D', via_color: '#DB2777', to_color: '#DB2777' },
  h2: { from_color: '#9D174D', via_color: '#DB2777', to_color: '#DB2777' },
  h3: { from_color: '#9D174D', via_color: '#DB2777', to_color: '#DB2777' },
  h4: { from_color: '#9D174D', via_color: '#DB2777', to_color: '#DB2777' },
  h5: { from_color: '#9D174D', via_color: '#DB2777', to_color: '#DB2777' },
  h6: { from_color: '#9D174D', via_color: '#DB2777', to_color: '#DB2777' },
  p: { from_color: '#9D174D', via_color: '#DB2777', to_color: '#DB2777' },
  a: { from_color: '#9D174D', via_color: '#DB2777', to_color: '#DB2777' },
  footer: { from_color: '#9D174D', via_color: '#DB2777', to_color: '#DB2777', text: '#fff', link: '#fff' },
  neutral: '#F3F4F6',
  info: '#3b82f6',
  success: '#22c55e',
  warning: '#eab308',
  error: '#ef4444',
};
```

Update your `extend` block:

```typescript
theme: {
  extend: {
    colors: darkPinkWhitePalette,
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
```

## Step 4: Import Global Styles

Import the library's CSS in your root file (e.g., `src/app/layout.tsx` or `pages/_app.tsx`):

```typescript
import '@devprakashduve/atomic-uds-next-app/dist/index.css';
```

## Use Components

Now you can start using the components in your project:

```tsx
import { Button, Avatar } from '@devprakashduve/atomic-uds-next-app';

export default function MyPage() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <Avatar src="/path-to-image.jpg" alt="User Name" />
    </div>
  );
}
```

# Component Documentation & Reference

For a full list of components and their props, you can run the Storybook environment:

1. Clone this repository: `git clone https://github.com/devprakashduve/smart-uds-atoms-nextjs-typescript.git`
2. Install dependencies: `npm install`
3. Run Storybook: `npm run storybook`
