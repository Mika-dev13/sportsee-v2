import PropTypes from 'prop-types';
import DashboardHeader from './DashboardHeader';
import DailyUserActivity from './DailyUserActivity';
import UserAverageSessions from './UserAverageSessions';
import UserPerformanceChart from './UserPerformanceChart';
import '../styles/Dashboard.css';
import UserTodayScore from './UserTodayScore';
import Cardinfos from './CardInfos';

/**
 * Display user Dashboard
 * @component
 * @returns { reactElement }
 */
function Dashboard({
  userInfos,
  sessions,
  averageSessions,
  kind,
  data,
  score,
  keyData,
}) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <DashboardHeader firstName={userInfos.firstName} />
      </div>

      <div className="dashboard-activity-container">
        <div>
          <DailyUserActivity sessions={sessions} />
          <div className="user-graph">
            <UserAverageSessions averageSessions={averageSessions} />
            <UserPerformanceChart kind={kind} data={data} />
            <UserTodayScore score={score} />
          </div>
        </div>

        <div className="cardinfos-container">
          <Cardinfos
            keyData={keyData}
            type="Calories"
            value={keyData.calorieCount}
          />
          <Cardinfos
            keyData={keyData}
            type="Protéines"
            value={keyData.proteinCount}
          />
          <Cardinfos
            keyData={keyData}
            type="Glucides"
            value={keyData.carbohydrateCount}
          />
          <Cardinfos
            keyData={keyData}
            type="Lipides"
            value={keyData.lipidCount}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

Dashboard.propTypes = {
  userInfos: PropTypes.object,
  sessions: PropTypes.array,
  averageSessions: PropTypes.array,
  kind: PropTypes.object,
  data: PropTypes.array,
  score: PropTypes.number,
  keyData: PropTypes.object,
};
