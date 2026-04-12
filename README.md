# Legal Command Center Dashboard

Premium internal Legal Operations dashboard built with React + TypeScript + Vite + Tailwind + Framer Motion + Recharts + Zustand.

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Component map

- `src/App.tsx`: app shell, section transitions, route-level composition.
- `src/components/layout`: sidebar + sticky top bar.
- `src/components/legal`: legal cards and detail drawer.
- `src/components/charts`: reusable chart blocks.
- `src/pages`: core product sections (Overview, Mapping, Workflow, Validation, Presentation Builder, Presentation Mode, Documents, Analytics, Settings).
- `src/types/legal.ts`: legal domain models.
- `src/data/mockData.ts`: realistic mock data for matters, docs, validation checklists, and decks.
- `src/store/useLegalStore.ts`: local state and interactions.

## Product modules implemented

1. Dashboard Overview
2. Legal Mapping
3. Workflow Center
4. Validation Center
5. Presentation Builder
6. Stakeholder Presentation Mode
7. Documents Library
8. Analytics & Reports
9. Settings / Presets

## Notes

- Architecture is API-ready with typed domain boundaries and centralized store.
- Presentation export (PDF/PPT) intentionally staged for future integration.
