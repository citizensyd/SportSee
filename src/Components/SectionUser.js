import React from "react";

import { SectionUserStyle } from "./SectionUser.styles.js";
import { GraphStyle } from "./SectionUser.styles.js";
import DailyBusiness from './DailyBusiness';
import Title from "./Title.js";
import NutrimentsContainer from "./NutrimentsContainer.js";
import AvRaScoContainer from "./AvRaScoContainer.js";

const SectionUser = (props) => {
  console.log(props.sessionsData);

  return (
    <SectionUserStyle>
      <Title firstName={props.firstName}></Title>
      <GraphStyle>
        <div>
          <DailyBusiness sessionsData={props.sessionsData}></DailyBusiness>
          <AvRaScoContainer />
        </div>
        <NutrimentsContainer userNutriment={props.userNutriment} />
      </GraphStyle>
    </SectionUserStyle>
  );
};

export default SectionUser;
