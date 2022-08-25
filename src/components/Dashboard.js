// import { USER_MAIN_DATA } from '../datas/Datas';
import DashboardHeader from './DashboardHeader';
import DailyUserActivity from './DailyUserActivity';
import UserAverageSessions from './UserAverageSessions';
import UserPerformanceChart from './UserPerformanceChart';
import '../styles/Dashboard.css';
import UserTodayScore from './UserTodayScore';
import Cardinfos from './CardInfos';

export default function Dashboard({
  userInfos,
  sessions,
  averageSessions,
  kind,
  data,
  score,
  keyData,
}) {
  // const { userInfos } = USER_MAIN_DATA[0];

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
