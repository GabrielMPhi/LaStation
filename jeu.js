//VARIABLES GLOBALES
//variables personnages
var prenomsPersonnagesHomme = ["Bernard", "Martin", "Gabriel", "Mathieu", "Arthur", "Thomas", "Christian", "Simon", "Geralt", "Alexandre", "Étienne", "François"]
var prenomsPersonnagesFemme = ["Catherine", "Florence", "Sophia", "Morgane", "Rieke", "Julia", "Linda", "Christina", "Anne-Sophie", "Anne-Marie", "Marie-Pier", "Marie", "Anne", "Anna", "Rapunzel", "Éloise"]
var prenomsPersonnagesTotal = [].concat(prenomsPersonnagesHomme, prenomsPersonnagesFemme);
var momsFamillePersonnages = ["Monette", "Ducharme", "Carel", "Dax", "Rideout", "Delorme", "Picard", "Sisko", "Janeway", "Pratte", "Séguin", "Gagné", "Turpin", "Bouras", "De Rivia", "Côté", "Gingras"]
var listIdeology = ["Républicanisme", "Anarchisme", "Autoritarisme", "Ludisme", "Gabrielisme", "Scientisme", "Féminisme", "Turpinisme", "Chaotisme", "Monarchisme", "Bernardisme", "Socialisme", "Libéralisme", "Capitalisme", "Conspirationisme", "Rawlsisme", "Anarco-capitalisme", "Lavalisme", "Municipalisme", "Vedge", "Apathie"]
var listeGenre = ["Homme", "Femme", "Fluide", "Homme", "Femme", "Homme", "Femme", "Non-binaire"]
var listeTitresDirigeant = ["Capitaine", "Commandant", "Consul", "Guide", "Président", "Général", "Professeur", "Dude", "Tsé, lui-là", "Philosophe", "Politicien", "Délégué", "Vendu", "Maître", "WTF?"]
var listeNomPhilosophe = ["Aristote", "Platon", "Machiavel", "Pettit", "Rousseau", "Hume", "Hobbes", "Spinoza", "Diderot", "Woolstonecraft", "Davis", "Nussbaum", "Anderson"]

//variables station
var liste_type_gouv = ["Lottocratie", "République", "Corporation", "Autocratie", "Monarchie", "Théocratie", "Ploutocratie", "Gabrielocratie", "Épistocratie", "Kakistocratie", "Communisme", "Idiocratie"];
let nomsDeLastation = ["Montréal", "Laval", "Candiac", "Paris", "Montpellier", "DS9", "DS7", "Terre", "Ahuntsic", "Villeray", "Saturne", "Jupiter", "Lune", "Europe", "Le lointain"]
let nomsDeSecteursListe = [""]
let ressourcesTypeList = ["Gold Pressed Latinum", "Livres de philo", "Deuterium", "Awesomeness"]
let listeTypesSectionsStation = ["Arboretum", "Bibliothèque"]
let listOfLawInPlace = [""]

// variables gameplay
let tour = 1
var station_joueur;
var station_ordi;

class Firm {
  
  constructor(nom){
    this._nom = "East Sector Company";
  }


}

class RegimePolitique {


}

class Sector {


}


class Station {

  constructor(nom, regime){
    this._nom = nom;
    this._regime = regime;
    this._dirigeant = new Personnage();
    this._capacitePopulation = parseInt((Math.floor(Math.random() * 5) + 20), 10)
    this._richesse = 10;
    this._moral = 10;
    this._ordre = 5;
    this._chaos = 5;
    this._liberte = 10;
    this._securite = 10;
    this._energie = 10;
    this._influenceCulturelle = 10;
    this._connaissance = 1;
    this._ressources = 20;
    this._integrite = 20;
    this._cybersecurite = 10;
    this._sections = new Section();
    this._randomNobody = [];
    this._nobodiesEnMission = [];

  }

  get nom() {
    return this._nom
  }
  set nom(nom){
    this._nom = nom
  }
  get regime(){
    return this._regime;
  }
  set regime (regime){
    this._regime = regime;
  }
  get dirigeant() {
    return this._dirigeant
  }
  set dirigeant (dirigeant){
    this._dirigeant= dirigeant;
  }
  get capacitePopulation(){
    return this._capacitePopulation;
  }
  set capacitePopulation (capacitePopulation){
    this._capacitePopulation = capacitePopulation;
  }
  get richesse(){
    return this._richesse;
  }
//set richesse(richesse){
//    this._richesse = richesse;
//} Je l'ai enlevé pour ne pas à affecter la richesse par erreur. 
richesseTotale = function (){
  console.log(this.randomNobody[1].richesse)
  var calculTotalRichesse = 1
  for (var i = 0; i < this.randomNobody.length; i++){
    calculTotalRichesse = calculTotalRichesse + this.randomNobody[i].richesse
  };
  this._richesse = calculTotalRichesse;
}

