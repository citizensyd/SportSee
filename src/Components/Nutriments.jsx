import React from "react";

import { NutrimentStyle } from "./Nutriment.styles";

import caloriesIcon from "../Images/calories-icon.png";
import carbsIcon from "../Images/carbs-icon.png";
import fatIcon from "../Images/fat-icon.png";
import proteinIcon from "../Images/protein-icon.png";


const Nutriment = (props) => {
  
  const iconsMap = {
    caloriesIcon: caloriesIcon,
    glucidesIcon: carbsIcon,
    lipidesIcon: fatIcon,
    proteinesIcon: proteinIcon
  };

  const imageUrl = iconsMap[props.userNutriment.url];

  return (
    <NutrimentStyle>
      <img src={imageUrl} alt={props.userNutriment.alt} />
      <div>
        <p>{props.userNutriment.name}</p>
        <p>{props.userNutriment.value} {props.userNutriment.unit}</p>
      </div>
    </NutrimentStyle>
  );
};

export default Nutriment;