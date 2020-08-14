function evenementFinTour() {
  console.log("evenementFinTour");
  var evenementsList = [
    "rien",
    "debatphilo",
    "visiteur",
    "commerceFerengi",
    "sageVulcain",
    "tentativeCorruption",
    "petiteCriseFinanciereRessources"
  ];
  var evenementQuiArrive =
    evenementsList[Math.floor(Math.random() * evenementsList.length)];
  switch (evenementQuiArrive) {
    case "visiteur":
      evenement_visiteur();
      break;
    case "commerceFerengi":
      evenement_commerce_ferengi();
      break;
    case "sageVulcain":
      evenement_sage_vulcain();
      break;
    case "rien":
      evenement_rien();
      break;
    case "tentativeCorruption":
      evenement_tentative_corruption();
      break;
    case "debatphilo":
      evenement_debat_philo();
      break;
    case "petiteCriseFinanciereRessources":
      evenement_petite_crise_financiere_ressources();
      break;
  }

  ouvrir_modal_choix_evenements();

  evenements_a_annoncer.forEach((evenement) => {
    let row_ev = document.createElement("tr");
    row_ev.className = "ev_provisoire";
    let cell_event = document.createElement("td");
    cell_event.innerHTML = evenement.textOfEvent;
    let cell_effects = document.createElement("td");
    cell_effects.innerHTML = evenement.textEffetsEvenement;
    row_ev.appendChild(cell_event);
    row_ev.appendChild(cell_effects);
    document.getElementById("body_evenements").appendChild(row_ev);
  });
  evenements_a_annoncer = [];
}

function evenement_visiteur() {
  console.log("VISITE DUN VISITEUR");
  var visiteurNobody = new Personnage();
  var visiteurExisteDeja = false;
  var evenement_visiteur = new Evenement();
  visiteurExisteDeja = verificationExistencePersonnage(visiteurNobody);
  if (visiteurExisteDeja == true) {
    console.log("visiteur existe deja");
    visiteurNobody = new Personnage();
  }
  evenement_visiteur._textOfEvent =
    "La station a la visite de " + visiteurNobody.nomComplet() + ".";
  if (
    visiteurNobody.genre == "femme" &&
    visiteurNobody.nom == "Côté" &&
    visiteurNobody.prenom == "Catherine"
  ) {
    visiteurNobody.height = visiteurNobody.height + 15;
    evenement_visiteur.textOfEvent2 =
      visiteurNobody.nomComplet() + " va joindre " + station_joueur.nom + ".";
    evenement_visiteur._textEffetsEvenement =
      visiteurNobody.nomComplet() + " devient menbre de la station!";
    station_joueur.randomNobody.push(visiteurNobody);
    // Est-ce qu'il faudrait créer une autre variable pour s'assurer que si un autre visiteurNobody visite, il s'ajoute et n'écrase pas l'ancien?
  } else if (visiteurNobody.nomComplet() == "Bernard Ducharme") {
    evenement_visiteur.textOfEvent2 =
      visiteurNobody.nomComplet() + " va joindre " + station_joueur.nom + ".";
    textEffetsEvenement =
      visiteurNobody.nomComplet() + " devient menbre de la station!";
    station_joueur.connaissance = station_joueur.connaissance + 3;
    station_joueur.randomNobody.push(visiteurNobody);
    // Est-ce qu'il faudrait créer une autre variable pour s'assurer que si un autre visiteurNobody visite, il s'ajoute et n'écrase pas l'ancien?
  } else if (visiteurNobody.nomComplet() == "Gabriel Monette") {
    evenement_visiteur.textOfEvent2 =
      visiteurNobody.nomComplet() + " va joindre " + station_joueur.nom + ".";
    evenement_visiteur._textEffetsEvenement =
      visiteurNobody.nomComplet() + " devient menbre de la station!";
    station_joueur.connaissance = station_joueur.connaissance + 3;
    station_joueur.randomNobody.push(visiteurNobody);
    // Est-ce qu'il faudrait créer une autre variable pour s'assurer que si un autre visiteurNobody visite, il s'ajoute et n'écrase pas l'ancien?
  } else {
    evenement_visiteur._textEffetsEvenement =
      "Rien de spécial. " +
      visiteurNobody.nomComplet() +
      " retourne sur son chemin.";
  }

  evenements_a_annoncer.push(evenement_visiteur);
}

