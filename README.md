# Pomodoro Timer

A production-ready Pomodoro timer built with React and TypeScript,
featuring a comprehensive Vitest test suite and CI/CD pipeline that
blocks deployment on failed tests.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Vitest + React Testing Library

## Features

- 25 min work / 5 min short break / 15 min long break
- Auto switches modes after timer ends
- Session counter (every 4 pomodoros triggers long break)
- Start, pause, reset controls
- Full TypeScript implementation with types and interfaces
- CI/CD via GitHub Actions — failed tests block deployment

## Tests

Built with a TDD approach — tests written alongside components
covering timer logic, session tracking and UI interactions.

```bash
npm test
```

## Running Locally

```bash
npm install
npm run dev
```
