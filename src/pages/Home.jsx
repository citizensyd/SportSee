import React from "react";
import { useParams } from "react-router-dom";
import fetchData from "../Service/api";
import HorizontalBar from "../Components/HorizontalBar";
import VerticalBar from "../Components/VerticalBar";
import SectionUser from "../Components/SectionUser";

const Home = () => {
  console.log("appel de home");
  const { userId } = useParams();
  console.log(userId);

  const [data, loading, error] = fetchData(userId, "api");
  console.log(loading);
  console.log(error);
  console.log(data);

  return (
    <>
      <HorizontalBar />
      <VerticalBar />
      {loading ? (
        <p>Chargement en cours...</p>
      ) : error ? (
        <p>Une erreur s'est produite lors de la récupération des données.</p>
      ) : data ? (
        <SectionUser
          firstName={data[0].userInfos.firstName}
          sessionsData={data[1].sessions}
          userNutriment={data[0].keyData}
          userAverage={data[2].sessions}
          userPerformance={data[3].data}
          userObjective={data[0].score}
        />
      ) : null}
    </>
  );
};

export default Home;
