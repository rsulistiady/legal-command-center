import { motion } from 'framer-motion';

export const KpiCard = ({ title, value, delta }: { title: string; value: string; delta: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    className="panel p-4"
  >
    <p className="text-xs uppercase tracking-wider text-slate-400">{title}</p>
    <p className="mt-2 text-2xl font-semibold">{value}</p>
    <p className="mt-2 text-xs text-emerald-300">{delta}</p>
  </motion.div>
);
