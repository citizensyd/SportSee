import React from "react";

import { HorBar } from "./HorizontalBar.styles";
import { NavHor } from "./HorizontalBar.styles";
import { NavItem } from "./HorizontalBar.styles";

import Logo from "../../Images/logo.png";

const HorizontalBar = () => {
  return (
    <HorBar>
      <img src={Logo} alt="Logo de Sport See" />
      <NavHor>
        <NavItem>Accueil</NavItem>
        <NavItem>Profil</NavItem>
        <NavItem>Réglage</NavItem>
        <NavItem>Communauté</NavItem>
      </NavHor>
    </HorBar>
  );
};

export default HorizontalBar;