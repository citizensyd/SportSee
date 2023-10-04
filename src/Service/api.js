import { useState, useEffect } from "react";
import FormatData from "./format";
import mocked from "./mocked.json";

const fetchData = (userId, apiMode) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("useEffect");

    const fetchDataFromApi = async () => {
      let temporaryUserData = [];

      try {
        if (apiMode === "api") {
          const userDataResponse = await fetch(`http://localhost:4000/user/${userId}`);
          const activityDataResponse = await fetch(`http://localhost:4000/user/${userId}/activity`);
          const averageSessionsResponse = await fetch(`http://localhost:4000/user/${userId}/average-sessions`);
          const performanceDataResponse = await fetch(`http://localhost:4000/user/${userId}/performance`);
          const allPromises = [userDataResponse, activityDataResponse, averageSessionsResponse, performanceDataResponse];

          const userDataResponses = await Promise.all(allPromises);

          for (let userDataResponse of userDataResponses) {
            if (!userDataResponse.ok) {
              setError(true);
              break;
            } else {
              const userDataJson = await userDataResponse.json();
              temporaryUserData.push(userDataJson.data);
            }
          }

          /* const formatData = new FormatData(temporaryUserData); */
          /* const formattedUserData = formatData.concatenateData(); */

          setData(temporaryUserData);
        } else {
          mocked.forEach((data) => {
            if (data.id === parseInt(userId) || data.userId === parseInt(userId)) {
              temporaryUserData.push(data);
            }
          });

          if (temporaryUserData[0] && temporaryUserData[0].id) {
            /* const formatData = new FormatData(temporaryUserData); */
            /* const formattedUserData = formatData.concatenateData(); */
            setData(temporaryUserData);
          } else {
            setError(true);
          }
        }
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données.");
        setError(true);
      }

      setLoading(false);
    };

    fetchDataFromApi();
  }, [userId, apiMode]);

  return [data, loading, error];
};

export default fetchData;
