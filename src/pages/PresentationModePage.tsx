import { motion } from 'framer-motion';
import { useLegalStore } from '@/store/useLegalStore';

export const PresentationModePage = () => {
  const matters = useLegalStore((s) => s.matters);
  const critical = matters.filter((m) => m.riskLevel === 'Critical').length;

  return (
    <section className="space-y-5">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="panel p-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Stakeholder Presentation Mode</p>
        <h2 className="mt-2 text-3xl font-semibold">Legal Portfolio Executive Snapshot</h2>
      </motion.div>
      <div className="grid grid-cols-3 gap-4">
        <div className="panel p-5"><p className="text-xs text-slate-400">Open Matters</p><p className="mt-2 text-4xl font-bold">{matters.length}</p></div>
        <div className="panel p-5"><p className="text-xs text-slate-400">Critical Risks</p><p className="mt-2 text-4xl font-bold text-red-300">{critical}</p></div>
        <div className="panel p-5"><p className="text-xs text-slate-400">Top Recommendation</p><p className="mt-2 text-sm">Accelerate DPA approvals to avoid regulatory exposure.</p></div>
      </div>
    </section>
  );
};
