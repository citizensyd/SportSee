import React from "react";

import { SectionUserStyle } from "./SectionUser.styles.js";
import DailyBusiness from './DailyBusiness';
import Title from "./Title.js";

const SectionUser = (props) => {
  console.log(props.sessionsData);

  return (
    <SectionUserStyle>
      <Title firstName={props.firstName}></Title>
      <DailyBusiness sessionsData={props.sessionsData}></DailyBusiness>
    </SectionUserStyle>
  );
};

export default SectionUser;
