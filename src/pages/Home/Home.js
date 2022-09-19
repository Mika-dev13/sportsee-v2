import { useParams } from 'react-router-dom';
import { FetchApi } from '../../utils/fetchAPI.js';
import { DataMocke } from '../../utils/dataMocke.js';

import Aside from '../../components/Aside';
import Dashboard from '../../components/Dashboard';
import '../Home/Home.css';

export default function Home() {
  const { userId } = useParams();

  const DataMockOrAPI = false;

  const { loading, usersData } = DataMockOrAPI
    ? DataMocke(userId)
    : FetchApi(userId);

  const { userMainData, userActivity, userAverageSessions, userPerformance } =
    usersData;

  if (!loading) {
    return (
      <div className="home-container">
        <Aside />
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <h1 className="loading">Loading...</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home-container">
        <Aside />
        <Dashboard
          userInfos={userMainData.userInfos}
          score={userMainData.score}
          sessions={userActivity.sessions}
          averageSessions={userAverageSessions.sessions}
          kind={userPerformance.kind}
          data={userPerformance.data}
          keyData={userMainData.keyData}
        />
      </div>
    );
  }
}
