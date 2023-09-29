import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserFetcher } from "../Service/api";
import HorizontalBar from "../Components/HorizontalBar";
import VerticalBar from "../Components/VerticalBar";
import SectionUser from "../Components/SectionUser";


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
    console.log('appel de useEffect');

    fetchUserData();
  }, []);

  const firstName = userData?.userData?.data?.userInfos?.firstName;
  const sessionsData = userData?.activityData?.data?.sessions;
  const userNutriment = userData?.userData?.data?.keyData;
  const userAverage = userData?.averageSessionsData?.data?.sessions;
  const userPerformance = userData?.performanceData?.data;
  const userObjective = userData?.userData?.data?.todayScore;
  console.log(userData);
  return (
    <>
      {firstName && (
        <>
          <HorizontalBar />
          <VerticalBar />
          <SectionUser
            firstName={firstName}
            sessionsData={sessionsData}
            userNutriment={userNutriment}
            userAverage={userAverage}
            userPerformance={userPerformance}
            userObjective={userObjective}
          />
        </>
      )}
    </>
  )
}

export default Home;

