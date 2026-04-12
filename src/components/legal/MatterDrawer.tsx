import { AnimatePresence, motion } from 'framer-motion';
import { useLegalStore } from '@/store/useLegalStore';
import { formatDate } from '@/lib/utils';

export const MatterDrawer = () => {
  const id = useLegalStore((s) => s.selectedMatterId);
  const matter = useLegalStore((s) => s.matters.find((m) => m.id === id));
  const setSelected = useLegalStore((s) => s.setSelectedMatterId);

  return (
    <AnimatePresence>
      {matter && (
        <motion.aside
          initial={{ x: 460 }}
          animate={{ x: 0 }}
          exit={{ x: 460 }}
          className="fixed right-6 top-6 z-30 h-[calc(100vh-3rem)] w-[430px] rounded-2xl border border-slate-700 bg-panel p-5 shadow-panel"
        >
          <button onClick={() => setSelected(undefined)} className="mb-3 text-xs text-slate-300">Close</button>
          <h2 className="text-lg font-semibold">{matter.title}</h2>
          <p className="mt-2 text-sm text-slate-400">{matter.summary}</p>
          <div className="mt-4 space-y-2 text-sm">
            <p><span className="text-slate-400">Stage:</span> {matter.workflowStage}</p>
            <p><span className="text-slate-400">Due Date:</span> {formatDate(matter.dueDate)}</p>
            <p><span className="text-slate-400">Next Action:</span> {matter.nextAction}</p>
          </div>
          <div className="mt-5">
            <p className="mb-2 text-xs uppercase tracking-wider text-slate-400">Blockers</p>
            {matter.blockers.length ? matter.blockers.map((b) => <p key={b} className="mb-2 rounded-lg bg-slate-800 p-2 text-sm">{b}</p>) : <p className="text-sm text-slate-400">No blockers identified.</p>}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
