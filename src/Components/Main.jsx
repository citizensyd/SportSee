import React from "react";

import { MainStyle } from "./Main.styles";
import VerticalBar from "./VerticalBar";
import SectionUser from "./SectionUser";

const Main = (props) => {
    return (
        <MainStyle>
            <VerticalBar />
            <SectionUser
                firstName={props.firstName}
                sessionsData={props.sessionsData}
                userNutriment={props.userNutriment}
                userAverage={props.userAverage}
                userPerformance={props.userPerformance}
                userObjective={props.userObjective}
            ></SectionUser>
        </MainStyle>
    );
};

export default Main;