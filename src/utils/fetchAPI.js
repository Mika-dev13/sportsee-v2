import { useState, useEffect } from 'react';
import apiBackend from '../api/apiBackend';

/**
 * Get users data from api
 * @function
 * @param { number } userid user Id
 * @returns { promise } return users data
 */

export const FetchApi = (userId) => {
  const [usersData, setUsersData] = useState({});
  const [loading, setLoading] = useState(false);

  const services = [
    `${userId}`,
    `${userId}/activity`,
    `${userId}/average-sessions`,
    `${userId}/performance`,
  ];

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          services.map((service) => {
            return apiBackend.get(`/${service}`);
          })
        );
        const dataResponses = responses.map((response) => {
          return response.data.data;
        });

        const usersData = {
          userMainData: dataResponses[0],
          userActivity: dataResponses[1],
          userAverageSessions: dataResponses[2],
          userPerformance: dataResponses[3],
        };

        if (isMounted) {
          setUsersData(usersData);
          setLoading(true);
        }
      } catch (err) {}
    };
    fetchData();
    return () => (isMounted = false);
  }, []);

  return { usersData, loading };
};
