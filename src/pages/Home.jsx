import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../Service/api";
import Loading from "../Images/Loading.svg"
import HorizontalBar from "../Components/Menu/HorizontalBar";
import VerticalBar from "../Components/Menu/VerticalBar";
import SectionUser from "../Components/SectionUser/SectionUser";
import { MessageError, MessageLoading } from "./Home.styles";

/**
 * Home component. Represents the main page of the application.
 * Fetches and displays user data, provides visual feedback for loading and error states.
 */
const Home = () => {
  /** 
   * Extracts the userId from the current route parameters.
   */
  const { userId } = useParams();

  /**
   * Custom hook to fetch user data.
   * @type {Object}
   * @property {Array} data - The user's data.
   * @property {boolean} loading - Loading state of the fetch operation.
   * @property {boolean} error - Any error encountered during fetch.
   */
  const {data, loading, error} = useFetchData(userId);
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
