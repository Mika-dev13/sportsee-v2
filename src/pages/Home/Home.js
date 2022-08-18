import { useParams } from 'react-router-dom';
import { USER_MAIN_DATA, USER_ACTIVITY } from '../../datas/Datas.js';
import '../Home/Home.css';
// import {
//   USER_MAIN_DATA,
//   USER_ACTIVITY,
//   USER_AVERAGE_SESSIONS,
//   USER_PERFORMANCE,
// } from '../../datas/Datas';
import Aside from '../../components/Aside';
import Dashboard from '../../components/Dashboard';

export default function Home() {
  const { userId } = useParams();

  const userMainDataId = USER_MAIN_DATA.find(
    (item) => item.id === parseInt(userId)
  );

  const userActivityId = USER_ACTIVITY.find(
    (item) => item.userId === parseInt(userId)
  );

  const { todayScore, userInfos } = userMainDataId;
  const { sessions } = userActivityId;

  return (
    <div className="home-container">
      <Aside />
      <Dashboard userInfos={userInfos} score={todayScore} sessions={sessions} />
    </div>
  );
}
