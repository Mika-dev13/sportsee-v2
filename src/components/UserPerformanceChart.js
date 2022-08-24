import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import '../styles/UserPerformance.css';

export default function UserPerformanceChart({ kind, data }) {
  return (
    <div className="user-performance-container">
      <RadarChart outerRadius={90} width={258} height={263} data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="white"
          tickLine={false}
          axisLine={false}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 50]}
          axisLine={false}
          tick={false}
        />
        <Radar stroke="none" fill="#FF0101" fillOpacity={0.6} dataKey="value" />
      </RadarChart>
    </div>
  );
}
