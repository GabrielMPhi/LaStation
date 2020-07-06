//VARIABLES GLOBALES
var liste_type_gouv = ["Lottocratie", "République", "République marchande", "Autocratie", "Monarchie", "Théocratie", "Ploutocratie", "Gabrielocratie", "Épistocratie", "Kakistocratie", "Communisme", "Idiocratie"];
let nomsDeLastation = ["Montréal", "Laval", "Candiac", "Paris", "Montpellier", "DS9", "DS7", "Terre", "Ahuntsic", "Villeray"]
var prenomsPersonnagesHomme = ["Bernard", "Martin", "Gabriel", "Mathieu", "Arthur", "Thomas", "Christian", "Simon", "Geralt", "Alexandre", "Étienne", "François"]
var prenomsPersonnagesFemme = ["Catherine", "Rapunzel", "Sophia", "Morgane", "Rieke", "Julia", "Linda", "Christina", "Anne-Sophie", "Anne-Marie", "Marie-Pier", "Marie", "Anne", "Anna"]
var prenomsPersonnagesTotal = [].concat(prenomsPersonnagesHomme, prenomsPersonnagesFemme);
var momsFamillePersonnages = ["Monette", "Ducharme", "Carel", "Dax", "Rideout", "Delorme", "Picard", "Sisko", "Janeway", "Pratte", "Séguin", "Gagné", "Turpin", "Bouras", "De Rivia", "Côté", "Gingras"]
var listIdeology = ["Républicanisme", "Anarchisme", "Autoritarisme", "Ludisme", "Gabrielisme", "Scientisme", "Féminisme", "Turpinisme", "Chaotisme", "Monarchisme", "Bernardisme", "Socialisme", "Libéralisme", "Capitalisme", "Conspirationisme", "Rawlsisme", "Anarco-capitalisme", "Lavalisme", "Municipalisme", "Vedge", "Apathie"]
var listeGenre = ["Homme", "Femme", "Fluide", "Homme", "Femme", "Homme", "Femme", "Non-binaire"]
var listeTitresDirigeant = ["Capitaine", "Commandant", "Consul", "Guide", "Président", "Général", "Professeur", "Dude", "Tsé, lui-là", "Philosophe", "Politicien", "Délégué", "Vendu", "Maître", "WTF?"]
let nomsDeSecteursListe = [""]
let ressourcesTypeList = ["Gold Pressed Latinum", "Livres de philo", "Deuterium", "Awesomeness"]
let listeTypesSectionsStation = ["Arboretum", "Bibliothèque"]
let listOfLawInPlace = [""]
let tour = 1
var station_joueur;
var station_ordi;

class RegimePolitique {


}

class Sector {


}


class Station {

