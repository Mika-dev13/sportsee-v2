import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, Tooltip, Rectangle } from 'recharts';
import '../styles/UserAverageSessions.css';

/**
 * Display user Average sessions in line Chart
 * @component
 * @param  { array } averageSessions user average sessions data
 * @returns {reactElement}
 */
function UserAverageSessions({ averageSessions }) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  averageSessions = averageSessions.map((session, index) => {
    session.day = days[index];
    return session;
  });

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
        <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} />
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

export default UserAverageSessions;

/**
 * Custom tooltip line chart
 * @param {boolean} active
 * @param { Object } payload
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="tooltip-average-container">
        <div className="tooltip-average-text">{`${payload[0].value} mn`}</div>
      </div>
    );
  }

  return null;
};

/**
 * Custom line chart cusor
 * @param { Object } props
 * @returns {rechartElement}
 */
const CustomCursor = (props) => {
  const { points, width } = props;
  const { x } = points[0];
  return (
    <Rectangle fill="rgba(0, 0, 0, 0.1" x={x} width={width} height={268} />
  );
};

UserAverageSessions.propTypes = {
  averageSessions: PropTypes.array,
};
