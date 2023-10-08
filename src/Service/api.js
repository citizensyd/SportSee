import { useState, useEffect } from "react";
import FormatData from "./format";
import mocked from "./mocked.json";

const BASE_URL = "http://localhost:4000/user/";

const useFetchData = (userId, apiMode) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchApiData = async (userId) => {
    const endpoints = ["", "activity", "average-sessions", "performance"];
    const promises = endpoints.map(endpoint => fetch(`${BASE_URL}${userId}/${endpoint}`).then(res => res.json()));
    const results = await Promise.all(promises);
    return results.map(result => result.data);
  };

  const fetchMockedData = (userId) => {
    return mocked.filter(data => data.id === parseInt(userId) || data.userId === parseInt(userId));
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      let temporaryUserData = [];

      try {
        if (apiMode === "api") {
          temporaryUserData = await fetchApiData(userId);
        } else {
          temporaryUserData = fetchMockedData(userId);
        }

        try {
          const formatter = new FormatData(temporaryUserData);
          const newDataValue = formatter.getFormatNewData();
          setData(newDataValue);
        } catch (e) {
          console.error("Erreur lors du formatage des données:", e);
          setError(true);
        }

      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données.");
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [userId, apiMode]);

  return { data, loading, error };
};

export default useFetchData;
