import { useState, useEffect } from "react";
import FormatData from "./format";
import mocked from "./mocked.json";

const BASE_URL = "http://localhost:4000/user/";

/**
 * Custom hook for fetching user data.
 * 
 * @param {string|number} userId - User ID to fetch data for.
 * @param {string} apiMode - Mode for fetching data ("api" or "mock").
 * @returns {Object} An object containing the fetched data, loading status, and error status.
 */
const useFetchData = (userId, apiMode) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /**
   * Fetch data for a user from the API.
   * 
   * @param {string|number} userId - User ID to fetch data for.
   * @returns {Array} An array containing user data from different endpoints.
   */
  const fetchApiData = async (userId) => {
    const endpoints = ["", "activity", "average-sessions", "performance"];
    const promises = endpoints.map(endpoint => fetch(`${BASE_URL}${userId}/${endpoint}`).then(res => res.json()));
    const results = await Promise.all(promises);
    return results.map(result => result.data);
  };

  /**
   * Fetch mocked data for a user.
   * 
   * @param {string|number} userId - User ID to fetch data for.
   * @returns {Array} An array containing user data from mocked data.
   */
  const fetchMockedData = (userId) => {
    return mocked.filter(data => data.id === parseInt(userId) || data.userId === parseInt(userId));
  };

  // Fetch data when component mounts or when userId or apiMode changes.
  useEffect(() => {
    const fetchDataFromApi = async () => {
      let temporaryUserData = [];

      try {
        console.log(process.env.REACT_APP_USE_MOCK_DATA);
        if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
          console.log("mocked");
          temporaryUserData = fetchMockedData(userId);
        } else {
          console.log("Calls Api");
          temporaryUserData = await fetchApiData(userId);
        }


        try {
          const formatter = new FormatData(temporaryUserData);
          const newDataValue = formatter.getFormatNewData();
          setData(newDataValue);
        } catch (e) {
          console.error("Error during data formatting:", e);
          setError(true);
        }

      } catch (error) {
        console.error("Error during data fetching.");
        setError(true);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchDataFromApi();
  }, [userId, apiMode]);

  return { data, loading, error };
};

export default useFetchData;
