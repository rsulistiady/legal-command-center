import { BriefcaseBusiness, ChartBar, FileCheck2, Files, LayoutDashboard, PlaySquare, Presentation, Settings2, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';
import { routeMeta, type AppRoute } from '@/app/router/routes';
import { cn } from '@/lib/utils';

const icons = {
  overview: LayoutDashboard,
  mapping: BriefcaseBusiness,
  workflow: Workflow,
  validation: FileCheck2,
  'presentation-builder': Presentation,
  'presentation-mode': PlaySquare,
  documents: Files,
  analytics: ChartBar,
  settings: Settings2,
};

export const Sidebar = ({ route, onChange }: { route: AppRoute; onChange: (route: AppRoute) => void }) => (
  <aside className="w-72 shrink-0 border-r border-slate-700/60 bg-[#0e1424]/80 p-4 backdrop-blur-sm">
    <div className="mb-7">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Legal Ops</p>
      <h1 className="mt-2 text-xl font-semibold">Command Center</h1>
    </div>
    <nav className="space-y-1">
      {routeMeta.map((item) => {
        const Icon = icons[item.id];
        const active = route === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={cn('relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition', active ? 'text-white' : 'text-slate-300 hover:bg-slate-800/70')}
          >
            {active && <motion.span layoutId="active-nav" className="absolute inset-0 rounded-xl bg-brand/30" />}
            <Icon className="relative z-10 h-4 w-4" />
            <span className="relative z-10">{item.label}</span>
          </button>
        );
      })}
    </nav>
  </aside>
);
