const presets = [
  'Workflow presets',
  'Clause checklist presets',
  'Presentation template presets',
  'Document type presets',
  'Legal category presets',
];

export const SettingsPage = () => (
  <section className="panel p-4">
    <h2 className="mb-4 text-sm font-semibold">Presets & Configuration</h2>
    <div className="grid grid-cols-2 gap-3">
      {presets.map((p) => <button key={p} className="rounded-xl bg-slate-900/70 p-4 text-left text-sm hover:bg-slate-800">{p}</button>)}
    </div>
  </section>
);
