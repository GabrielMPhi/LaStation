//VARIABLES GLOBALES
var liste_type_gouv = ["monarchie", "republique", "république marchande", "théocratie", "lotocratie", "ploutocratie", "Gabrielocratie"];
let nomsDeLaCite = ["Montreal", "Laval", "Candiac", "Paris", "Montpellier"]
var prenomsPersonnages = ["Catherine", "Bernard", "Rapunzel", "Sophia", "Martin", "Gabriel", "Mathieu", "Arthur", "Rieke", "Christina", "Christian", "Simon", "Geralt", "Anne-Sophie", "Anne-Marie", "Alexanre"]
var momsFamillePersonnages = ["Monette", "Ducharme", "Carel", "Rideout", "Delorme", "Picard", "Janeway", "Pratt", "Séguin", "Gagné", "Turpin", "Bouras", "De Rivia", "Côté"]
let tour = 1
var cite_joueur;
var cite_ordi;

class Cite {

  constructor(nom, regime){
    this._nom = nom;
    this._regime = regime;
    this._dirigeant = choisir_nom_personnage();
    this._richesse = 10;
    this._moral = 10;
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

function charger_description_cite(ecran_de_depart){
  afficherDescription();
  changeScreen(ecran_de_depart, "ecran_description_cite");
}


/*Écran de création de la cité*/

document.getElementById("btn_creation_cite").addEventListener('click', function (e){
  var nom_cite = document.getElementById("txt_nom_cite").value
  var regime_choisi = document.getElementById("select_type_gouv").value
  cite_joueur = new Cite(nom_cite, regime_choisi);
  console.log("on a créé une cité! = "+cite_joueur);
  charger_description_cite("ecran_creation_cite");
});


/*Écran de description de la cité*/
function afficherDescription() {
    document.getElementById('descriptionCitePage').textContent = cite_joueur.nom;
    document.getElementById('consulCite').textContent = cite_joueur.dirigeant;
    document.getElementById('richesseInfo').textContent = cite_joueur.richesse;
    document.getElementById('tourinfo').textContent = tour
  }



document.getElementById('tourinfo').textContent = tour;
document.querySelector('#btnActionChoix').addEventListener('click', function (e){
  var choix = document.querySelector('#actionchoix').selectedOptions[0].value
  console.log(choix)
  switch(choix) {
    case "fete":
      alert("C'est la fête et la danse!");
      tour++
      cite_joueur.richesse--
      cite_joueur.moral++
    break;
  case "commerce":
    tour++
    cite_joueur.richesse++
    cite_joueur.moral--
      alert("C'est jour de marché!");
    break;
  default:
      alert("Ok!");
      tour ++
    } 
  console.log(e)
  console.log(tour)
  console.log(cite_joueur.richesse)
  console.log(cite_joueur.moral)
  afficherDescription();
  })



	
	
  /*
class Partie {

  constructor(){
    this.tour = 1
    this.etat = true
  }

  get tour() {
    return this.tour
  }



  while (this.etat === true) {

  }

}
*/


