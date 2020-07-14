import { Station, liste_type_gouv, verificationExistencePersonnage } from './model/Station.js';
import { Personnage } from './model/Personnage.js';
import { Mission } from './model/Mission.js';
import { Tour } from './model/Tour.js';



//VARIABLES GLOBALES
var listeNomPhilosophe = ["Aristote", "Platon", "Machiavel", "Pettit", "Rousseau", "Hume", "Hobbes", "Spinoza", "Diderot", "Woolstonecraft", "Davis", "Nussbaum", "Anderson"]

//variables personnages

//variables station


// variables gameplay
export let tour;
export var station_joueur;
var station_ordi;
export var evenements_a_annoncer = [];


class Firm {
  
  constructor(nom){
    this._nom = "East Sector Company";
  }


}

class RegimePolitique {


}

class Sector {


}















/*CRÉATION DE LA PAGE*/
window.onload = function(){
  tour = new Tour();
  generer_listeHTML_gouvernements(liste_type_gouv);
}

function generer_listeHTML_gouvernements(liste){
  var liste_html = document.getElementById("select_type_gouv");
  liste.forEach( opt => {
    var option_html = document.createElement("option");
    option_html.innerHTML = opt;
    option_html.value = opt;
    option_html.id = "gouv"+opt;
    liste_html.appendChild(option_html);
  })
}

/* GESTION DES ÉCRANS */
function changeScreen(ecranDepart, ecranArrivee){
	document.getElementById(ecranDepart).setAttribute('hidden', 'hidden');
	document.getElementById(ecranArrivee).removeAttribute('hidden');
}

function charger_description_station(ecran_de_depart){
  afficherDescription();
  changeScreen(ecran_de_depart, "ecran_description_station");
}

function chargerVersEvenement(ecran_de_depart){
  changeScreen(ecran_de_depart, "ecranChoixEtEvenementsStation");
}

function chargerVersInformation(ecran_de_depart){
  changeScreen(ecran_de_depart, "ecranInformationStation");
}

//modal
function ouvrir_modal_information(){
  var modal = document.getElementById("modal_info");
  modal.classList.add("is-active")
}
//fermer le modal
document.getElementById("modal_background").onclick = function(){
  fermer_modal();
}

document.getElementById("btn_modal_close").onclick = function() {
  fermer_modal();
}

//fonction probablement inutile
window.onclick = function(event) {
  if (event.target == document.getElementById("modal_info")) {
    fermer_modal();
  }
} 

function fermer_modal(){
  document.getElementById('textOfInfo').textContent = "";
  removeAllChildNodes(document.getElementById("liste_population")) ;
  var modal = document.getElementById("modal_info");
  modal.classList.remove("is-active");
}





/*Écran de création de la station*/

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


/*Écran de description de la station*/
function afficherDescription() {
    document.getElementById('tourProgressBar').valeur = tour.numero
    document.getElementById('ecranDescriptionStationTitrePrincipal').textContent = "Description de la station " + station_joueur.nom 
    document.getElementById('tourInfo').textContent = tour.numero;
    document.getElementById('nomStationPage').textContent = station_joueur.nom;
    document.getElementById('dirigeantStationTitre').textContent = station_joueur.dirigeant.titre;
    document.getElementById('consulStation').textContent = station_joueur.dirigeant.nomComplet();
    document.getElementById('consulStation2').textContent = station_joueur.dirigeant.nomComplet();
    document.getElementById('richesseStationInfo').textContent = station_joueur.richesseTotale();
    document.getElementById('typeGouvernementStationPage').textContent = station_joueur.regime;
    document.getElementById('moralStationInfo').textContent = station_joueur.moral;
    document.getElementById('ordreStationInfo').textContent = station_joueur.ordre;
    document.getElementById('chaosStationInfo').textContent = station_joueur.chaos;
    document.getElementById('liberteStationInfo').textContent = station_joueur.liberte;
    document.getElementById('securiteStationInfo').textContent = station_joueur.liberte;
    document.getElementById('energieStationInfo').textContent = station_joueur.energie;
    document.getElementById('connaissanceDataBaseInfo').textContent = station_joueur.connaissance;
    document.getElementById('ressourcesStationInfo').textContent = station_joueur.ressources;
    document.getElementById('populationStationInfo').textContent = station_joueur.population();
    document.getElementById('integriteStationInfo').textContent = station_joueur.integrite;
    document.getElementById('cybersecuriteStationInfo').textContent = station_joueur.cybersecurite;
    document.getElementById('capacitePopulationStationInfo').textContent = station_joueur.capacitePopulation;
  }
// BOUTONS INFO





