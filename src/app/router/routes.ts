export type AppRoute =
  | 'overview'
  | 'mapping'
  | 'workflow'
  | 'validation'
  | 'presentation-builder'
  | 'presentation-mode'
  | 'documents'
  | 'analytics'
  | 'settings';

export const routeMeta: Array<{ id: AppRoute; label: string }> = [
  { id: 'overview', label: 'Dashboard Overview' },
  { id: 'mapping', label: 'Legal Mapping' },
  { id: 'workflow', label: 'Workflow Center' },
  { id: 'validation', label: 'Validation Center' },
  { id: 'presentation-builder', label: 'Presentation Builder' },
  { id: 'presentation-mode', label: 'Stakeholder Mode' },
  { id: 'documents', label: 'Documents Library' },
  { id: 'analytics', label: 'Analytics & Reports' },
  { id: 'settings', label: 'Settings / Presets' },
];