  get moral(){
    return this._moral;
  }
  set moral(moral){
    this._moral = moral;
  }
  get ordre(){
    return this._ordre;
  }
  set ordre(ordre){
    this._ordre = ordre;
  }
  get chaos(){
    return this._chaos;
  }
  set chaos(chaos){
    this._chaos = chaos;
  }
  get liberte(){
    return this._liberte;
  }
  set liberte(liberte){
    this._liberte = liberte;
  }
  get securite() {
    return this._securite
  }
  set securite(securite){
    this._securite = securite
  }
  get energie() {
    return this._energie
  }
  set energie(energie){
    this._energie = energie
  }
  get influenceCulturelle() {
    return this._influenceCulturelle
  }
  set influenceCulturelle(influenceCulturelle){
    this._influenceCulturelle = influenceCulturelle
  }
  get connaissance() {
    return this._connaissance
  }
  set connaissance(connaissance){
    this._connaissance = connaissance
  }
  get ressources() {
    return this._ressources
  }
  set ressources(ressources){
    this._ressources = ressources
  }
  get integrite() {
    return this._integrite
  }
  set integrite(integrite){
    this._integrite = integrite
  }
  get cybersecurite() {
    return this._cybersecurite
  }
  set cybersecurite(cybersecurite){
    this._cybersecurite = cybersecurite
  }
  get sections() {
    return this._sections
  }
  set sections(sections){
    this._sections = sections
  }
  get randomNobody() {
    return this._randomNobody
  }
  set randomNobody(randomNobody){
    this._randomNobody = randomNobody
  }
  get nobodiesEnMission() {
    return this._nobodiesEnMission
  }
  set nobodiesEnMission(nobodiesEnMission){
    this._nobodiesEnMission = nobodiesEnMission
  }


  electionNormale (){
    var listeTemporaireCandidatsElection = []
    var candidatGagnantElection
    for (var i = 0; i < this.randomNobody.length; i++){
      if (this.randomNobody[i].charisme >= 7){
        listeTemporaireCandidatsElection.push(this.randomNobody[i]);
      }
    }
      if (listeTemporaireCandidatsElection == []){
        listeTemporaireCandidatsElection = this.randomNobody[Math.floor(Math.random() * this.randomNobody.length)]
      } else {
    var candidatGagnantElection = listeTemporaireCandidatsElection[Math.floor(Math.random() * listeTemporaireCandidatsElection.length)]
      }
    console.log(candidatGagnantElection)
  return candidatGagnantElection
  }

  changementDirigeantStation(dirigeantArrivant, dirigeantPartant) {
    this.randomNobody.push(dirigeantPartant)
    var dirigeantArrivantIndex = this.randomNobody.indexOf(dirigeantArrivant)
    this.randomNobody.splice(dirigeantArrivantIndex,1)
    this.dirigeant = dirigeantArrivant
    this.dirigeant.titre = dirigeantPartant.titre
    dirigeantPartant.titre = ""
  }

  population = function (){
    var totalCalculPopulation = this._randomNobody.length
    return totalCalculPopulation
  }


}

class Section{

  constructor(type = listeTypesSectionsStation[Math.floor(Math.random() * listeTypesSectionsStation.length)]){
    this._type = type
  }
  
    get type() {
      return this._type
    }
    set type(type){
      this._type = type
    }

}



class Personnage {

  constructor(){
    var genre = choiceGender ();
    var prenom = choisir_prenom_personnage(genre);
    var nom = momsFamillePersonnages[Math.floor(Math.random() * momsFamillePersonnages.length)]
    
    this._genre = genre;
    this._titre = "";
    this._prenom = prenom;
    this._nom = nom
    this._moral = parseInt((Math.floor(Math.random() * 10) + 5), 10)
    this._richesse = parseInt((Math.floor(Math.random() * 10) + 5), 10)
    this._influence = parseInt((Math.floor(Math.random() * 10) + 5), 10)
    this._charisme = parseInt((Math.floor(Math.random() * 10) + 5), 10)
    this._connaissance = parseInt((Math.floor(Math.random() * 10) + 5), 10)
    this._ideologie = choiceIdeology ();
    this._height = parseInt((Math.floor(Math.random() * 70) + 145), 10);
    this._age = parseInt((Math.floor(Math.random() * 20) + 18), 10)
    this._origine = nomsDeLastation[Math.floor(Math.random() * nomsDeLastation.length)]
    this._mission = "";
  }

