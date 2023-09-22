import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { UserFetcher } from "../Service/api.js";
import HorizontalBar from "../Components/HorizontalBar"
import Main from "../Components/Main.js"

const Home = () => {
  console.log("appel de home");
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await UserFetcher(userId);
        setUserData(data);
      } catch (error) {
        console.error("Erreur lors du chargement des données utilisateur", error);
      }
    };
    console.log('appel de useEffect')
    
    fetchUserData();
    
  }, []);
  const firstName = userData?.userData?.data?.userInfos?.firstName;
  const sessionsData = userData?.activityData?.data?.sessions;
  const userNutriment = userData?.userData?.data?.keyData;
  console.log(userData);
  return (
    <>
      {firstName && (
        <>
          <HorizontalBar />
          <Main firstName={firstName} sessionsData={sessionsData} userNutriment={userNutriment}></Main>
        </>
      )}
    </>
  );
};

export default Home;

