import { Station, liste_type_gouv, verificationExistencePersonnage } from './model/Station.js';
import { Personnage } from './model/Personnage.js';
import { partir_en_mission } from './model/Mission.js';
import { Tour } from './model/Tour.js';
import { removeAllChildNodes, removeChildNodesWithClassName } from './utilitaires/gestion_elements.js';
import { changeScreen } from './utilitaires/gestion_ecrans.js';
import { set_creation_screen } from './controllers/CreationController.js';
import { add_station_controller, afficherDescription } from './controllers/StationController.js';


//VARIABLES GLOBALES
var listeNomPhilosophe = ["Aristote", "Platon", "Machiavel", "Pettit", "Rousseau", "Hume", "Hobbes", "Spinoza", "Diderot", "Woolstonecraft", "Davis", "Nussbaum", "Anderson"]


// variables gameplay
export let tour;
export var station_joueur;
export var evenements_a_annoncer = [];
var station_ordi;


/*CRÉATION DE LA PAGE*/
window.onload = function(){
  tour = new Tour();

  set_creation_screen(liste_type_gouv);

  add_station_controller();
}

document.getElementById("btn_creation_station").addEventListener('click', function (e){
  var nom_station = document.getElementById("txt_nom_station").value
  var regime_choisi = document.getElementById("select_type_gouv").value
  if (nom_station == ""){
    nom_station = "DS7"
  }

  station_joueur = new Station(nom_station, regime_choisi);
  console.log("on a créé une station! = "+station_joueur);
  station_joueur.dirigeant.gagneUnTitre();
  var startingNumberOfNobody = (Math.floor(Math.random() * 7)) + 7;
  for (var i = 0; i < startingNumberOfNobody; i++){
      station_joueur.randomNobody.push(new Personnage())
  };
  station_joueur.richesseTotale();
  console.log(station_joueur)
  charger_description_station("ecran_creation_station");
});

//changement d'écrans
export function charger_description_station(ecran_de_depart){
  afficherDescription();
  changeScreen(ecran_de_depart, "ecran_description_station");
}

export function chargerVersEvenement(ecran_de_depart){
  changeScreen(ecran_de_depart, "ecranChoixEtEvenementsStation");
}



/*Écran de création de la station*/


  






// ACTIONS ET ÉVÉNEMENTS
function afficherChoixEtEvenements() {
  document.getElementById('textOfChoiceInfluence').textContent = textOfChoiceInfluence;
  document.getElementById('textEffectsOfChoiceInfluence').textContent = textEffectsOfChoiceInfluence;
  document.getElementById('textOfChoice').textContent = textOfChoice;
  document.getElementById('textEffectsOfChoice1').textContent = textEffectsOfChoice1;
}

