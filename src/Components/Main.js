import React from "react";

import { MainStyle } from "./Main.styles.js";
import VerticalBar from "./VerticalBar.js";
import SectionUser from "./SectionUser.js";

const Main = (props) => {
    console.log(props.firstName);
  console.log(props.userNutriment);
    return (
        <MainStyle>
            <VerticalBar />
            <SectionUser firstName = {props.firstName} sessionsData={props.sessionsData} userNutriment={props.userNutriment}>
            </SectionUser>
        </MainStyle>
    );
};

export default Main;