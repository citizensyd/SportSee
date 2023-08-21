import React from "react";

// On importe l'image de la plage pour affichage
import Mer from "../images/mer.png";

const HorizontalNav = () => {
  return (
    // On définit une section pour le hook
    <section className="hook">
      {/* On ajoute un texte */}
      <p className="font-color-principal">
        Chez vous, partout et ailleurs
      </p>
      {/* On ajoute l'image de la plage */}
      <img src={Mer} alt="Une plage avec des falaises" />
    </section>
  );
};

// On exporte le composant Hook
export default HorizontalNav;