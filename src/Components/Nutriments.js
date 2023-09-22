import React from "react";

import { NutrimentStyle } from "./NutrimentStyles";

import caloriesIcon from "../Images/calories-icon.png";
import carbsIcon from "../Images/carbs-icon.png";
import fatIcon from "../Images/fat-icon.png";
import proteinIcon from "../Images/protein-icon.png";

const Nutriment = (props) => {
  console.log(props.userNutriment);
  const item = {};

  function getItem(name) {

    const gramme = "g";
    const kcalorie = "kCal";

    switch (name) {
      case "Calories":
        item.iconAdress = caloriesIcon;
        item.alt = "Icone des Calories";
        item.value = props.userNutriment.calorieCount;
        item.unit = kcalorie;
        break;
      case "Protéines":
        item.iconAdress = proteinIcon;
        item.alt = "Icone des Protéines";
        item.value = props.userNutriment.proteinCount;
        item.unit = gramme;
        break;
      case "Glucides":
        item.iconAdress = carbsIcon;
        item.alt = "Icone des Glucides";
        item.value = props.userNutriment.carbohydrateCount;
        item.unit = gramme;
        break;
      case "Lipides":
        item.iconAdress = fatIcon;
        item.alt = "Icone des Lipides";
        item.value = props.userNutriment.lipidCount;
        item.unit = gramme;
        break;
      default:
        item.iconAdress = "";
        item.alt = "";
        item.value = "";
        item.unit = "";
    }

    return item;
  }

  getItem(props.name);

  console.log(item.value);
  return (
    <NutrimentStyle>
      <img src={item.iconAdress} alt={item.alt} />
      <div>
        <p>{props.name}</p>
        <p>{item.value} {item.unit}</p>
      </div>
    </NutrimentStyle>
  );
};

export default Nutriment;