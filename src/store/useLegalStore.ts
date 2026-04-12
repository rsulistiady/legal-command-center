import { create } from 'zustand';
import { checklistItems, decks, legalDocuments, legalMatters } from '@/data/mockData';

type ViewMode = 'Executive' | 'Detailed';

type LegalStore = {
  selectedMatterId?: string;
  globalQuery: string;
  viewMode: ViewMode;
  setSelectedMatterId: (id?: string) => void;
  setGlobalQuery: (query: string) => void;
  setViewMode: (mode: ViewMode) => void;
  matters: typeof legalMatters;
  documents: typeof legalDocuments;
  checklists: typeof checklistItems;
  decks: typeof decks;
};

export const useLegalStore = create<LegalStore>((set) => ({
  selectedMatterId: undefined,
  globalQuery: '',
  viewMode: 'Executive',
  setSelectedMatterId: (id) => set({ selectedMatterId: id }),
  setGlobalQuery: (query) => set({ globalQuery: query }),
  setViewMode: (mode) => set({ viewMode: mode }),
  matters: legalMatters,
  documents: legalDocuments,
  checklists: checklistItems,
  decks,
}));
