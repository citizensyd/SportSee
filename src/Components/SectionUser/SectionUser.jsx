import React from "react";

import { SectionUserStyle } from "./SectionUser.styles";
import { GraphStyle, DailyAvRaSco } from "./SectionUser.styles";
import ChartDailyBusinessContainer from './ChartDailyBusiness/ChartDailyBusinessContainer';
import Title from "./Title/Title";
import NutrimentsContainer from "./Nutriments/NutrimentsContainer";
import AvRaScoContainer from "./AvRaSco/AvRaScoContainer";

const SectionUser = (props) => {

  return (
    <SectionUserStyle>
      <Title firstName={props.firstName}></Title>
      <GraphStyle>
        <DailyAvRaSco>
          <ChartDailyBusinessContainer sessionsData={props.sessionsData} />                
          <AvRaScoContainer
            userAverage={props.userAverage}
            userPerformance={props.userPerformance}
            userObjective={props.userObjective}
          />
        </DailyAvRaSco>
        <NutrimentsContainer userNutriment={props.userNutriment} />
      </GraphStyle>
    </SectionUserStyle>
  );
};

export default SectionUser;
