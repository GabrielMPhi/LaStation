function finDuTour(){
    console.log("finDuTour"); 
    afficherChoixEtEvenements()
    afficherDescription();
    station_joueur.richesseTotale();
    station_joueur.payeEtRevenuPourTous();
    station_joueur.rechercheDePrestige();
    station_joueur.effetDuMoralFinDuTour();
    station_joueur.verifierRichesse()
    station_joueur.appauvrissementAuHasard(3);
    tour.augmenter();
    station_joueur.verifierFinPartie();
    evenementFinTour();    
  }