document.querySelector('#btnActionChoix').addEventListener('click', function (e){
  var choix = document.querySelector('#actionChoix').selectedOptions[0].value
  var choixInfluence = document.querySelector('#actionChoixInfluence').selectedOptions[0].value
  console.log(choix)
  
  /// choix influence
  console.log(choixInfluence)
    switch(choixInfluence) {
      case "organiserDebatPhilo":
        var debateurPhiloA = station_joueur.randomNobody[Math.floor(Math.random() * station_joueur.randomNobody.length)]
        var debateurPhiloB = station_joueur.dirigeant
        textOfChoiceInfluence = "Il y a un débat philosophique entre " + debateurPhiloA.nomComplet() + " et " + debateurPhiloB.titre + " " + debateurPhiloB.nomComplet() + "!"
        textEffectsOfChoiceInfluence = debatPhilo(debateurPhiloA, debateurPhiloB)
        station_joueur.moral++;
        station_joueur.chaos++;
      break;      
      case "favoriserPeuple":
        textOfChoiceInfluence = "Vous venez de favoriser le peuple."
        textEffectsOfChoiceInfluence = "Le peuple s'en fout un peu! Mais la richesse et le moral augmente de 1 tandis que vous dépensez 1 d'énergie.";
        station_joueur.enrichissement(1);
        station_joueur.moral++;
        station_joueur.energie--;
      break;
      case "exileHabitant":
        textOfChoiceInfluence = "Expulsion d'un habitant pour de faux prétextes."
        textEffectsOfChoiceInfluence = station_joueur.dirigeant.nomComplet() + " exile un habitant et confisque sa propriété!"
        station_joueur.dirigeant.richesse++;
        station_joueur.moral--;
        station_joueur.energie++;
      break;
      case "festivalPhiloPolitique":
        textOfChoiceInfluence = "Sur l'ensemble des ordinateurs et des réseaux sociaux s'organise un immense festival de la philosophie politique."
        textEffectsOfChoiceInfluence = "Une grande fête en faveur de la pensée politique et éthique! Un très bon moyen de gagner le jeu."
        station_joueur.richesse++;
        station_joueur.moral++;
        station_joueur.energie++;
        station_joueur.influenceCulturelle++;
        station_joueur.connaissance++;
      break;
      case "fete":
        textOfChoiceInfluence = "Vous organisez une fête."  
        textEffectsOfChoiceInfluence = "C'est la fête et la danse!";
        station_joueur.appauvrissement(1);
        station_joueur.moral = parseInt(station_joueur.moral + (Math.floor(Math.random() * 4) - 1), 10)
        station_joueur.energie--
      break;
    case "commerce":
      textOfChoiceInfluence = "C'est jour de marché sur " + station_joueur.nom  
      textEffectsOfChoiceInfluence = "La station s'enrichit un peu."
    
      station_joueur.enrichissement(1);
      station_joueur.moral--
      break;
      }

/// Choix énergie  
  switch(choix) {
  case "calculs":
    station_joueur.energie--
    textOfChoice = "Les ordinateurs de " + station_joueur.nom + " s'occupent à faire des calculs importants et insipides." 
    textEffectsOfChoice1 = "La station développe de nouvelles connaissances."
    break;
  case "ameliorerIntegrite":
    station_joueur.integrite++
    station_joueur.energie = station_joueur.energie - 3
    station_joueur.ressources--
    textOfChoice = "Vos systèmes se mobilisent pour améliorer la structure de la station et la population, incluant " + station_joueur.randomNobody[0].nomComplet() + ", se déploient construire de nouvelles instalations.";
    textEffectsOfChoice1 = "L'intégrité de la station s'améliore."
    break;
  case "pause":
    textOfChoice = "Une pause bien méritée pour recharger les batteries et faire les mises-à-jour.";
    textEffectsOfChoice1 = "La station emmagazine de l'énergie."
    station_joueur.energie = station_joueur.energie + 4;
    break;
    } 


  console.log(e)
  afficherChoixEtEvenements()
  afficherDescription();
  evenementFinTour()
  verifierFinPartie();
  })


  function debatPhilo(participantA, participantB){
    if (participantA.ideologie == "Républicanisme" && participantB.ideologie != "Républicanisme") {
      var gagnantDebatPhilo = participantA.nomComplet() + " a gagné!"
      station_joueur.moral++;
    } else if (participantB.ideologie == "Républicanisme" && participantA.ideologie != "Républicanisme"){
      var gagnantDebatPhilo = participantB.nomComplet() + " a gagné!"
      station_joueur.moral++;
    } else if (participantB.ideologie == "Gabrielisme" && participantA.ideologie != "Gabrielisme" && participantA.ideologie != "Républicanisme" ){
      var gagnantDebatPhilo = participantB.nomComplet() + " a gagné!"
      station_joueur.moral++;
    } else {
      gagnantDebatPhilo = "Il n'y a pas de gagnant. Il n'y a que de la confusion, du chaos et de l'étrangeté. " + 
      listeNomPhilosophe[Math.floor(Math.random() * listeNomPhilosophe.length)] + " a été mobilisé dans la discussion." 
    }
    return gagnantDebatPhilo
  }

function verifierFinPartie(){
  station_joueur.richesseTotale()
  tour.augmenter();
  if (station_joueur.richesseTotale() <= 0 || station_joueur.moral <= 0 || station_joueur.energie <= 0 || station_joueur.integrite <=0 ) {
    alert("Vous avez perdu! " + station_joueur.dirigeant.titre + " " + station_joueur.dirigeant.nomComplet() + " a guidé la station pendant " + tour.numero + " cycles." );
    location.reload(); 
  }
  if (station_joueur.capacitePopulation <= station_joueur.population() ) {
    alert("Le moral descend, car une part de la population n'a pas accès à du logement.");
    station_joueur.moral--;
  }
  if (station_joueur.ressources <= station_joueur.population() ) {
    alert("Le moral descend, car la station n'a pas assez de ressource pour satisfaire la population.");
    station_joueur.ressources--;
    station_joueur.moral++;
  }
  if (station_joueur.moral <= 5 ) {
    alert("Le moral de la station est assez bas.");
  }
  if (station_joueur.regime == "Lottocratie" && (tour == 2 || tour == 5 || tour == 10)){
    alert("Il y a un nouveau tirage au sort pour le gouvernement de la station.")
    var nouveauDirigeantTirageAuSort = station_joueur.randomNobody[Math.floor(Math.random() * station_joueur.randomNobody.length)]
    station_joueur.changementDirigeantStation(nouveauDirigeantTirageAuSort, station_joueur.dirigeant);
    alert(station_joueur.dirigeant.nomComplet() + " est maintenant à la tête de la station.");
  }
  if (station_joueur.regime == "République" && (tour == 2 || tour == 5 || tour == 10)){
  var candidatGagnantElection = station_joueur.electionNormale()
  alert("Il y a une élection. " + candidatGagnantElection.nomComplet() + " a gagné." )
  station_joueur.changementDirigeantStation(candidatGagnantElection, station_joueur.dirigeant);
  }
}

