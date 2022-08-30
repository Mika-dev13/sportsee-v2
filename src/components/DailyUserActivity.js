import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import '../styles/DailyUserActivity.css';

export default function DailyUserActivity({ sessions }) {
  //traitement des données

  return (
    <div className="daily-activity-container">
      <div className="daily-activity-header">
        <h2>Activité quotidienne</h2>
        <div className="legend-container">
          <div className="legend-item">
            <div className="circle circle-black"></div>
            <p>Poids (kg)</p>
          </div>
          <div className="legend-item">
            <div className="circle circle-red"></div>
            <p>Calories brulées (kcal)</p>
          </div>
        </div>
      </div>

      <BarChart
        width={835}
        height={320}
        data={sessions}
        margin={{ top: 30, right: 48, bottom: 32, left: 48 }}
        barGap={8}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#DEDEDE"
        />
        <XAxis
          tickLine={false}
          padding={{ left: -48, right: -48 }}
          stroke="#DEDEDE"
          tick={<CustomizeXaxis />}
        />
        <YAxis
          yAxisId="kg"
          dataKey="kilogram"
          domain={['dataMin - 1', 'dataMax + 2']}
          allowDecimals={false}
          dx={48}
          orientation="right"
          axisLine={false}
          tickLine={false}
          fontSize={14}
          fontWeight={500}
          fill="#9B9EAC"
        />
        <YAxis
          yAxisId="cal"
          dataKey="calories"
          domain={[0, 'dataMax + 50']}
          hide={true}
        />
        <Tooltip content={<CustomTooltip />} />

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

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <div className="tooltip-container">
        <div className="tooltip-text">{`${payload[0].value} kg`}</div>
        <div className="tooltip-text">{`${payload[1].value} kCal`}</div>
      </div>
    );
  }

  return null;
}

function CustomizeXaxis(props) {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#9B9EAC"
        fontSize={14}
        fontWeight={500}
      >
        {payload.value}
      </text>
    </g>
  );
}

DailyUserActivity.propTypes = {
  sessions: PropTypes.array,
};
