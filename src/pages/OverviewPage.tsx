import { KpiCard } from '@/components/shared/KpiCard';
import { StatusDonut } from '@/components/charts/StatusDonut';
import { TrendLine } from '@/components/charts/TrendLine';
import { MatterCard } from '@/components/legal/MatterCard';
import { useLegalStore } from '@/store/useLegalStore';

export const OverviewPage = () => {
  const matters = useLegalStore((s) => s.matters);
  const setSelected = useLegalStore((s) => s.setSelectedMatterId);

  return (
    <section className="space-y-5">
      <div className="grid grid-cols-4 gap-4">
        <KpiCard title="Open Matters" value="44" delta="+12% from last month" />
        <KpiCard title="Pending Approvals" value="7" delta="2 urgent this week" />
        <KpiCard title="Docs in Validation" value="18" delta="5 critical findings" />
        <KpiCard title="High Risk Items" value="4" delta="Escalation active" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <StatusDonut />
        <TrendLine />
      </div>
      <div className="panel p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-medium">Urgent Legal Matters</h2>
          <button className="text-xs text-brand">View all</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {matters.map((matter) => (
            <MatterCard key={matter.id} matter={matter} onClick={() => setSelected(matter.id)} />
          ))}
        </div>
      </div>
    </section>
  );
};
