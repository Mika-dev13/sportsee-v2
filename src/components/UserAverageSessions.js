import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import '../styles/UserAverageSessions.css';

export default function UserAverageSessions({ averageSessions }) {
  return (
    <div className="user-average-lineChart">
      <h2>Durée moyenne des sessions</h2>
      <LineChart
        width={258}
        height={263}
        data={averageSessions}
        margin={{ top: 80, right: 12, bottom: 24, left: 12 }}
      >
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: 'rgba(255,255,255, 0.6)',
            strokeWidth: 10,
            r: 3,
          }}
        />
        <Tooltip
          // formatter={function (value, name) {
          //   return `${value}`;
          // }}
          cursor={false}
          content={<CustomTooltip />}
          // viewBox={{ x: 0, y: 0, width: 100, height: 100 }}
        />
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.6)"
          axisLine={false}
          dy={10}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
        />
      </LineChart>
    </div>
  );
}

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <div className="tooltip-average-container">
        <div className="tooltip-average-text">{`${payload[0].value} mn`}</div>
      </div>
    );
  }

  return null;
}
