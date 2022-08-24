// import { USER_MAIN_DATA } from '../datas/Datas';
import DashboardHeader from './DashboardHeader';
import DailyUserActivity from './DailyUserActivity';
import UserAverageSessions from './UserAverageSessions';
import UserPerformanceChart from './UserPerformanceChart';
import '../styles/Dashboard.css';

export default function Dashboard({
  userInfos,
  sessions,
  averageSessions,
  kind,
  data,
}) {
  // const { userInfos } = USER_MAIN_DATA[0];

  return (
    <div className="dashboard-container">
      <DashboardHeader firstName={userInfos.firstName} />
      <DailyUserActivity sessions={sessions} />
      <UserAverageSessions averageSessions={averageSessions} />
      <UserPerformanceChart kind={kind} data={data} />
    </div>
  );
}
