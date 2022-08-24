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
  const { userInfos, score, keyData } = userMainDataId;

  const userActivityId = USER_ACTIVITY.find(
    (item) => item.userId === parseInt(userId)
  );
  const { sessions } = userActivityId;

  const userAverageSessionsId = USER_AVERAGE_SESSIONS.find(
    (item) => item.userId === parseInt(userId)
  );

  const userPerformanceId = USER_PERFORMANCE.find(
    (item) => item.userId === parseInt(userId)
  );
  const { kind, data } = userPerformanceId;

  return (
    <div className="home-container">
      <Aside />
      <Dashboard
        userInfos={userInfos}
        score={score}
        sessions={sessions}
        averageSessions={userAverageSessionsId.sessions}
        kind={kind}
        data={data}
        keyData={keyData}
      />
    </div>
  );
}
