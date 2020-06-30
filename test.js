//VARIABLES GLOBALES
var liste_type_gouv = ["Lotocratie", "République", "République marchande", "Autocratie", "Monarchie", "Théocratie", "Ploutocratie", "Gabrielocratie", "Épistocratie", "Kakistocratie"];
let nomsDeLastation = ["Montréal", "Laval", "Candiac", "Paris", "Montpellier", "DS9", "DS7", "Terre", "Ahuntsic", "Villeray"]
var prenomsPersonnagesHomme = ["Bernard", "Martin", "Gabriel", "Mathieu", "Arthur", "Thomas", "Christian", "Simon", "Geralt", "Alexandre", "Étienne"]
var prenomsPersonnagesFemme = ["Catherine", "Rapunzel", "Sophia", "Morgane", "Rieke", "Julia", "Linda", "Christina", "Anne-Sophie", "Anne-Marie", "Marie-Pier", "Marie", "Anne", "Anna"]
var prenomsPersonnagesTotal = [].concat(prenomsPersonnagesHomme, prenomsPersonnagesFemme);
var momsFamillePersonnages = ["Monette", "Ducharme", "Carel", "Dax", "Rideout", "Delorme", "Picard", "Sisko", "Janeway", "Pratte", "Séguin", "Gagné", "Turpin", "Bouras", "De Rivia", "Côté", "Gingras"]
var listIdeology = ["Républicanisme", "Anarchisme", "Autoritarisme", "Ludisme", "Gabrielisme", "Scientisme", "Féminisme", "Turpinisme", "Chaotisme", "Monarchisme", "Bernardisme", "Socialisme", "Libéralisme", "Capitalisme", "Scientisme", "Conspirationisme", "Rawlsisme", "Anarco-capitalisme", "Historicisme", "Lavalisme", "Municipalisme", "Vedge", "Amour", "N'importe quoi", "Apathie"]
var listeGenre = ["Homme", "Femme", "Fluide", "Homme", "Femme", "Homme", "Femme", "Non-binaire" ,"Autre"]
listeTitresDirigeant = ["Capitaine", "Commandant", "Consul", "Guide", "Président", "Général", "Professeur", "Dude", "Tsé, lui-là", "Philosophe", "Politicien", "Délégué", "Vendu", "Maître", "WTF?"]
let tour = 1
var station_joueur;
var station_ordi;

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
    this._energie = 10;
    this._ressources = 10;
    this._integrite = 10;
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
  get energie() {
    return this._energie
  }
  set energie(energie){
    this._energie = energie
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
  get randomNobody() {
    return this._randomNobody
  }
  set randomNobody(randomNobody){
    this._randomNobody = randomNobody
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
    this._nom = nomComplet
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
  var nobodyUn = new Personnage();
  var nododyDeux = new Personnage();
  station_joueur.randomNobody = nobodyUn
  charger_description_station("ecran_creation_station");
});


