import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../Service/api";
import Loading from "../Images/Loading.svg"
import HorizontalBar from "../Components/HorizontalBar";
import VerticalBar from "../Components/VerticalBar";
import SectionUser from "../Components/SectionUser";
import { MessageError, MessageLoading } from "./Home.styles";

const Home = () => {
  const { userId } = useParams();

  const {data, loading, error} = useFetchData(userId, "api");

  return (
    <>
      <HorizontalBar />
      <VerticalBar />
      {loading ? (
        <MessageLoading><img src={Loading} alt="Animation de chargement" /></MessageLoading>
      ) : error ? (
        <MessageError>Oups !<br/>Petit souci en récupérant vos données.<br/>Merci de réessayer plus tard.<br/>🙏</MessageError>
      ) : data ? (
        <SectionUser
          firstName={data.userInfos.firstName}
          sessionsData={data.sessionsDateKgCal}
          userNutriment={data.nutriments}
          userAverage={data.sessionsAverage}
          userPerformance={data.performance}
          userObjective={data.todayScore}
        />
      ) : null}
    </>
  );
};

export default Home;