document.getElementById("btnInfoRegime").addEventListener('click', function (e){ 
 
  var textInfo = ""
  switch (station_joueur.regime) {
   case "République": 
    textInfo = "Le républicanisme est un régime politique."
    break;
  case "Lottocratie":
    textInfo = "La lottocratie est un régime polique où le dirigeant est sélectionné au hasard."
    break;
  default: 
    textInfo = "Texte d'information à venir."
   }

  document.getElementById('textOfInfo').innerHTML = textInfo
  ouvrir_modal_information();
});


  document.getElementById("btnInfoDirigeant").addEventListener('click', function (e){
  
    var textInfo = station_joueur.dirigeant.titre + " " + station_joueur.dirigeant.nomComplet() + " est la personne qui dirige la station."+ 
    "<br>" + "Son idéologie : " + station_joueur.dirigeant.ideologie +
    "<br>" + "Sa taille : " + station_joueur.dirigeant.height + " cm." +
    "<br>" + "Son genre : " + station_joueur.dirigeant.genre +
    "<br>" + "Son origine : " + station_joueur.dirigeant.origine
    document.getElementById('textOfInfo').innerHTML = textInfo
    ouvrir_modal_information();
  });

  document.getElementById("btnInfoTour").addEventListener('click', function (e){
   
    var textInfo = "De la perspective d'une intelligence artificelle, le temps passe à la fois rapidement et lentement. Elle peut réagir très rapidement comme considérer les choses dans le temps long." + 
    " " + "À ce titre, l'unité de temps centrale est l'année, le cycle."
    document.getElementById('textOfInfo').textContent = textInfo
    ouvrir_modal_information();
  });


  // utilitaires
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  function removeChildNodesWithClassName(parent, className){
    let list_children_to_remove = parent.getElementsByClassName(className);
    while(list_children_to_remove.length){
      parent.removeChild(list_children_to_remove[0]);
    }
  }
  document.getElementById("btnInfoPopulationListNobody").addEventListener('click', function (e){
  
    var textInfo = ""
    console.log(textInfo)
    remove_all_children(document.getElementById('liste_population'));
    for (var i = 0; i < station_joueur.randomNobody.length; i++){
      let new_row = document.createElement("tr");
      new_row.id = "personnage"+i;
      let first_cell = document.createElement("td");
      first_cell.innerHTML = textInfo.concat("<b>", station_joueur.randomNobody[i].titre, " ", station_joueur.randomNobody[i].nomComplet(), "</b> est un random nobody de la station.", 
      "<br>", "Son titre : ", station_joueur.randomNobody[i].titre,
      "<br>", "Son idéologie : ", station_joueur.randomNobody[i].ideologie,
      "<br>", station_joueur.randomNobody[i].height + "cm.",
      "<br>", "Son genre : ", station_joueur.randomNobody[i].genre,
      "<br>", "Son charisme : ", station_joueur.randomNobody[i].charisme,
      "<br>", "Sa capacité de combat : ", station_joueur.randomNobody[i].capaciteCombat,
      "<br>", "Sa richesse : ", station_joueur.randomNobody[i].richesse, " crédits",
      "<br>", "Son origine : ", station_joueur.randomNobody[i].origine, "<br><br>");
      new_row.appendChild(first_cell); 
      let second_cell = document.createElement("td");
      second_cell.id = "second_cell_no"+i; 
      
      if(station_joueur.randomNobody[i].ideologie == "Chaotisme"){
        let aventurier = station_joueur.randomNobody[i];
        let button = document.createElement("input"); 
        button.id = "btnMission_no"+i;
        button.type = "button"; 
        button.class= "button is-small is-warning";
        button.value= "partir en mission";
        button.addEventListener("click", () => {
          partir_en_mission(aventurier, second_cell.id, button.id); 
        }); 
        second_cell.appendChild(button); 
      //  second_cell.innerHTML = "<input type='button' class='button is-small is-danger' value='partir en mission' onclick='partir_en_mission("+aventurier+")'><br>";
      }
      new_row.appendChild(second_cell);
      document.getElementById("liste_population").appendChild(new_row);
      ouvrir_modal_information();
    }
  });


  //utilitaires
  function remove_all_children(parent){
    while(parent.firstChild){
      parent.removeChild(parent.firstChild);
    }
  }

// ACTIONS ET ÉVÉNEMENTS
function partir_en_mission(nobody, cell_id, button_id){
  console.log(button_id + " "+ cell_id)
  document.getElementById(button_id).remove
  nobody.mission = new Mission("mission chaotique", tour.numero, nobody); 
  station_joueur.nobodiesEnMission.push(nobody); 
  let indexPartirEnMission = station_joueur.randomNobody.indexOf(nobody); 
  station_joueur.randomNobody.splice(indexPartirEnMission, 1);
  document.getElementById(cell_id).innerHTML =  nobody.nomComplet() +" est parti en mission sur un coup de tête. Il mourra probablement, ou reviendra avec des ressources et couvert de gloire";
   
}


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


