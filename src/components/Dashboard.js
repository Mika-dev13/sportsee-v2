// import { USER_MAIN_DATA } from '../datas/Datas';
import DashboardHeader from './DashboardHeader';

export default function Dashboard({ userInfos, todayScore }) {
  // const { userInfos } = USER_MAIN_DATA[0];

  return (
    <div>
      <DashboardHeader firstName={userInfos.firstName} />
    </div>
  );
}