  constructor(nom, regime){
    this._nom = nom;
    this._regime = regime;
    this._dirigeant = new Personnage();
    this._population = parseInt((Math.floor(Math.random() * 5) + 14), 10)
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
    this._ressources = 10;
    this._integrite = 10;
    this._cybersecurite = 10;
    this._sections = new Section();
    this._randomNobody = [];
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
  get population(){
    return this._population;
  }
  set population (population){
    this._population = population;
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
  set richesse(richesse){
    this._richesse = richesse;
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
    this._nomComplet = prenom + " " + nom
    this._influence = parseInt((Math.floor(Math.random() * 10) + 5), 10)
    this._charisme = parseInt((Math.floor(Math.random() * 10) + 5), 10)
    this._connaissance = parseInt((Math.floor(Math.random() * 10) + 5), 10)
    this._ideologie = choiceIdeology ();
    this._height = parseInt((Math.floor(Math.random() * 70) + 145), 10);
    this._age = parseInt((Math.floor(Math.random() * 20) + 18), 10)
    this._origine = nomsDeLastation[Math.floor(Math.random() * nomsDeLastation.length)]
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
  get nomComplet() {
    return this._nomComplet
  }
  set nomComplet(nomComplet){
    this._nomComplet = nomComplet
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

  gagneUnTitre = function (){
    var nouveauTitre = listeTitresDirigeant[Math.floor(Math.random() * listeTitresDirigeant.length)]
    this.titre = nouveauTitre
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
    if (nomComplet == station_joueur.randomNobody[i].nomComplet){
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
  station_joueur.randomNobody.push(new Personnage(), new Personnage(), new Personnage(), new Personnage(), new Personnage(), new Personnage())
  console.log(station_joueur)
  charger_description_station("ecran_creation_station");
});


/*Écran de description de la station*/
function afficherDescription() {
    document.getElementById('ecranDescriptionStationTitrePrincipal').textContent = "Description de la station " + station_joueur.nom 
    document.getElementById('tourInfo').textContent = tour;
    document.getElementById('nomStationPage').textContent = station_joueur.nom;
    document.getElementById('dirigeantStationTitre').textContent = station_joueur.dirigeant.titre;
    document.getElementById('consulStation').textContent = station_joueur.dirigeant.nomComplet;
    document.getElementById('consulStation2').textContent = station_joueur.dirigeant.nomComplet;
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
    document.getElementById('populationStationInfo').textContent = station_joueur.population;
    document.getElementById('integriteStationInfo').textContent = station_joueur.integrite;
    document.getElementById('cybersecuriteStationInfo').textContent = station_joueur.cybersecurite;
    document.getElementById('capacitePopulationStationInfo').textContent = station_joueur.capacitePopulation;
  }
// BOUTONS INFO

const btnExitInfo = document.querySelector('#btnExitInfo');
btnExitInfo.addEventListener('click', () => {
  charger_description_station("ecranInformationStation");
});

  document.getElementById("btnInfoDirigeant").addEventListener('click', function (e){
    chargerVersInformation("ecran_description_station")
    var textInfo = station_joueur.dirigeant.titre + " " + station_joueur.dirigeant.nomComplet + " est la personne qui dirige la station."+ 
    "\r\n" + "Son idéologie : " + station_joueur.dirigeant.ideologie +
    "\r\n" + "Sa taille : " + station_joueur.dirigeant.height + " cm." +
    "\r\n" + "Son genre : " + station_joueur.dirigeant.genre +
    "\r\n" + "Son origine : " + station_joueur.dirigeant.origine
    document.getElementById('textOfInfo').textContent = textInfo
      
  });

  document.getElementById("btnInfoTour").addEventListener('click', function (e){
    chargerVersInformation("ecran_description_station")
    var textInfo = "De la perspective d'une intelligence artificelle, le temps passe à la fois rapidement et lentement. Elle peut réagir très rapidement comme considérer les choses dans le temps long." + 
    " " + "À ce titre, l'unité de temps centrale est l'année, le cycle."
    document.getElementById('textOfInfo').textContent = textInfo
  
  });

  document.getElementById("btnInfoPopulationListNobody").addEventListener('click', function (e){
    chargerVersInformation("ecran_description_station")
    var textInfo = ""
    console.log(textInfo)
    for (var i = 0; i < station_joueur.randomNobody.length; i++){
      textInfo = textInfo.concat(station_joueur.randomNobody[i].titre, " ", station_joueur.randomNobody[i].nomComplet, " est un random nobody de la station.", 
      "\r\n", "Son idéologie : ", station_joueur.randomNobody[i].ideologie,
      "\r\n", station_joueur.randomNobody[i].height + "cm.",
      "\r\n", "Son genre : ", station_joueur.randomNobody[i].genre,
      "\r\n", "Son origine : ", station_joueur.randomNobody[i].origine, "\n\n"
      )}
      console.log(textInfo)
    document.getElementById('textOfInfo').textContent = textInfo
  });

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
        textOfChoiceInfluence = "Il y a un débat philosophique entre " + debateurPhiloA.nomComplet + " et " + debateurPhiloB.titre + " " + debateurPhiloB.nomComplet + "!"
        textEffectsOfChoiceInfluence = debatPhilo(debateurPhiloA,debateurPhiloB)
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
        textEffectsOfChoiceInfluence = station_joueur.dirigeant.nomComplet + " exile un habitant et confisque sa propriété!"
        station_joueur.richesse++;
        station_joueur.moral--;
        station_joueur.energie++;
        station_joueur.population--;
      break;
      case "festivalPhiloPolitique":
        textOfChoiceInfluence = "Sur l'ensemble des ordinateurs et des réseaux sociaux s'organise un immense festival de la philosophie politique."
        textEffectsOfChoiceInfluence = "Une grande fête en faveur de la pensée politique et éthique! Un très bon moyen de ganger le jeu."
        station_joueur.richesse++;
        station_joueur.moral++;
        station_joueur.energie++;
        station_joueur.population--;
        station_joueur.influenceCulturelle++;
        station_joueur.connaissance++;
      break;
      case "fete":
        textOfChoice = "Vous organisez une fête."  
        textEffectsOfChoice1 = "C'est la fête et la danse!";
        station_joueur.richesse--
        station_joueur.moral = parseInt(station_joueur.moral + (Math.floor(Math.random() * 4) - 1), 10)
        station_joueur.energie--
      break;
    case "commerce":
        textOfChoice = "C'est jour de marché sur " + station_joueur.nom  
        textEffectsOfChoice1 = "La station s'enrichit un peu."
    
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
    textOfChoice = "Vos systèmes se mobilisent pour améliorer la structure de la station et la population, incluant " + station_joueur.randomNobody[0].nomComplet + ", se déploit construire de nouvelles instalations.";
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
      var gagnantDebatPhilo = participantA.nomComplet
      station_joueur.moral++;
    } else if (participantB.ideologie == "Républicanisme" && participantA.ideologie != "Républicanisme"){
      var gagnantDebatPhilo = participantB.nomComplet
      station_joueur.moral++;
    } else if (participantB.ideologie == "Gabrielisme" && participantA.ideologie != "Gabrielisme" && participantA.ideologie != "Républicanisme" ){
      var gagnantDebatPhilo = participantB.nomComplet
      station_joueur.moral++;
    } else {
      gagnantDebatPhilo = "Il n'y a pas de gagnant. Il n'y a que de la confusion, du chaos et de l'étrangeté."
    }
    return gagnantDebatPhilo
  }


function verifierFinPartie(){
  tour ++
  if (station_joueur.richesse <= 0 || station_joueur.moral <= 0 || station_joueur.energie <= 0 || station_joueur.integrite <=0 ) {
    alert("Vous avez perdu! " + station_joueur.dirigeant.titre + " " + station_joueur.dirigeant.nomComplet + " a guidé la station pendant " + tour + " cycles." );
    location.reload(); 
  }
  if (station_joueur.capacitePopulation <= station_joueur.population ) {
    alert("Le moral descend, car une part de la population n'a pas accès à du logement.");
    station_joueur.moral--;
  }
  if (station_joueur.ressources >= station_joueur.population ) {
    alert("Le moral descend, car une part de la population n'a pas accès à du logement.");
    station_joueur.population++;
    station_joueur.ressources--;
    station_joueur.moral++;
  }
  if (station_joueur.moral >= 15 ) {
    alert("Le moral descend, car une part de la population n'a pas accès à du logement.");
    station_joueur.population++;
  }
  if (station_joueur.regime == "Lotocratie" && tour == 5 || tour == 10){
    alert("Il y a un nouveau tirage au sort pour le gouvernement de la station.")
    station_joueur.dirigeant = new Personnage();
    document.getElementById('consulStation').textContent = station_joueur.dirigeant.nomComplet;
    document.getElementById('consulStation2').textContent = station_joueur.dirigeant.nomComplet;
    alert(station_joueur.dirigeant.nomComplet + " est maintenant à la tête de la station.");
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
        visiteurNobody = new Personnage ();
      }
      var textDeEvenement = "Il y a eu un visiteur du nom de " + visiteurNobody.nomComplet + "."
      if (visiteurNobody.genre == "femme" && visiteurNobody.nomComplet == "Catherine Côté"){
        visiteurNobody.height = visiteurNobody.height + 15
        textDeEvenement2 = visiteurNobody.nomComplet + " va joindre " + station_joueur.nom + "."
        textEffetsEvenement = visiteurNobody.nomComplet + " devient menbre de la station!"
        station_joueur.population++
        // station_joueur.randomNobody.push(visiteurNobody) 
        // Est-ce qu'il faudrait créer une autre variable pour s'assurer que si un autre visiteurNobody visite, il s'ajoute et n'écrase pas l'ancien?
        break;

      } else if (visiteurNobody.nomComplet == "Bernard Ducharme"){
        textDeEvenement2 = visiteurNobody.nomComplet + " va joindre " + station_joueur.nom + "."
        textEffetsEvenement = visiteurNobody.nomComplet + " devient menbre de la station!"
        station_joueur.population++
        station_joueur.connaissance = station_joueur.connaissance + 3
        // station_joueur.randomNobody.push(visiteurNobody) 
        // Est-ce qu'il faudrait créer une autre variable pour s'assurer que si un autre visiteurNobody visite, il s'ajoute et n'écrase pas l'ancien?
      } else if (visiteurNobody.nomComplet == "Gabriel Monette"){
        textDeEvenement2 = visiteurNobody.nomComplet + " va joindre " + station_joueur.nom + "."
        textEffetsEvenement = visiteurNobody.nomComplet + " devient menbre de la station!"
        station_joueur.population++
        station_joueur.connaissance = station_joueur.connaissance + 3
        // station_joueur.randomNobody.push(visiteurNobody) 
        // Est-ce qu'il faudrait créer une autre variable pour s'assurer que si un autre visiteurNobody visite, il s'ajoute et n'écrase pas l'ancien?
      } else {
        textEffetsEvenement = "Rien de spécial. " + visiteurNobody.nomComplet + " retourne sur son chemin."
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
      textDeEvenement = station_joueur.randomNobody[0].nomComplet + " se tourne les pouces. Il y a une romance entre " + station_joueur.randomNobody[0].nomComplet + " et " + station_joueur.randomNobody[1].nomComplet + "."
      textDeEvenement2 = "C'est bien plaisant."
      textEffetsEvenement = "Rien de spécial."
      break;
    case "debatphilo":
      var debateurPhiloA = station_joueur.randomNobody[Math.floor(Math.random() * station_joueur.randomNobody.length)]
      var debateurPhiloB = station_joueur.dirigeant
      textDeEvenement = "Il y a un débat philosophique entre " + debateurPhiloA.nomComplet + " et " + debateurPhiloB.titre + " " + debateurPhiloB.nomComplet + "!"
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
