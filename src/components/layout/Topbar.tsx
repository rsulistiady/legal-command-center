import { Bell, Search, Sparkles } from 'lucide-react';
import { useLegalStore } from '@/store/useLegalStore';

export const Topbar = () => {
  const query = useLegalStore((s) => s.globalQuery);
  const setQuery = useLegalStore((s) => s.setGlobalQuery);

  return (
    <header className="sticky top-0 z-20 mb-5 flex items-center justify-between gap-4 rounded-2xl border border-slate-700/60 bg-[#111b2e]/80 p-4 backdrop-blur-sm">
      <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-900/70 px-3 py-2">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search matters, docs, owner, tags..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
        />
      </div>
      <button className="rounded-xl bg-brand px-3 py-2 text-sm font-medium">Create Matter</button>
      <button className="rounded-xl border border-slate-600 p-2"><Bell className="h-4 w-4" /></button>
      <button className="rounded-xl border border-slate-600 p-2"><Sparkles className="h-4 w-4" /></button>
    </header>
  );
};