  get genre() {
    return this._genre
  }
  set genre(genre){
    this._genre = genre
  }
  get titre() {
    return this._titre
  }
  set titre(titre){
    this._titre = titre
  }
  get prenom() {
    return this._prenom
  }
  set prenom(prenom){
    this._prenom = prenom
  }
    get nom() {
    return this._nom
  }
  set nom(nom){
    this._nom = nom
  }
  get moral() {
    return this._moral
  }
  set moral(moral){
    this._moral = moral
  }  
  get richesse() {
    return this._richesse
  }
  set richesse(richesse){
    this._richesse = richesse
  }  
  get influence() {
    return this._influence
  }
  set influence(influence){
    this._influence = influence
  }  
  get charisme() {
    return this._charisme
  }
  set charisme(charisme){
    this._charisme = charisme
  }
  get connaissance() {
    return this._connaissance
  }
  set connaissance(connaissance){
    this._connaissance = connaissance
  }
  get ideologie() {
    return this._ideologie
  }
  set ideologie(ideologie){
    this._ideologie = ideologie
  }
  get height() {
    return this._height
  }
  set height(height){
    this._height = height
  }  
  get age() {
    return this._age
  }
  set age(age){
    this._age = age
  }
  get origine() {
    return this._origine
  }
  set origine(origine){
    this._origine = origine
  }
  get mission() {
    return this._mission
  }
  set mission(mission){
    this._mission = mission
  }


  gagneUnTitre = function (){
    var nouveauTitre = listeTitresDirigeant[Math.floor(Math.random() * listeTitresDirigeant.length)]
    this.titre = nouveauTitre
  }

  nomComplet = function (){
    return this._prenom + " " + this._nom
  }

}

class Mission {
  constructor(nature, tourDebut){
    this._natureDeLaMission = nature;
    this._tourDebut = tourDebut;
    this._duree = Math.floor(Math.random() *3 + 3);
  }

}


/*FONCTIONS CRÉATION DES PERSONNAGES*/
function choiceGender (){
  var choixGenre = listeGenre[Math.floor(Math.random() * listeGenre.length)]
  return choixGenre
}

function choiceIdeology (){
  var choiceIdeology = listIdeology[Math.floor(Math.random() * listIdeology.length)]
  return choiceIdeology
}

function choisir_prenom_personnage(genre){
  if (genre == "Homme") {
    var prenomPersonnageFinal = prenomsPersonnagesHomme[Math.floor(Math.random() * prenomsPersonnagesHomme.length)]
  } else if (genre == "Femme"){
    var prenomPersonnageFinal = prenomsPersonnagesFemme[Math.floor(Math.random() * prenomsPersonnagesFemme.length)]
  } else {
    var prenomPersonnageFinal = prenomsPersonnagesTotal[Math.floor(Math.random() * prenomsPersonnagesTotal.length)]
  }
  return prenomPersonnageFinal
}

// FUNCTION vérification si un personnage existe

function verificationExistencePersonnage(nomComplet){
  for (var i = 0; i < station_joueur.randomNobody.length; i++){
    var persoExisteDeja = false
    if (nomComplet.nom == station_joueur.randomNobody[i].nom && nomComplet.prenom == station_joueur.randomNobody[i].prenom){
      persoExisteDeja = true
      break; 
    } else {
      persoExisteDeja = false
    }
}
return persoExisteDeja
}



/*CRÉATION DE LA PAGE*/
window.onload = function(){
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
function fermer_modal(){
  document.getElementById('textOfInfo').textContent = "";
  removeAllChildNodes(document.getElementById("liste_population")) ;
  var modal = document.getElementById("modal_info");
  modal.classList.remove("is-active");
}

window.onclick = function(event) {
  if (event.target == document.getElementById("modal_info")) {
    var modal = document.getElementById("modal_info");
    modal.classList.remove("is-active");
  }
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

// ajouter sélection du dirigeant, une fonction peut-être?

  station_joueur.dirigeant.gagneUnTitre();
  var startingNumberOfNobody = (Math.floor(Math.random() * 15)) + 5;
  for (var i = 0; i < startingNumberOfNobody; i++){
    station_joueur.randomNobody.push(new Personnage())
    };
  station_joueur.richesseTotale();
  console.log(station_joueur)
  console.log(station_joueur.richesse)
  station_joueur.richesse++
  console.log(station_joueur.richesse)
  console.log(station_joueur.randomNobody[0])
  charger_description_station("ecran_creation_station");
});


