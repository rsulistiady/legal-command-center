import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MatterCard } from '@/components/legal/MatterCard';
import { useLegalStore } from '@/store/useLegalStore';

export const MappingPage = () => {
  const matters = useLegalStore((s) => s.matters);
  const query = useLegalStore((s) => s.globalQuery);
  const setSelected = useLegalStore((s) => s.setSelectedMatterId);
  const [riskFilter, setRiskFilter] = useState<'All' | 'High' | 'Critical'>('All');

  const filtered = useMemo(
    () =>
      matters.filter((matter) => {
        const hit = `${matter.title} ${matter.category} ${matter.owner}`.toLowerCase().includes(query.toLowerCase());
        const riskMatch = riskFilter === 'All' || matter.riskLevel === riskFilter;
        return hit && riskMatch;
      }),
    [matters, query, riskFilter],
  );

  return (
    <section className="space-y-4">
      <div className="panel flex items-center gap-3 p-4">
        {(['All', 'High', 'Critical'] as const).map((r) => (
          <button key={r} className={`rounded-lg px-3 py-1.5 text-sm ${riskFilter === r ? 'bg-brand text-white' : 'bg-slate-800 text-slate-300'}`} onClick={() => setRiskFilter(r)}>{r} Risk</button>
        ))}
      </div>
      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid grid-cols-3 gap-4">
          {filtered.map((matter) => (
            <MatterCard key={matter.id} matter={matter} onClick={() => setSelected(matter.id)} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
