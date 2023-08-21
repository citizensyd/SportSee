// Importe la bibliothèque React
import React from "react";

// Définit une fonction fléchée (ES6) nommée Layout qui prend un paramètre "props"
// "props" est un objet JavaScript qui contient les propriétés et les valeurs passées à ce composant React
// Dans ce cas, le composant Layout utilise une seule propriété, "children", qui contiendra le contenu affiché à l'intérieur du composant
const App = (props) => {
  // Retourne un élément "section" HTML qui a une classe "body-page"
  // "props.children" représente le contenu qui est passé à ce composant, et sera affiché à l'intérieur de l'élément "section"
  return (
    <section className="body-page">
      {props.children}
    </section>
  );
};

// Exporte la fonction Layout pour qu'elle puisse être utilisée dans d'autres fichiers
export default App;