/*Écran de description de la station*/
function afficherDescription() {
    document.getElementById('tourProgressBar').valeur = tour
    document.getElementById('ecranDescriptionStationTitrePrincipal').textContent = "Description de la station " + station_joueur.nom 
    document.getElementById('tourInfo').textContent = tour;
    document.getElementById('nomStationPage').textContent = station_joueur.nom;
    document.getElementById('dirigeantStationTitre').textContent = station_joueur.dirigeant.titre;
    document.getElementById('consulStation').textContent = station_joueur.dirigeant.nomComplet();
    document.getElementById('consulStation2').textContent = station_joueur.dirigeant.nomComplet();
    document.getElementById('richesseStationInfo').textContent = station_joueur.richesse;
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


  document.getElementById("btnInfoPopulationListNobody").addEventListener('click', function (e){
  
    var textInfo = ""
    console.log(textInfo)
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

// ACTIONS ET ÉVÉNEMENTS
function partir_en_mission(nobody, cell_id, button_id){
  console.log(button_id + " "+ cell_id)
  document.getElementById(button_id).remove
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
        textOfChoiceInfluence = "Vous tenez de favoriser le peuple."
        textEffectsOfChoiceInfluence = "Le peuple s'en fou un peu! Mais la richesse et le moral augmente de 1 tandis que vous dépensez 1 d'énergie.";
        station_joueur.richesse--;
        station_joueur.moral++;
        station_joueur.energie--;
      break;
      case "exileHabitant":
        textOfChoiceInfluence = "Expulsion d'un habitant pour de faux prétextes."
        textEffectsOfChoiceInfluence = station_joueur.dirigeant.nomComplet() + " exile un habitant et confisque sa propriété!"
        station_joueur.richesse++;
        station_joueur.moral--;
        station_joueur.energie++;
      break;
      case "festivalPhiloPolitique":
        textOfChoiceInfluence = "Sur l'ensemble des ordinateurs et des réseaux sociaux s'organise un immense festival de la philosophie politique."
        textEffectsOfChoiceInfluence = "Une grande fête en faveur de la pensée politique et éthique! Un très bon moyen de ganger le jeu."
        station_joueur.richesse++;
        station_joueur.moral++;
        station_joueur.energie++;
        station_joueur.influenceCulturelle++;
        station_joueur.connaissance++;
      break;
      case "fete":
        textOfChoiceInfluence = "Vous organisez une fête."  
        textEffectsOfChoiceInfluence = "C'est la fête et la danse!";
        station_joueur.richesse--
        station_joueur.moral = parseInt(station_joueur.moral + (Math.floor(Math.random() * 4) - 1), 10)
        station_joueur.energie--
      break;
    case "commerce":
      textOfChoiceInfluence = "C'est jour de marché sur " + station_joueur.nom  
      textEffectsOfChoiceInfluence = "La station s'enrichit un peu."
    
      station_joueur.richesse++
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
  tour ++
  if (station_joueur.richesse <= 0 || station_joueur.moral <= 0 || station_joueur.energie <= 0 || station_joueur.integrite <=0 ) {
    alert("Vous avez perdu! " + station_joueur.dirigeant.titre + " " + station_joueur.dirigeant.nomComplet() + " a guidé la station pendant " + tour + " cycles." );
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
  if (station_joueur.regime == "Lotocratie" && tour == 5 || tour == 10){
    alert("Il y a un nouveau tirage au sort pour le gouvernement de la station.")
    station_joueur.dirigeant = new Personnage();
    document.getElementById('consulStation').textContent = station_joueur.dirigeant.nomComplet();
    document.getElementById('consulStation2').textContent = station_joueur.dirigeant.nomComplet();
    alert(station_joueur.dirigeant.nomComplet() + " est maintenant à la tête de la station.");
  }
  if (station_joueur.regime == "République" && tour == 2 || tour == 5 || tour == 10){
  var candidatGagnantElection = station_joueur.electionNormale()
  alert("Il y a une élection. " + candidatGagnantElection.nomComplet() + " a gagné." )
  station_joueur.changementDirigeantStation(candidatGagnantElection, station_joueur.dirigeant);
  }
}

// Événements

const btnExitEvent = document.querySelector('#btnExitEvent');
btnExitEvent.addEventListener('click', () => {
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
      station_joueur.richesse++
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

  document.getElementById('textEffetsEvenement').textContent = textEffetsEvenement
  document.getElementById('textofevent').textContent = textDeEvenement
  document.getElementById('textofevent2').textContent = textDeEvenement2
}
