import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts';

export default function Activity({ sessions }) {
  console.log(sessions);

  //traitement des données

  return (
    <BarChart width={835} height={320} data={sessions}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      {/* <XAxis dataKey="day" /> */}
      {/* <XAxis tickLine={false} axisLine={false} /> */}
      <XAxis />
      <YAxis orientation="right" />
      <Tooltip />
      <Legend
        verticalAlign="top"
        align="right"
        iconType="circle"
        iconSize={8}
        height={36}
      />
      <Bar dataKey="kilogram" fill="#282D30" barSize={10} />
      <Bar dataKey="calories" fill="#E60000" barSize={10} />
    </BarChart>
  );
}
