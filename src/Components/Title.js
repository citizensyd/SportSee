import React from "react";
import { TitleStyle } from "./Title.styles.js";
import applaudissement from "../Images/applaudissements.png"

const Title = (props) => {
/*   // Vérifiez si userData est null avant d'accéder à ses propriétés
  const firstName = props.data?.userData?.data?.userInfos?.firstName;

  // Affiche un composant de chargement si les données ne sont pas disponibles
  if (!firstName) {
    return (
      <TitleStyle>
        <p>Chargement en cours...</p>
      </TitleStyle>
    );
  } */
  console.log(props);
  return (
    <TitleStyle>
      <h1>Bonjour <span>{props.firstName}</span></h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier </p>
      <img src={applaudissement} alt="Emoji d'applaudissement" />
    </TitleStyle>
  );
};

export default Title;
