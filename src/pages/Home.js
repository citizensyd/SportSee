// Importe les fonctions useState et useEffect de la bibliothèque React, ainsi que deux composants personnalisés
import React, { useState, useEffect } from "react";
import BlocPage from "../Components/BlocPage";

// Définit le composant Home
const Home = () => {


  // Rendu du composant Home
  return (
    // Utilise la balise React.Fragment pour retourner plusieurs éléments sans utiliser de balise parente
    <React.Fragment>
        <BlocPage></BlocPage>
    </React.Fragment>
  );
};

// Exporte le composant Home pour pouvoir être utilisé dans d'autres fichiers
export default Home;

