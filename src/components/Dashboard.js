// import { USER_MAIN_DATA } from '../datas/Datas';
import DashboardHeader from './DashboardHeader';
import Activity from './BarChart';

export default function Dashboard({ userInfos, sessions }) {
  // const { userInfos } = USER_MAIN_DATA[0];

  return (
    <div>
      <DashboardHeader firstName={userInfos.firstName} />
      <Activity sessions={sessions} />
    </div>
  );
}
