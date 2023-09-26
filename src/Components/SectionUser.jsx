import React from "react";

import { SectionUserStyle } from "./SectionUser.styles";
import { GraphStyle } from "./SectionUser.styles";
import DailyBusiness from './DailyBusiness';
import Title from "./Title";
import NutrimentsContainer from "./NutrimentsContainer";
import AvRaScoContainer from "./AvRaScoContainer";

const SectionUser = (props) => {

  return (
    <SectionUserStyle>
      <Title firstName={props.firstName}></Title>
      <GraphStyle>
        <div>
          <DailyBusiness sessionsData={props.sessionsData} />                
          <AvRaScoContainer
            userAverage={props.userAverage}
            userPerformance={props.userPerformance}
            userObjective={props.userObjective}
          />
        </div>
        <NutrimentsContainer userNutriment={props.userNutriment} />
      </GraphStyle>
    </SectionUserStyle>
  );
};

export default SectionUser;
