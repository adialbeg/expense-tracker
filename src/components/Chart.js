import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Legend } from 'recharts';
export default function ExpenseChart({ expenses }) {
  const data = Object.values(
    expenses.reduce((acc, e) => {
      if (!acc[e.category]) acc[e.category] = { name: e.category, value: 0 };
      acc[e.category].value += e.amount;
      return acc;
    }, {})
  );

  const COLORS = ["#4f46e5", "#16a34a", "#f97316", "#e11d48", "#0891b2"];

  if (data.length === 0)
    return (
      <div className="chart empty">
        <p>No data yet — add an expense to see your chart.</p>
      </div>
    );

  return (
    <div className="chart">
      <h2>Spending by Category</h2>
      <PieChart width={300} height={300}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
