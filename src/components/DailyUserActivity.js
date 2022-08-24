import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts';
import '../styles/DailyUserActivity.css';

export default function DailyUserActivity({ sessions }) {
  //traitement des données

  return (
    <div className="daily-activity-container">
      <h2>Activité quotidienne</h2>
      <BarChart
        width={835}
        height={320}
        data={sessions}
        margin={{ top: 30, right: 48, bottom: 32, left: 48 }}
        barGap={8}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis tickCount={7} tickLine={false} />
        <YAxis
          yAxisId="kg"
          dataKey="kilogram"
          domain={['dataMin - 1', 'dataMax + 2']}
          allowDecimals={false}
          dx={48}
          orientation="right"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          yAxisId="cal"
          dataKey="calories"
          domain={[0, 'dataMax + 50']}
          hide={true}
        />
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          height={36}
        />
        <Bar
          yAxisId="kg"
          dataKey="kilogram"
          fill="#282D30"
          barSize={10}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="cal"
          dataKey="calories"
          fill="#E60000"
          barSize={10}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </div>
  );
}
