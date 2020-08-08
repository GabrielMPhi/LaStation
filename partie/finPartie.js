function finDuTour(){
    console.log("finDuTour"); 
    afficherChoixEtEvenements()
    afficherDescription();
    evenementFinTour();
    station_joueur.richesseTotale();
    station_joueur.payeEtRevenuPourTous();
    station_joueur.rechercheDePrestige();
    station_joueur.effetDuMoralFinDuTour();
    station_joueur.verifierRichesse()
    station_joueur.appauvrissementAuHasard(3);
    tour.augmenter();
    station_joueur.verifierFinPartie();
  }


  
function evenementFinTour(){
    console.log("evenementFinTour"); 
    var evenementsList = ["visiteur"]

    //var evenementsList = ["visiteur", "rien", "debatphilo", "commerceFerengi", "sageVulcain", "petiteCriseFinanciereRessources", "tentativeCorruption"]
    var evenementQuiArrive = evenementsList[Math.floor(Math.random() * evenementsList.length)]
    var textEffetsEvenement = ""
    var textDeEvenement = ""
    var textDeEvenement2 = ""
    switch(evenementQuiArrive){
      case "visiteur":
        evenement_visiteur();
        break;
      case "commerceFerengi":
        textDeEvenement = "Commerce avec un marchand Ferengi"
        var listOfRulesOfAcquisiton = ["Rules of Acquisition #57 : Good customers are as rare as latinum. Treasure them. " , 
            "Rules of Acquisition #98 :	Every man has his price. ",
            "Rules of Acquisition #125 : You can't make a deal if you're dead. "]
        textDeEvenement2 = "C'est bien enrichissant en Gold Pressed Latinum."
        textEffetsEvenement = listOfRulesOfAcquisiton[[Math.floor(Math.random() * listOfRulesOfAcquisiton.length)]]
        station_joueur.enrichissementAuHasard(100);
        station_joueur.appauvrissementAuHasard(114);
        break;
      case "sageVulcain":
        textDeEvenement = "Visite d'un sage savant vulcain."
        textDeEvenement2 = "C'est bien instructif."
        textEffetsEvenement = "Plus de connaissance et de logique."
        station_joueur.connaissance++;
        break;
      case "rien":
        console.log("RIEN");
        textDeEvenement = station_joueur.randomNobody[0].nomComplet() + " se tourne les pouces. Il y a une romance entre " + station_joueur.randomNobody[0].nomComplet() + " et " + station_joueur.randomNobody[1].nomComplet() + "."
        textDeEvenement2 = "C'est bien plaisant."
        textEffetsEvenement = "Rien de spécial."
        break;
      case "tentativeCorruption":
        console.log("TENTATIVE CORRUPTION DE QQN")
        let listeEvenementCorruption = []
        let personnageCorrupteur
        for (var i = 0; i < station_joueur.randomNobody.length; i++){
          if (station_joueur.randomNobody[i].ideologie == "Anarco-capitalisme" || station_joueur.randomNobody[i].richesse >= 200){
            listeEvenementCorruption.push(station_joueur.randomNobody[i])
          }
        }
        console.log(listeEvenementCorruption)
        if (listeEvenementCorruption == undefined || listeEvenementCorruption.length == 0){
        textDeEvenement = "Il n'y a pas de tentative de corruption."
        } else {
        personnageCorrupteur = listeEvenementCorruption[Math.floor(Math.random() * listeEvenementCorruption.length)]
        station_joueur.personnageCorruption(personnageCorrupteur)
        textDeEvenement = "Il y a une tentative de corruption."
      }
        textEffetsEvenement = "Personne ne sait."
        break;
      case "debatphilo":
        var debateurPhiloA = station_joueur.randomNobody[Math.floor(Math.random() * station_joueur.randomNobody.length)]
        var debateurPhiloB = station_joueur.dirigeant
        textDeEvenement = "Il y a un débat philosophique entre " + debateurPhiloA.nomComplet() + " et " + debateurPhiloB.titre + " " + debateurPhiloB.nomComplet() + "!"
        textEffetsEvenement = debatPhilo(debateurPhiloA,debateurPhiloB)
        station_joueur.augmentationMoralAuHasard(1);
        station_joueur.chaos++;
        break;
        case "petiteCriseFinanciereRessources":
          var perteDuAPetiteCriseFinanciereRessources = [Math.floor(Math.random() * 214)]
          station_joueur.appauvrissementAuHasard(perteDuAPetiteCriseFinanciereRessources);
          textDeEvenement2 = "Il y a une petite crise des ressources dans le secteur voisin."
          textEffetsEvenement = "Il y a une pette globale de " + perteDuAPetiteCriseFinanciereRessources + " crédits."
        break;
    }
  
   // chargerVersEvenement("ecran_description_station");
   ouvrir_modal_choix_evenements();

    if (textDeEvenement2 != ""){
      document.getElementById("textofevent2").removeAttribute('hidden');
    }

    evenements_a_annoncer.forEach( evenement => {
      let row_ev = document.createElement('tr');
      row_ev.className = "ev_provisoire";
      let cell_event = document.createElement('td'); 
      cell_event.innerHTML = evenement.textOfEvent;
      let cell_effects = document.createElement('td');
      cell_effects.innerHTML = evenement.textEffetsEvenement;
      row_ev.appendChild(cell_event);
      row_ev.appendChild(cell_effects);
      document.getElementById('body_evenements').appendChild(row_ev);
  });
    evenements_a_annoncer = [];

  }

  function evenement_visiteur(){    
      console.log("VISITE DUN VISITEUR");
      var visiteurNobody = new Personnage ();
      var visiteurExisteDeja = false
      var evenement_visiteur = new Evenement();
      visiteurExisteDeja = verificationExistencePersonnage(visiteurNobody);
      if (visiteurExisteDeja == true){
        console.log("visiteur existe deja")
        visiteurNobody = new Personnage ();
      }
      evenement_visiteur._textOfEvent = "La station a la visite de " + visiteurNobody.nomComplet() + "."
      if (visiteurNobody.genre == "femme" && visiteurNobody.nom == "Côté" && visiteurNobody.prenom == "Catherine"){
        visiteurNobody.height = visiteurNobody.height + 15
        evenement_visiteur.textOfEvent2 = visiteurNobody.nomComplet() + " va joindre " + station_joueur.nom + "."
        evenement_visiteur._textEffetsEvenement = visiteurNobody.nomComplet() + " devient menbre de la station!"
        station_joueur.randomNobody.push(visiteurNobody) 
        // Est-ce qu'il faudrait créer une autre variable pour s'assurer que si un autre visiteurNobody visite, il s'ajoute et n'écrase pas l'ancien?

      } else if (visiteurNobody.nomComplet() == "Bernard Ducharme"){
        evenement_visiteur.textOfEvent2 = visiteurNobody.nomComplet() + " va joindre " + station_joueur.nom + "."
        textEffetsEvenement = visiteurNobody.nomComplet() + " devient menbre de la station!"
        station_joueur.connaissance = station_joueur.connaissance + 3
        station_joueur.randomNobody.push(visiteurNobody) 
        // Est-ce qu'il faudrait créer une autre variable pour s'assurer que si un autre visiteurNobody visite, il s'ajoute et n'écrase pas l'ancien?
      } else if (visiteurNobody.nomComplet() == "Gabriel Monette"){
        evenement_visiteur.textOfEvent2 = visiteurNobody.nomComplet() + " va joindre " + station_joueur.nom + "."
        evenement_visiteur._textEffetsEvenement = visiteurNobody.nomComplet() + " devient menbre de la station!"
        station_joueur.connaissance = station_joueur.connaissance + 3
        station_joueur.randomNobody.push(visiteurNobody) 
        // Est-ce qu'il faudrait créer une autre variable pour s'assurer que si un autre visiteurNobody visite, il s'ajoute et n'écrase pas l'ancien?
      } else {
        evenement_visiteur._textEffetsEvenement = "Rien de spécial. " + visiteurNobody.nomComplet() + " retourne sur son chemin."
      }

      evenements_a_annoncer.push(evenement_visiteur); 
  }