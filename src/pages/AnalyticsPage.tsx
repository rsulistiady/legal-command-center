import { StatusDonut } from '@/components/charts/StatusDonut';
import { TrendLine } from '@/components/charts/TrendLine';

export const AnalyticsPage = () => (
  <section className="grid grid-cols-2 gap-4">
    <StatusDonut />
    <TrendLine />
    <div className="panel p-4 text-sm text-slate-300">Risk concentration by BU and validation trend cards are ready for API integration.</div>
    <div className="panel p-4 text-sm text-slate-300">Turnaround performance: median approval cycle 9.8 days (mock).</div>
  </section>
);
