import PropTypes from 'prop-types';
import { PieChart, Pie, Cell } from 'recharts';
import '../styles/UserTodayScore.css';

/**
 * Display user daily score in pie chart
 * @component
 * @param {number} score
 * @returns {reactElement}
 */
function UserTodayScore({ score }) {
  let ValueDefault = score > 0 ? 1 - score : 1;
  let dataTab = [{ value: score }, { value: ValueDefault }];

  const COLORS = ['#FF0000', 'transparent'];

  return (
    <div className="today-score-container">
      <h2>Score</h2>
      <PieChart width={258} height={264}>
        <Pie
          data={dataTab}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
        >
          {dataTab.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              cornerRadius={50}
            />
          ))}
        </Pie>
      </PieChart>
      <div className="today-score-text">
        <p className="bold">{100 * score}%</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </div>
  );
}

export default UserTodayScore;

UserTodayScore.propTypes = {
  score: PropTypes.number,
};