/*Écran de description de la station*/
function afficherDescription() {
    document.getElementById('tourInfo').textContent = tour;
    document.getElementById('nomStationPage').textContent = station_joueur.nom;
    document.getElementById('dirigeantStationTitre').textContent = station_joueur.dirigeant.titre;
    document.getElementById('consulStation').textContent = station_joueur.dirigeant.nomComplet;
    document.getElementById('consulStation2').textContent = station_joueur.dirigeant.nomComplet;
    document.getElementById('richesseInfo').textContent = station_joueur.richesse;
    document.getElementById('typeGouvernementStationPage').textContent = station_joueur.regime;
    document.getElementById('moralInfo').textContent = station_joueur.moral;
    document.getElementById('ordreStationInfo').textContent = station_joueur.ordre;
    document.getElementById('chaosStationInfo').textContent = station_joueur.chaos;
    document.getElementById('energieInfo').textContent = station_joueur.energie;
    document.getElementById('ressourcesInfo').textContent = station_joueur.ressources;
    document.getElementById('populationInfo').textContent = station_joueur.population;
    document.getElementById('integriteInfo').textContent = station_joueur.integrite;
    document.getElementById('capacitePopulationInfo').textContent = station_joueur.capacitePopulation;
  }

  document.getElementById("btnInfoDirigeant").addEventListener('click', function (e){
    alert(station_joueur.dirigeant.titre + " " + station_joueur.dirigeant.nomComplet + " est la personne qui dirige la station."+ 
      "\r\n" + "Son idéologie : " + station_joueur.dirigeant.ideologie +
      "\r\n" + station_joueur.dirigeant.height + "cm." +
      "\r\n" + "Son genre : " + station_joueur.dirigeant.genre +
      "\r\n" + "Son origine : " + station_joueur.dirigeant.origine

      )
  });

  document.getElementById("btnInfoTour").addEventListener('click', function (e){
    alert("De la perspective d'une intelligence artificelle, le temps passe à la fois rapidement et lentement. Elle peut réagir très rapidement comme considérer les choses dans le temps long." + 
    " " + "À ce titre, l'unité de temps centrale est l'année, le cycle.")
  });

  document.getElementById("btnInfoPopulationListNobody").addEventListener('click', function (e){
    alert(station_joueur.randomNobody.titre + " " + station_joueur.randomNobody.nomComplet + " est un random nobody de la station."+ 
    "\r\n" + "Son idéologie : " + station_joueur.randomNobody.ideologie +
    "\r\n" + station_joueur.randomNobody.height + "cm." +
    "\r\n" + "Son genre : " + station_joueur.randomNobody.genre +
    "\r\n" + "Son origine : " + station_joueur.randomNobody.origine

    )
  });

// ACTIONS ET ÉVÉNEMENTS
document.querySelector('#btnActionChoix').addEventListener('click', function (e){
  var choix = document.querySelector('#actionChoix').selectedOptions[0].value
  console.log(choix)
  switch(choix) {
    case "fete":
      alert("C'est la fête et la danse!");
      station_joueur.richesse--
      station_joueur.moral = parseInt(station_joueur.moral + (Math.floor(Math.random() * 4) - 1), 10)
      station_joueur.energie--
    break;
  case "commerce":
    station_joueur.richesse++
    station_joueur.moral--
      alert("C'est jour de marché sur " + station_joueur.nom);
    break;
  case "calculs":
    station_joueur.richesse++
    station_joueur.moral--
      alert("Les ordinateurs de " + station_joueur.nom + " s'occupent à faire des calculs importants et insipides.");
    break;
  case "ameliorerIntegrite":
    station_joueur.integrite++
    station_joueur.energie = station_joueur.energie - 3
    station_joueur.ressources--
      alert("Vos systèmes se mobilisent pour améliorer la structure de la station et la population, incluant " + station_joueur.randomNobody.nomComplet + ", se déploit construire de nouvelles instalations.");
    break;
  case "pause":
    alert("Une pause bien méritée pour recharger les batteries et faire les mises-à-jour.");
    station_joueur.energie = station_joueur.energie + 4;
    break;
  default:
      alert("Ok!");
      tour ++
    } 
  console.log(e)
  afficherDescription();
  evenementFinTour()
  verifierFinPartie();
  })

  document.querySelector('#btnActionChoixInfluence').addEventListener('click', function (e){
    var choixInfluence = document.querySelector('#actionChoixInfluence').selectedOptions[0].value
    console.log(choixInfluence)
    switch(choixInfluence) {
      case "favoriserPeuple":
        alert("Le peuple s'en fou un peu!");
        station_joueur.richesse--;
        station_joueur.moral++;
        station_joueur.energie--;
      break;
      case "exileHabitant":
        alert(station_joueur.dirigeant.nomComplet + " exile un habitant et confisque sa propriété!");
        station_joueur.richesse++;
        station_joueur.moral--;
        station_joueur.energie++;
        station_joueur.population--;
      break;
    default:
        alert("Ok!");
      } 
    console.log(e)
    afficherDescription();
    evenementFinTour()
    verifierFinPartie();
    })

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

function evenementFinTour(){
  var evenementsList = ["visiteur"]
  var evenementQuiArrive = evenementsList[Math.floor(Math.random() * evenementsList.length)]
  switch(evenementQuiArrive){
    case "visiteur":
    console.log("VISITE DUN VISITEUR")
    break;
  }
}