// Événements

const btnExitEvent = document.querySelector('#btnExitEvent');
btnExitEvent.addEventListener('click', () => {  
  removeChildNodesWithClassName(document.getElementById('body_evenements'), 'ev_provisoire');
  document.getElementById("textofevent2").setAttribute('hidden', 'hidden')
  charger_description_station("ecranChoixEtEvenementsStation");
});


function evenementFinTour(){
  var evenementsList = ["visiteur", "rien", "debatphilo", "commerceFerengi", "sageVulcain"]
  var evenementQuiArrive = evenementsList[Math.floor(Math.random() * evenementsList.length)]
  var textEffetsEvenement = ""
  var textDeEvenement = ""
  var textDeEvenement2 = ""
  switch(evenementQuiArrive){
    case "visiteur":
      console.log("VISITE DUN VISITEUR");
      var visiteurNobody = new Personnage ();
      var visiteurExisteDeja = false
      visiteurExisteDeja = verificationExistencePersonnage(visiteurNobody);
      if (visiteurExisteDeja == true){
        console.log("visiteur existe deja")
        visiteurNobody = new Personnage ();
      }
      var textDeEvenement = "La station a la visite de " + visiteurNobody.nomComplet() + "."
      if (visiteurNobody.genre == "femme" && visiteurNobody.nom == "Côté" && visiteurNobody.prenom == "Catherine"){
        visiteurNobody.height = visiteurNobody.height + 15
        textDeEvenement2 = visiteurNobody.nomComplet() + " va joindre " + station_joueur.nom + "."
        textEffetsEvenement = visiteurNobody.nomComplet() + " devient menbre de la station!"
        station_joueur.randomNobody.push(visiteurNobody) 
        // Est-ce qu'il faudrait créer une autre variable pour s'assurer que si un autre visiteurNobody visite, il s'ajoute et n'écrase pas l'ancien?
        break;

      } else if (visiteurNobody.nomComplet() == "Bernard Ducharme"){
        textDeEvenement2 = visiteurNobody.nomComplet() + " va joindre " + station_joueur.nom + "."
        textEffetsEvenement = visiteurNobody.nomComplet() + " devient menbre de la station!"
        station_joueur.connaissance = station_joueur.connaissance + 3
        station_joueur.randomNobody.push(visiteurNobody) 
        // Est-ce qu'il faudrait créer une autre variable pour s'assurer que si un autre visiteurNobody visite, il s'ajoute et n'écrase pas l'ancien?
      } else if (visiteurNobody.nomComplet() == "Gabriel Monette"){
        textDeEvenement2 = visiteurNobody.nomComplet() + " va joindre " + station_joueur.nom + "."
        textEffetsEvenement = visiteurNobody.nomComplet() + " devient menbre de la station!"
        station_joueur.connaissance = station_joueur.connaissance + 3
        station_joueur.randomNobody.push(visiteurNobody) 
        // Est-ce qu'il faudrait créer une autre variable pour s'assurer que si un autre visiteurNobody visite, il s'ajoute et n'écrase pas l'ancien?
      } else {
        textEffetsEvenement = "Rien de spécial. " + visiteurNobody.nomComplet() + " retourne sur son chemin."
      }
      
    break;
    case "commerceFerengi":
      textDeEvenement = "Commerce avec un marchand Ferengi"
      textDeEvenement2 = "C'est bien enrichissant."
      textEffetsEvenement = "Plus de Gold Pressed Latinum."
      station_joueur.enrichissement(1);
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
    case "debatphilo":
      var debateurPhiloA = station_joueur.randomNobody[Math.floor(Math.random() * station_joueur.randomNobody.length)]
      var debateurPhiloB = station_joueur.dirigeant
      textDeEvenement = "Il y a un débat philosophique entre " + debateurPhiloA.nomComplet() + " et " + debateurPhiloB.titre + " " + debateurPhiloB.nomComplet() + "!"
      textEffetsEvenement = debatPhilo(debateurPhiloA,debateurPhiloB)
      station_joueur.moral++;
      station_joueur.chaos++;
      break;
  }

  chargerVersEvenement("ecran_description_station");
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
  
  document.getElementById('textEffetsEvenement').textContent = textEffetsEvenement
  document.getElementById('textofevent').textContent = textDeEvenement
  document.getElementById('textofevent2').textContent = textDeEvenement2
}


