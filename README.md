# smart-uds-atoms-nextjs-typescript

<img width="403" alt="Screenshot 2025-02-27 at 1 46 29 AM" src="https://github.com/user-attachments/assets/42a3ea5a-2ab6-4213-a2fe-ffbc157d36ad" />

<img width="400" alt="Screenshot 2025-02-27 at 1 40 37 AM" src="https://github.com/user-attachments/assets/696039fb-a18e-451c-9ada-46ed2f961a27" />

<img width="1079" alt="Screenshot 2025-02-27 at 1 57 33 AM" src="https://github.com/user-attachments/assets/33a4f30c-6dfa-4cc4-a79d-464f11ba6da2" />

# Overview

Smart UDS Atoms is a component library built with Next.js and TypeScript, following atomic design principles. It provides reusable UI components (atoms, molecules, organisms, etc.) to streamline development and maintain consistency across projects. This repository serves as a foundation for building scalable web applications with modern tooling.

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

# Setup

# step 1:

npm i atomic-uds-next-app

# step 2:

npm i @heroicons/react ajv enzyme next react react-dom

# step 3:

replace your tailwind.config.ts with https://github.com/devprakashduve/smart-uds-atoms-nextjs-typescript/blob/main/tailwind.config.ts

# step 4:

replace https://github.com/devprakashduve/smart-uds-atoms-nextjs-typescript/blob/main/src/app/globals.css

you can start using components

for component reference you can clone the repo in local and run

npm run storybook
