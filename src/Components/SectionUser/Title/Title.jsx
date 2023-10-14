import React from "react";
import { TitleStyle } from "./Title.styles.js";
import applaudissement from "../../../Images/applaudissements.png"

const Title = (props) => {
  return (
    <TitleStyle>
      <h1>Bonjour <span>{props.firstName}</span></h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier </p>
      <img src={applaudissement} alt="Emoji d'applaudissement" />
    </TitleStyle>
  );
};

export default Title;
