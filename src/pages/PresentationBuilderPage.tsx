import { useState } from 'react';
import { useLegalStore } from '@/store/useLegalStore';

const sectionOptions = ['Overview', 'Current legal matters', 'Workflow progress', 'Risk heatmap', 'Validation findings', 'Action plan', 'Recommendations'];

export const PresentationBuilderPage = () => {
  const decks = useLegalStore((s) => s.decks);
  const viewMode = useLegalStore((s) => s.viewMode);
  const setViewMode = useLegalStore((s) => s.setViewMode);
  const [sections, setSections] = useState(sectionOptions.slice(0, 4));

  return (
    <section className="grid grid-cols-3 gap-4">
      <div className="panel col-span-2 p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold">Presentation Composer</h2>
          <div className="flex gap-2">
            <button className={`rounded-lg px-3 py-1.5 text-sm ${viewMode === 'Executive' ? 'bg-brand' : 'bg-slate-800'}`} onClick={() => setViewMode('Executive')}>Executive</button>
            <button className={`rounded-lg px-3 py-1.5 text-sm ${viewMode === 'Detailed' ? 'bg-brand' : 'bg-slate-800'}`} onClick={() => setViewMode('Detailed')}>Detailed</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {sectionOptions.map((section) => (
            <label key={section} className="flex items-center gap-2 rounded-xl bg-slate-900/70 p-3 text-sm">
              <input
                type="checkbox"
                checked={sections.includes(section)}
                onChange={() => setSections((prev) => (prev.includes(section) ? prev.filter((p) => p !== section) : [...prev, section]))}
              />
              {section}
            </label>
          ))}
        </div>
      </div>
      <div className="panel p-4">
        <p className="mb-3 text-sm font-semibold">Deck Preview</p>
        <p className="text-xs text-slate-400">Template: {decks[0].title}</p>
        <ol className="mt-3 space-y-2 text-sm">
          {sections.map((s, i) => <li key={s} className="rounded-lg bg-slate-900/70 p-2">{i + 1}. {s}</li>)}
        </ol>
      </div>
    </section>
  );
};
