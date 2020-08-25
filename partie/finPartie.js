function finDuTour(){
    station_joueur.mise_a_jour_historique_richesse_station()
    afficherChoixEtEvenements();
    station_joueur.payeEtRevenuPourTous();
    station_joueur.rechercheDePrestige();
    station_joueur.effetDuMoralFinDuTour();
    station_joueur.verifierRichesse()
    station_joueur.appauvrissementAuHasard(5);
    station_joueur.verifierFinPartie();
    evenementFinTour();    
    tour.augmenter();
    afficherDescription();
  }
