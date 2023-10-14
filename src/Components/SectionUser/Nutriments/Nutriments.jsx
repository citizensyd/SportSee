import React from "react";

import { NutrimentStyle } from "./Nutriment.styles";

import caloriesIcon from "../../../Images/calories-icon.png";
import carbsIcon from "../../../Images/carbs-icon.png";
import fatIcon from "../../../Images/fat-icon.png";
import proteinIcon from "../../../Images/protein-icon.png";

/**
 * Nutriment component. Represents nutritional information with an associated icon.
 * 
 * @param {Object} props - Props passed into the component.
 * @param {Object} props.userNutriment - Information about the nutriment to display.
 * @param {string} props.userNutriment.url - Key for the icon to display.
 * @param {string} props.userNutriment.alt - Alt text for the icon.
 * @param {string} props.userNutriment.name - Name of the nutriment.
 * @param {string|number} props.userNutriment.value - Value of the nutriment.
 * @param {string} props.userNutriment.unit - Unit of the nutriment value.
 */
const Nutriment = (props) => {
  
  // Map icons to their respective keys
  const iconsMap = {
    caloriesIcon: caloriesIcon,
    glucidesIcon: carbsIcon,
    lipidesIcon: fatIcon,
    proteinesIcon: proteinIcon
  };

  // Retrieve the appropriate icon URL based on the provided key
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
