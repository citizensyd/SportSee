// Importe les fonctions useState et useEffect de la bibliothèque React, ainsi que deux composants personnalisés
import React/* , { useState, useEffect } */ from "react";
import HorizontalBar from "../Components/HorizontalBar"
import VerticalBar from "../Components/VerticalBar";

// Définit le composant Home
const Home = () => {


  // Rendu du composant Home
  return (
    // Utilise la balise React.Fragment pour retourner plusieurs éléments sans utiliser de balise parente
    <React.Fragment>
      <HorizontalBar />
      <VerticalBar />
    </React.Fragment>
  );
};

// Exporte le composant Home pour pouvoir être utilisé dans d'autres fichiers
export default Home;

