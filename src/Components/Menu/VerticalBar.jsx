import React from "react";

import { VerBar } from "./VerticalBar.styles";
import { VerNav } from "./VerticalBar.styles";
import cyclisme from "../../Images/cyclisme.png"
import musculation from "../../Images/musculation.png"
import natation from "../../Images/natation.png"
import yoga from "../../Images/yoga.png"


const VerticalBar = () => {
  return (
    <VerBar>
      <VerNav>
        <img src={yoga} alt="icon de yoga" />
        <img src={natation} alt="icon de natation" />
        <img src={cyclisme} alt="icon de cyclisme" />
        <img src={musculation} alt="icon de musculation" />
      </VerNav>
      <p>Copyright, SportSee 2020</p>
    </VerBar>
  );
};

export default VerticalBar;