import { useParams } from 'react-router-dom';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../datas/Datas.js';
import Aside from '../../components/Aside';
import Dashboard from '../../components/Dashboard';
import '../Home/Home.css';

export default function Home() {
  const { userId } = useParams();

  const userMainDataId = USER_MAIN_DATA.find(
    (item) => item.id === parseInt(userId)
  );

  const userActivityId = USER_ACTIVITY.find(
    (item) => item.userId === parseInt(userId)
  );

  const userAverageSessionsId = USER_AVERAGE_SESSIONS.find(
    (item) => item.userId === parseInt(userId)
  );

  const userPerformanceId = USER_PERFORMANCE.find(
    (item) => item.userId === parseInt(userId)
  );
  const { kind, data } = userPerformanceId;

  const { todayScore, userInfos } = userMainDataId;
  const { sessions } = userActivityId;

  return (
    <div className="home-container">
      <Aside />
      <Dashboard
        userInfos={userInfos}
        score={todayScore}
        sessions={sessions}
        averageSessions={userAverageSessionsId.sessions}
        kind={kind}
        data={data}
      />
    </div>
  );
}