function evenement_commerce_ferengi() {
  let evenementCommerceFerengi = new Evenement();
  evenementCommerceFerengi._textOfEvent = "Commerce avec un marchand Ferengi";
  var listOfRulesOfAcquisiton = [
    "Rules of Acquisition #57 : Good customers are as rare as latinum. Treasure them. ",
    "Rules of Acquisition #98 :	Every man has his price. ",
    "Rules of Acquisition #125 : You can't make a deal if you're dead. ",
  ];
  evenementCommerceFerengi._textEffetsEvenement =
    listOfRulesOfAcquisiton[
      [Math.floor(Math.random() * listOfRulesOfAcquisiton.length)]
    ] + "C'est bien enrichissant en Gold Pressed Latinum.";
  station_joueur.enrichissementAuHasard(100);
  station_joueur.appauvrissementAuHasard(114);
  evenements_a_annoncer.push(evenementCommerceFerengi);
}

function evenement_sage_vulcain() {
  let evenementVisiteVulcain = new Evenement();
  evenementVisiteVulcain._textOfEvent =
    "Visite d'un sage savant vulcain. " + "C'est bien instructif.";
  evenementVisiteVulcain._textEffetsEvenement =
    "Plus de connaissance et de logique.";
  station_joueur.connaissance++;
  evenements_a_annoncer.push(evenementVisiteVulcain);
}
function evenement_rien() {
  let evenementRien = new Evenement();
  evenementRien._textOfEvent =
    station_joueur.randomNobody[0].nomComplet() +
    " se tourne les pouces. Il y a une romance entre " +
    station_joueur.randomNobody[0].nomComplet() +
    " et " +
    station_joueur.randomNobody[1].nomComplet() +
    "." +
    " C'est bien plaisant.";
  evenementRien._textEffetsEvenement = "Rien de spécial.";
  evenements_a_annoncer.push(evenementRien);
}

function evenement_tentative_corruption() {
  let evenementTentativeCorruption = new Evenement();
  let listeEvenementCorruption = [];
  let personnageCorrupteur;
  for (var i = 0; i < station_joueur.randomNobody.length; i++) {
    if (
      station_joueur.randomNobody[i].ideologie == "Anarco-capitalisme" ||
      station_joueur.randomNobody[i].richesse >= 200
    ) {
      listeEvenementCorruption.push(station_joueur.randomNobody[i]);
    }
  }
  console.log(listeEvenementCorruption);
  if (
    listeEvenementCorruption == undefined ||
    listeEvenementCorruption.length == 0
  ) {
    evenementTentativeCorruption._textOfEvent =
      "Il n'y a pas de tentative de corruption.";
  } else {
    personnageCorrupteur =
      listeEvenementCorruption[
        Math.floor(Math.random() * listeEvenementCorruption.length)
      ];
    station_joueur.personnageCorruption(personnageCorrupteur);
    evenementTentativeCorruption._textOfEvent =
      "Il y a une tentative de corruption.";
  }

  evenementTentativeCorruption._textEffetsEvenement =
    "Personne ne sait. C'est très mystérieux.";
  evenements_a_annoncer.push(evenementTentativeCorruption);
}

function evenement_debat_philo() {
  let evenementDebatPhilo = new Evenement();
  var debateurPhiloA =
    station_joueur.randomNobody[
      Math.floor(Math.random() * station_joueur.randomNobody.length)
    ];
  var debateurPhiloB = station_joueur.dirigeant;
  evenementDebatPhilo._textOfEvent =
    "Il y a un débat philosophique entre " +
    debateurPhiloA.nomComplet() +
    " et " +
    debateurPhiloB.titre +
    " " +
    debateurPhiloB.nomComplet() +
    "!";
  evenementDebatPhilo._textEffetsEvenement = debatPhilo(
    debateurPhiloA,
    debateurPhiloB
  );
  station_joueur.augmentationMoralAuHasard(1);
  station_joueur.chaos++;
  evenements_a_annoncer.push(evenementDebatPhilo);
}

function evenement_petite_crise_financiere_ressources() {
  let evenementPetiteCriseFinanciereRessources = new Evenement();
  var perteDuAPetiteCriseFinanciereRessources = [
    Math.floor(Math.random() * 214),
  ];
  station_joueur.appauvrissementAuHasard(
    perteDuAPetiteCriseFinanciereRessources
  );
  evenementPetiteCriseFinanciereRessources._textOfEvent =
    "Il y a une petite crise des ressources dans le secteur voisin.";
    evenementPetiteCriseFinanciereRessources._textEffetsEvenement =
    "Il y a une pette globale de " +
    perteDuAPetiteCriseFinanciereRessources +
    " crédits.";
  evenements_a_annoncer.push(evenementPetiteCriseFinanciereRessources);
}
