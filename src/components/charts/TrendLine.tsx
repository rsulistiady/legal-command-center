import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

const points = [
  { month: 'Jan', completion: 52 },
  { month: 'Feb', completion: 58 },
  { month: 'Mar', completion: 63 },
  { month: 'Apr', completion: 71 },
];

export const TrendLine = () => (
  <div className="panel h-72 p-4">
    <p className="mb-4 text-sm font-medium">Workflow Completion Trend</p>
    <ResponsiveContainer width="100%" height="90%">
      <LineChart data={points}>
        <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip />
        <Line type="monotone" dataKey="completion" stroke="#4F7CFF" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
