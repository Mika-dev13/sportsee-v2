import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../datas/Datas.js';
import { useState } from 'react';

/**
 * Get mocked data by their id
 * @function
 * @param { Number } userId user Id
 * @returns { Object }
 */

export const DataMocke = (userId) => {
  const [loading, setLoading] = useState(false);

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

  const usersData = {
    userMainData: userMainDataId,
    userActivity: userActivityId,
    userAverageSessions: userAverageSessionsId,
    userPerformance: userPerformanceId,
  };

  if (!loading) {
    setLoading(true);
  }

  return { usersData, loading };
};
