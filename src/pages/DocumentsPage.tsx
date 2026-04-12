import { useLegalStore } from '@/store/useLegalStore';

export const DocumentsPage = () => {
  const docs = useLegalStore((s) => s.documents);

  return (
    <section className="panel p-4">
      <h2 className="mb-3 text-sm font-semibold">Document Registry</h2>
      <div className="overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900/80 text-slate-300">
            <tr><th className="p-3">Document</th><th>Type</th><th>Version</th><th>Validation</th><th>Readiness</th></tr>
          </thead>
          <tbody>
            {docs.map((doc) => (
              <tr key={doc.id} className="border-t border-slate-800">
                <td className="p-3">{doc.title}</td>
                <td>{doc.type}</td>
                <td>{doc.version}</td>
                <td>{doc.validationStatus}</td>
                <td>{doc.readinessScore}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
