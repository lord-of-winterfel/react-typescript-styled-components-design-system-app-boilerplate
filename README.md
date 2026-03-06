# Note Maker

A vanilla React application built with **React**, **TypeScript**, **Vite**, and **styled-components**. It includes an internal design system with tokens, themes, and reusable components.

## Tech Stack

- **React** 18
- **TypeScript**
- **Vite**
- **styled-components** (no CSS Modules, no external UI libraries)

## Design System

- **Design tokens**: colors, spacing, typography, radius, breakpoints
- **Theme system**: `ThemeProvider`, `createTheme()`, light and dark themes
- **Reusable components**: Button, Card
- **Responsive styling**: breakpoint-based layout (grid columns, padding, font sizes)

## Features

- Add notes
- Display notes in a responsive grid (1 column on mobile, 2 on tablet, 3 on desktop)
- Delete notes
- Light / dark theme toggle

## Project Structure

```
src/
├── app/
│   └── App.tsx
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.types.ts
│   │   └── Button.styles.ts
│   └── Card/
│       ├── Card.tsx
│       └── Card.styles.ts
├── features/
│   └── notes/
│       ├── NotesPage.tsx
│       ├── NoteForm.tsx
│       ├── NoteList.tsx
│       └── NoteItem.tsx
├── theme/
│   ├── ThemeProvider.tsx
│   ├── createTheme.ts
│   ├── lightTheme.ts
│   ├── darkTheme.ts
│   └── index.ts
├── tokens/
│   ├── colors.ts
│   ├── spacing.ts
│   ├── typography.ts
│   ├── radius.ts
│   ├── breakpoints.ts
│   └── index.ts
├── hooks/
│   └── useTheme.ts
├── styles/
│   └── GlobalStyles.ts
├── types/
│   └── note.ts
└── main.tsx
```

## Scripts

- **`npm run dev`** – Start development server
- **`npm run build`** – Build for production
- **`npm run preview`** – Preview production build

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (e.g. `http://localhost:5173`).
