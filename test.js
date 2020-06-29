//VARIABLES GLOBALES
var liste_type_gouv = ["Lotocratie", "République", "République marchande", "Autocratie", "Monarchie", "Théocratie", "Ploutocratie", "Gabrielocratie"];
let nomsDeLastation = ["Montreal", "Laval", "Candiac", "Paris", "Montpellier", "DS7"]
var prenomsPersonnages = ["Catherine", "Bernard", "Rapunzel", "Sophia", "Martin", "Gabriel", "Mathieu", "Morgane", "Arthur", "Rieke", "Julia", "Thomas", "Christina", "Christian", "Simon", "Geralt", "Anne-Sophie", "Anne-Marie", "Alexandre"]
var momsFamillePersonnages = ["Monette", "Ducharme", "Carel", "Dax", "Rideout", "Delorme", "Picard", "Sisko", "Janeway", "Pratte", "Séguin", "Gagné", "Turpin", "Bouras", "De Rivia", "Côté"]
let tour = 1
var station_joueur;
var station_ordi;


class station {

  constructor(nom, regime){
    this._nom = nom;
    this._regime = regime;
    this._dirigeant = choisir_nom_personnage();
    this._population = parseInt((Math.floor(Math.random() * 5) + 14), 10)
    this._capacitePopulation = parseInt((Math.floor(Math.random() * 5) + 20), 10)
    this._richesse = 10;
    this._moral = 10;
    this._energie = 10;
    this._ressources = 10;
    this._integrite = 10;
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
    return this._ressources
  }
  set integrite(integrite){
    this._integrite = integrite
  }
}

function choisir_nom_personnage(){
  var nomPersonnageFinal = prenomsPersonnages[Math.floor(Math.random() * prenomsPersonnages.length)] + " " +momsFamillePersonnages[Math.floor(Math.random() * momsFamillePersonnages.length)]
  return nomPersonnageFinal
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
  station_joueur = new station(nom_station, regime_choisi);
  console.log("on a créé une station! = "+station_joueur);
  charger_description_station("ecran_creation_station");
});


/*Écran de description de la station*/
function afficherDescription() {
    document.getElementById('tourInfo').textContent = tour;
    document.getElementById('nomStationPage').textContent = station_joueur.nom;
    document.getElementById('consulStation').textContent = station_joueur.dirigeant;
    document.getElementById('consulStation2').textContent = station_joueur.dirigeant;
    document.getElementById('richesseInfo').textContent = station_joueur.richesse;
    document.getElementById('typeGouvernementStationPage').textContent = station_joueur.regime;
    document.getElementById('moralInfo').textContent = station_joueur.moral;
    document.getElementById('energieInfo').textContent = station_joueur.energie;
    document.getElementById('ressourcesInfo').textContent = station_joueur.ressources;
    document.getElementById('populationInfo').textContent = station_joueur.population;
    document.getElementById('integriteInfo').textContent = station_joueur.integrite;
    document.getElementById('capacitePopulationInfo').textContent = station_joueur.capacitePopulation;
  }

document.querySelector('#btnActionChoix').addEventListener('click', function (e){
  var choix = document.querySelector('#actionChoix').selectedOptions[0].value
  console.log(choix)
  switch(choix) {
    case "fete":
      alert("C'est la fête et la danse!");
      station_joueur.richesse--
      station_joueur.moral = parseInt(station_joueur.moral + (Math.floor(Math.random() * 4) - 2), 10)
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
  default:
      alert("Ok!");
      tour ++
    } 
  console.log(e)
  afficherDescription();
  verifierFinPartie();
  })

  document.querySelector('#btnActionChoixInfluence').addEventListener('click', function (e){
    var choixInfluence = document.querySelector('#actionChoix').selectedOptions[0].value
    console.log(choixInfluence)
    switch(choixInfluence) {
      case "favoriserPeuple":
        alert("Le peuple s'en fou un peu!");
        station_joueur.richesse--;
        station_joueur.moral++;
        station_joueur.energie--;
      break;
    default:
        alert("Ok!");
      } 
    console.log(e)
    afficherDescription();
    verifierFinPartie();
    })

function verifierFinPartie(){
  tour ++
  if (station_joueur.richesse <= 0 || station_joueur.moral <= 0 || station_joueur.energie <= 0) {
    alert("Vous avez perdu! " + station_joueur.dirigeant + " a guidé la station pendant " + tour + " cycles." );
    location.reload(); 
  }
  if (station_joueur.capacitePopulation <= station_joueur.population ) {
    alert("Le moral descend, car une part de la population n'a pas accès à du logement.");
    station_joueur.moral--;
  }

  if (station_joueur.moral >= 15 ) {
    alert("Le moral descend, car une part de la population n'a pas accès à du logement.");
    station_joueur.population++;
  }
  if (station_joueur.regime == "Lotocratie"){
    alert("Il y a un nouveau tirage au sort pour le gouvernement de la station.")
    var nouveauNomDirigeant = choisir_nom_personnage()
    alert(nouveauNomDirigeant + " est maintenant à la tête de la station.")
    station_joueur.dirigeant = nouveauNomDirigeant
  }


}
