import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import '../styles/UserPerformance.css';

/**
 * Display user performance in radar chart
 * @component
 * @param { array } data
 * @returns {reactElement}
 */
function UserPerformanceChart({ data }) {
  const kindInOrder = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
  ];

  data = data.map((item, index) => {
    item.kind = kindInOrder[index];

    return item;
  });

  return (
    <div className="user-performance-container">
      <RadarChart outerRadius={90} width={258} height={263} data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="white"
          tickLine={false}
          axisLine={false}
          dy={4}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
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

export default UserPerformanceChart;

UserPerformanceChart.propTypes = {
  data: PropTypes.array,
};
