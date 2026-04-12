import { motion } from 'framer-motion';
import type { LegalMatter } from '@/types/legal';
import { formatDate } from '@/lib/utils';

const riskClass: Record<LegalMatter['riskLevel'], string> = {
  Low: 'bg-emerald-500/20 text-emerald-300',
  Medium: 'bg-amber-500/20 text-amber-300',
  High: 'bg-orange-500/20 text-orange-300',
  Critical: 'bg-red-500/20 text-red-300',
};

export const MatterCard = ({ matter, onClick }: { matter: LegalMatter; onClick: () => void }) => (
  <motion.button
    layout
    whileHover={{ y: -3 }}
    onClick={onClick}
    className="panel w-full p-4 text-left"
  >
    <div className="mb-2 flex items-start justify-between gap-3">
      <h3 className="text-sm font-semibold leading-5">{matter.title}</h3>
      <span className={`badge ${riskClass[matter.riskLevel]}`}>{matter.riskLevel}</span>
    </div>
    <p className="text-xs text-slate-400">{matter.category} • {matter.businessUnit}</p>
    <div className="mt-3 h-2 rounded-full bg-slate-800">
      <div className="h-full rounded-full bg-brand" style={{ width: `${matter.completion}%` }} />
    </div>
    <div className="mt-3 flex justify-between text-xs text-slate-400">
      <span>{matter.owner}</span>
      <span>Due {formatDate(matter.dueDate)}</span>
    </div>
  </motion.button>
);
