# Project: my-app-npx

Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + Storybook 8

## Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format with ESLint + Prettier
npm run storybook    # Start Storybook (http://localhost:6006)
```

## Code Style

- Use ES modules (import/export), never CommonJS (require)
- TypeScript strict mode is enabled
- Use `@/*` path alias for imports (e.g., `@/src/components/Button`)
- Tailwind CSS v4 for styling (use utility classes)
- Format on save with Prettier

## Project Structure

```
app/           # Next.js App Router pages and layouts
src/components # React components with .stories.tsx files
public/        # Static assets
.storybook/    # Storybook configuration
```

## Component Guidelines

- Create components in `src/components/`
- Add Storybook stories (*.stories.tsx) for each component
- Use Tailwind CSS utility classes for styling
- Export components with named exports

## Workflow

- Run `npm run lint` before committing
- Run `npm run storybook` to preview components
- Run `npm run build` to verify production build
