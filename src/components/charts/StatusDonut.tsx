import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'In Progress', value: 14, color: '#4F7CFF' },
  { name: 'Pending Approval', value: 6, color: '#F59E0B' },
  { name: 'Blocked', value: 3, color: '#EF4444' },
  { name: 'Completed', value: 21, color: '#10B981' },
];

export const StatusDonut = () => (
  <div className="panel h-72 p-4">
    <p className="mb-4 text-sm font-medium">Legal Matters by Status</p>
    <ResponsiveContainer width="100%" height="90%">
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={58} outerRadius={94}>
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);
