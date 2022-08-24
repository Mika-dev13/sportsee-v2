import { PieChart, Pie } from 'recharts';
import '../styles/UserTodayScore.css';

export default function UserTodayScore({ score }) {
  console.log(score);

  return (
    <div className="today-score-container">
      <h2>Score</h2>
      <PieChart width={258} height={264}>
        <Pie
          data={score}
          dataKey="todayScore"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={80}
          label
        ></Pie>
      </PieChart>
      <div className="today-score-text">
        <p className="bold">{100 * score}%</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </div>
  );
}
