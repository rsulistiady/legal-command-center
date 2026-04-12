import { useMemo } from 'react';
import { useLegalStore } from '@/store/useLegalStore';

export const ValidationPage = () => {
  const docs = useLegalStore((s) => s.documents);
  const checks = useLegalStore((s) => s.checklists);
  const score = useMemo(() => Math.round(checks.reduce((a, c) => a + (c.status === 'Pass' ? 100 : c.status === 'Warning' ? 65 : 25), 0) / checks.length), [checks]);

  return (
    <section className="grid grid-cols-3 gap-4">
      <div className="panel col-span-2 p-4">
        <h2 className="mb-3 text-sm font-semibold">Checklist-driven Validation Review</h2>
        <div className="space-y-2">
          {checks.map((item) => (
            <div key={item.id} className="rounded-xl bg-slate-900/70 p-3">
              <div className="flex justify-between text-sm"><span>{item.label}</span><span>{item.status}</span></div>
              <p className="mt-1 text-xs text-slate-400">{item.recommendation}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="panel p-4">
          <p className="text-xs uppercase tracking-wider text-slate-400">Readiness Score</p>
          <p className="mt-2 text-4xl font-bold">{score}%</p>
        </div>
        <div className="panel p-4">
          <p className="mb-2 text-sm font-medium">Documents Under Validation</p>
          {docs.map((doc) => <p key={doc.id} className="mb-2 text-sm text-slate-300">{doc.title} • {doc.validationStatus}</p>)}
        </div>
      </div>
    </section>
  );
};
