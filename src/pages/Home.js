// Importe les fonctions useState et useEffect de la bibliothèque React, ainsi que deux composants personnalisés
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HorizontalBar from "../Components/HorizontalBar"
import Main from "../Components/Main.js"
import { UserFetcher } from "../Service/api.js";


// Définit le composant Home
const Home = () => {
  console.log("appel de home");
  const { userId } = useParams();
  const [userData, setUserData] = useState(null); // Initialiser userData à null

  useEffect(() => {
    // Fonction asynchrone pour charger les données de l'utilisateur
    const fetchUserData = async () => {
      try {
        const data = await UserFetcher(userId);
        setUserData(data); // Mettre à jour userData avec les données chargées
      } catch (error) {
        console.error("Erreur lors du chargement des données utilisateur", error);
      }
    };
    console.log('appel de useEffect')
    
    fetchUserData(); // Appel de la fonction asynchrone
    
    // Vous pouvez également ajouter des dépendances pour ce useEffect si nécessaire
  }, []);
  const firstName = userData?.userData?.data?.userInfos?.firstName;
  const sessionsData = userData?.activityData?.data?.sessions;
  console.log(sessionsData);
  console.log(firstName);
  console.log(userData);
  // Rendu du composant Home
  return (
    // Utilise la balise React.Fragment pour retourner plusieurs éléments sans utiliser de balise parente
    <>
      {firstName && (
        <>
          <HorizontalBar />
          <Main firstName={firstName} sessionsData={sessionsData}></Main>
        </>
      )}
    </>
  );
};

// Exporte le composant Home pour pouvoir être utilisé dans d'autres fichiers
export default Home;

