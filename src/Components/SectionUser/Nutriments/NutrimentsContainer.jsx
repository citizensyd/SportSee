import React from "react";

import { NutrimentsContainerStyles } from "./NutrimentsContainerStyles";
import Nutriment from "./Nutriments";

const NutrimentsContainer = (props) => {
    return (
        <NutrimentsContainerStyles>
            <Nutriment userNutriment={props.userNutriment.calories} />
            <Nutriment userNutriment={props.userNutriment.glucides} />
            <Nutriment userNutriment={props.userNutriment.proteines} />
            <Nutriment userNutriment={props.userNutriment.lipides} />
        </NutrimentsContainerStyles>
    );
};

export default NutrimentsContainer;