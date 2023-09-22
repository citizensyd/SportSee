import React from "react";

import { NutrimentsContainerStyles } from "./NutrimentsContainerStyles";
import Nutriment from "./Nutriments";

const NutrimentsContainer = (props) => {
    return (
        <NutrimentsContainerStyles>
            <Nutriment name="Calories" url="../Images/calories-icon.png" userNutriment={props.userNutriment} />
            <Nutriment name="Protéines" url="../Images/protein-icon.png" userNutriment={props.userNutriment} />
            <Nutriment name="Glucides" url="../Images/carbs-icon.png" userNutriment={props.userNutriment} />
            <Nutriment name="Lipides" url="../Images/fat-icon.png" userNutriment={props.userNutriment} />
        </NutrimentsContainerStyles>
    );
};

export default NutrimentsContainer;