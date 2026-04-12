import { useLegalStore } from '@/store/useLegalStore';

const columns = ['Request Submitted', 'Under Review', 'Drafting', 'Internal Review', 'Approval', 'Execution'] as const;

export const WorkflowPage = () => {
  const matters = useLegalStore((s) => s.matters);

  return (
    <section className="grid grid-cols-6 gap-3 overflow-x-auto pb-3">
      {columns.map((stage) => (
        <div key={stage} className="panel min-h-[420px] p-3">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">{stage}</p>
          <div className="space-y-2">
            {matters.filter((m) => m.workflowStage === stage).map((m) => (
              <article key={m.id} className="rounded-xl bg-slate-900/80 p-3 text-sm">
                <p className="font-medium">{m.title}</p>
                <p className="mt-1 text-xs text-slate-400">PIC: {m.owner}</p>
                <div className="mt-2 h-1.5 rounded-full bg-slate-800"><div className="h-full rounded-full bg-brand" style={{ width: `${m.completion}%` }} /></div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
