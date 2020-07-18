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
var listOccupation = ["Radio Poubelle", "Biologie", "Médecine", "Astrophysique", "Philosophie", "Histoire", "Littérature", "Leadership", "Sécurité", "Informatique", "Lechage de bottes", "Lobbyisme", "Sociologie", "Making ze mony"]

//variables station
var liste_type_gouv = ["Lottocratie", "République", "Corporation", "Autocratie", "Monarchie", "Théocratie", "Ploutocratie", "Gabrielocratie", "Épistocratie", "Kakistocratie", "Communisme", "Idiocratie"];
let nomsDeLastation = ["Montréal", "Laval", "Candiac", "Paris", "Montpellier", "DS9", "DS7", "Terre", "Ahuntsic", "Villeray", "Saturne", "Jupiter", "Lune", "Europe", "Le lointain"]
let nomsDeSecteursListe = [""]
let ressourcesTypeList = ["Gold Pressed Latinum", "Livres de philo", "Deuterium", "Awesomeness"]
let listeTypesSectionsStation = ["Arboretum", "Bibliothèque"]
let listOfLawInPlace = [""]

// variables gameplay
let tour;
var station_joueur;
var station_ordi;
var evenements_a_annoncer = [];


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

  enrichissementAuHasard(nombre){
    for(let i=0; i<nombre; i++){
      let chanceux = Math.floor(Math.random() * this._randomNobody.length);
      this._randomNobody[chanceux].richesse++;    
    }
  }

  appauvrissementAuHasard(nombre){
    for(let i=0; i<nombre; i++){
      let malchanceux = Math.floor(Math.random() * this._randomNobody.length);
      this._randomNobody[malchanceux].richesse--;    
    }
  }

  enrichissementTotal(creditParHabitant){
    for(let i=0; i< this._randomNobody.length; i++){
      this._randomNobody[i].richesse = this._randomNobody[i].richesse + creditParHabitant;  
    }
  }

  appauvrissementTotal(creditParHabitant){
    for(let i=0; i< this._randomNobody.length; i++){
      this._randomNobody[i].richesse = this._randomNobody[i].richesse - creditParHabitant;    
    }
  }

  payeEtRevenuPourTous(){
    for(let i=0; i< this._randomNobody.length; i++){
      var salaire = 0
      switch (this._randomNobody[i].occupation){
        case "Making ze mony": 
        salaire = 4;
          break;
      case "Philosophie": 
        salaire = 3
        break;
      case "Médecine":
        salaire = 2
        break;
      case "Histoire":
        salaire = -1
        break;
      default: 
      salaire = 1;
      break;
    }
    //à l'avenir, ici un autre switch au cas ou y'a une propriété qui donne du revenu et ce tout s'ajoute à salaire ou à la somme en bas
    this._dirigeant.richesse = this._dirigeant.richesse + 5;
    this._randomNobody[i].richesse = this._randomNobody[i].richesse + salaire;  
  }
  }

  rechercheDePrestige(){
    for(let i=0; i< this._randomNobody.length; i++){
        if (this._randomNobody[i].richesse >= parseInt((this.richesseTotale()/this._randomNobody.length),10)){
          this._randomNobody[i].richesse = parseInt((this._randomNobody[i].richesse / 2),10)
          this._randomNobody[i].prestige++
          console.log(this._randomNobody[i].nomComplet() + " dépense ses richesses pour devenir prestigieux.")
        }
        if (this._randomNobody[i].richesse == 0 && this._randomNobody[i].prestige > 0){
          var utilisationDuPrestige = Math.floor(Math.random() * 10);
          this._randomNobody[i].prestige--
          this._randomNobody[i].richesse = this._randomNobody[i].richesse + utilisationDuPrestige
          for(let i=0; i<utilisationDuPrestige; i++){
            let malchanceux = Math.floor(Math.random() * this._randomNobody.length);
            this._randomNobody[malchanceux].richesse--;    
          }
          console.log(this._randomNobody[i].nomComplet() + " perd 1 de prestige et gagne : " + utilisationDuPrestige + " crédits")
        }
  }}

  augmentationMoralAuHasard(nombre){
    for(let i=0; i<nombre; i++){
      let chanceux = Math.floor(Math.random() * this._randomNobody.length);
      this._randomNobody[chanceux].richesse++;    
    }
  }

  diminutionMoralAuHasard(nombre){
    for(let i=0; i<nombre; i++){
      let malchanceux = Math.floor(Math.random() * this._randomNobody.length);
      this._randomNobody[malchanceux].richesse--;    
    }
  }


  augmentationMoralTotal(moralParHabitant){
    for(let i=0; i< this._randomNobody.length; i++){
      this._randomNobody[i].richesse = this._randomNobody[i].richesse + moralParHabitant;  
    }
  }

  diminutionMoralTotal(moralParHabitant){
    for(let i=0; i< this._randomNobody.length; i++){
      this._randomNobody[i].richesse = this._randomNobody[i].richesse - moralParHabitant;    
    }
  }


  moralTotal(){
    var calculTotalMoral = 0
    for (var i = 0; i < this._randomNobody.length; i++){
      calculTotalMoral = calculTotalMoral + this.randomNobody[i].moral
    };
    calculTotalMoral = calculTotalMoral + this._dirigeant.moral 
    calculTotalMoral = (calculTotalMoral /this._randomNobody.length)
    return parseInt(calculTotalMoral,10);
    }

  richesseTotale(){
  var calculTotalRichesse = 0
  for (var i = 0; i < this.randomNobody.length; i++){
    calculTotalRichesse = calculTotalRichesse + this.randomNobody[i].richesse
  };
  calculTotalRichesse = calculTotalRichesse + this._dirigeant.richesse 
  return calculTotalRichesse;
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
    this._richesse = parseInt((Math.floor(Math.random() * 100) + 40), 10)
    this._influence = parseInt((Math.floor(Math.random() * 10) + 5), 10)
    this._prestige = 0
    this._charisme = parseInt((Math.floor(Math.random() * 10) + 5), 10)
    this._capaciteCombat = parseInt((Math.floor(Math.random() * 10) + 5), 10)
    this._connaissance = parseInt((Math.floor(Math.random() * 10) + 5), 10)
    this._ideologie = choiceIdeology ();
    this._occupation = choiceOccupation()
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
  get prestige() {
    return this._prestige
  }
  set prestige(prestige){
    this._prestige = prestige
  } 
  get charisme() {
    return this._charisme
  }
  set charisme(charisme){
    this._charisme = charisme
  }
  get capaciteCombat() {
    return this._capaciteCombat
  }
  set capaciteCombat(capaciteCombat){
    this._capaciteCombat = capaciteCombat
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
  get occupation() {
    return this._occupation
  }
  set occupation(occupation){
    this._occupation = occupation
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
  constructor(nature, tour_debut, nobody){
    this._nature_de_la_mission = nature;
    this._tour_debut = tour_debut;
    this._duree = Math.floor(Math.random()*3+3);
    this._nobody = nobody;
    this._evenement_retour = new Evenement();
    tour.observateurs.push(this);
  } 

  changementTour(numero){
   // console.log("la mission observe... tour: "+numero+"; tour_debut: "+this._tour_debut+"; durée: "+this._duree);
    if(numero - this._tour_debut == this._duree){
      this.resoudre_mission();
      this.fait_retour_mission();
    }
  }

  fait_retour_mission(){
    evenements_a_annoncer.push(this._evenement_retour); 
  }
  
  resoudre_mission(){
    switch(this._nature_de_la_mission){
      case "mission chaotique": this.resoudre_mission_chaotique();
        break;
      default: break;
    }
  }

  resoudre_mission_chaotique(){
      
    switch (Math.floor(Math.random()*10+1)){
      case 1: this.mort_tragique("de soif.");
        break;
      case 2: this.mort_tragique("d'une panne des systèmes de survie.");
        break;
      case 3: this.mort_tragique("d'un accident mécanique.");
        break;
      case 4: this.mort_tragique("en se suicidant après avoir perdu la raison.");
        break;
      case 5: this.mort_tragique("massacré par des extraterrestres.");
        break;
      case 6: this.mission_commerciale();
        break;
      case 7: this.retour_avec_ressources();
        break;
      case 8: this.transformation_philosophique();
        break;
      case 9: this.recits_aventuriers();
        break;
      case 10: this.retour_chaotique();
        break;
        default: break;
    }
    
    
  }

  reintegrer_la_station(nobody){
    station_joueur.randomNobody.push(nobody);
    let indexReintegration = station_joueur.nobodiesEnMission.indexOf(nobody); 
    station_joueur.randomNobody.splice(indexReintegration, 1);
  }
  
  transformation_philosophique(){
    this._nobody.ideologie = choiceIdeology();
    this._evenement_retour.textOfEvent = this._nobody.nomComplet() + " est revenu complètement transformé par son expérience lors de sa mission.";
    this._evenement_retour.textEffetsEvenement = "Son idéologie est maintenant "+this.nobody.ideologie;
    this.reintegrer_la_station(this._nobody);
  }


  mort_tragique(cause_mort){
    this._evenement_retour.textOfEvent = "La navette de "+this._nobody.nomComplet()+" est revenue sur le pilote automatique. Grâce aux enregitrements, on apprend qu'il est mort "+cause_mort;
  }

  retour_chaotique(){
    station_joueur.integrite--;
  // Il faudrait faire diminuer le moral de qqn dans la station  station_joueur.moralTotal();
    station_joueur.chaos++;
    //station_joueur.population--;
    this._evenement_retour.textOfEvent =  this._nobody.nomComplet() + "est revenu de mission... accompagné de mercenaire extraterrestres qui sèment le chaos dans la station!"
    this._evenement_retour.textEffetsEvenement = "L'intégrité de la station est affectée et le moral de la population s'en ressent."; 
  }

  recits_aventuriers(){
    this._nobody.influenceCulturelle +=3;
    this._nobody.influence++;
    this._nobody.charisme++;
    this._evenement_retour.textOfEvent = this._nobody.nomComplet()+ " est revenu de mission. Il n'a rien rapporté d'utile, mais ses récits d'aventures captivent tout le monde";
    this._evenement_retour.textEffetsEvenement = "Son influence culturelle augmente beaucoup. Son influence et son charisme augmentent aussi."
    this.reintegrer_la_station(this._nobody);
  }

  mission_commerciale(){
    station_joueur.enrichissementAuHasard(2);
    this._nobody.richesse++;
    this._nobody.influence +=2;
    this._evenement_retour.textOfEvent = this._nobody.nomComplet()+" est revenu de mission. Il a découvert des extraterrestres prospères et heureux de commercer avec vous."
    this._evenement_retour.textEffetsEvenement = "La richesse de la station augmente grandement. L'influence de "+this._nobody.nomComplet() + " augmente d'autant."
    this.reintegrer_la_station(this._nobody);
  }

  retour_avec_ressources(){
    station_joueur.ressources +=2;
    this._nobody.influence +=1;
    this._evenement_retour.textOfEvent =  this._nobody.nomComplet()+" est revenu de mission. Sa navette regorge de minerais rares glanés sur des astéroïdes croisés en chemin."
    this._evenement_retour.textEffetsEvenement = "Les ressources de la station augmentent. L'influence de "+this._nobody.nomComplet()+ "s'accroît un peu.";
    this.reintegrer_la_station(this._nobody);
  }
  get nature_de_la_mission(){
    return this._nature_de_la_mission;
  }
  set nature_de_la_mission(val){
    this._nature_de_la_mission = val;
  }
  get tour_debut(){
    return this._tour_debut;
  }
  set tour_debut(val){
    this._tour_debut = val;
  }
  get duree(){
    return this._duree;
  }
  set duree(val){
    this._duree = val;
  }
  get nobody(){
    return this._nobody;
  }
  set nobody(val){
    this._nobody = val;
  }

}

class Tour {
  constructor(){
    this._numero = 1;
    this._observateurs = []; 
  }

  augmenter = function(){
    this._numero++
    this.signaler();
  }

  signaler = function(){
    this.observateurs.forEach(e => e.changementTour(this._numero)); 
  }

  get numero(){
    return this._numero;
  }
  set numero(val){
    this._numero = val;
  }

  get observateurs(){
    return this._observateurs;
  }

  set observateurs(val){
    this._observateurs = val;
  }

}

class Evenement {
  constructor(){
    this._textOfEvent = "";
    this._textOfEvent2 = "";
    this._textEffetsEvenement = "";
  }

  get textOfEvent(){
    return this._textOfEvent;
  }
  set textOfEvent(val){
    this._textOfEvent = val;
  }
  get textOfEvent2(){
    return this._textOfEvent2;
  }
  set textOfEvent2(val){
    this._textOfEvent2 = val;
  }
  get textEffetsEvenement(){
    return this._textEffetsEvenement;
  }
  set textEffetsEvenement(val){
    this._textEffetsEvenement = val;
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

function choiceOccupation(){
  var choiceOccupation = listOccupation[Math.floor(Math.random() * listOccupation.length)];
  return choiceOccupation
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
    document.getElementById('moralStationInfo').textContent = station_joueur.moralTotal();
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
    remove_all_children(document.getElementById('liste_population'));
    for (var i = 0; i < station_joueur.randomNobody.length; i++){
      let new_row = document.createElement("tr");
      new_row.id = "personnage"+i;
      let first_cell = document.createElement("td");
      first_cell.innerHTML = textInfo.concat("<b>", station_joueur.randomNobody[i].titre, " ", station_joueur.randomNobody[i].nomComplet(), "</b> est un random nobody de la station.", 
      "<br>", "Son titre : ", station_joueur.randomNobody[i].titre,
      "<br>", "Son occupation : ", station_joueur.randomNobody[i].occupation,
      "<br>", "Son idéologie : ", station_joueur.randomNobody[i].ideologie,
      "<br>", station_joueur.randomNobody[i].height + "cm.",
      "<br>", "Son genre : ", station_joueur.randomNobody[i].genre,
      "<br>", "Son charisme : ", station_joueur.randomNobody[i].charisme,
      "<br>", "Son prestige : ", station_joueur.randomNobody[i].prestige,
      "<br>", "Son moral : ", station_joueur.randomNobody[i].moral,
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
        station_joueur.augmentationMoralAuHasard(1);
        station_joueur.chaos++;
      break;      
      case "favoriserPeuple":
        textOfChoiceInfluence = "Vous venez de favoriser le peuple."
        textEffectsOfChoiceInfluence = "Le peuple s'en fout un peu! Mais la richesse et le moral augmente de 1 tandis que vous dépensez 1 d'énergie.";
        station_joueur.enrichissementAuHasard(1);
        station_joueur.augmentationMoralAuHasard(1);
        station_joueur.energie--;
      break;
      case "exileHabitant":
        textOfChoiceInfluence = "Expulsion d'un habitant pour de faux prétextes."
        textEffectsOfChoiceInfluence = station_joueur.dirigeant.nomComplet() + " exile un habitant et confisque sa propriété!"
        station_joueur.dirigeant.richesse++;
        station_joueur.diminutionMoralAuHasard(1);
        station_joueur.energie++;
      break;
      case "festivalPhiloPolitique":
        textOfChoiceInfluence = "Sur l'ensemble des ordinateurs et des réseaux sociaux s'organise un immense festival de la philosophie politique."
        textEffectsOfChoiceInfluence = "Une grande fête en faveur de la pensée politique et éthique! Un très bon moyen de gagner le jeu."
        station_joueur.richesse++;
        station_joueur.augmentationMoralAuHasard(1);
        station_joueur.energie++;
        station_joueur.influenceCulturelle++;
        station_joueur.connaissance++;
      break;
      case "fete":
        textOfChoiceInfluence = "Vous organisez une fête."  
        textEffectsOfChoiceInfluence = "C'est la fête et la danse!";
        station_joueur.appauvrissementAuHasard(1);
        station_joueur.moral = parseInt(station_joueur.moral + (Math.floor(Math.random() * 4) - 1), 10)
        station_joueur.energie--
      break;
    case "commerce":
      textOfChoiceInfluence = "C'est jour de marché sur " + station_joueur.nom  
      textEffectsOfChoiceInfluence = "La station s'enrichit un peu."
    
      station_joueur.enrichissementAuHasard(7);
      station_joueur.diminutionMoralAuHasard(1);
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


  afficherChoixEtEvenements()
  afficherDescription();
  evenementFinTour()
  verifierFinPartie();
  })


  function debatPhilo(participantA, participantB){
    if (participantA.ideologie == "Républicanisme" && participantB.ideologie != "Républicanisme") {
      var gagnantDebatPhilo = participantA.nomComplet() + " a gagné!"
    } else if (participantB.ideologie == "Républicanisme" && participantA.ideologie != "Républicanisme"){
      var gagnantDebatPhilo = participantB.nomComplet() + " a gagné!"
    } else if (participantB.ideologie == "Gabrielisme" && participantA.ideologie != "Gabrielisme" && participantA.ideologie != "Républicanisme" ){
      var gagnantDebatPhilo = participantB.nomComplet() + " a gagné!"
    } else {
      gagnantDebatPhilo = "Il n'y a pas de gagnant. Il n'y a que de la confusion, du chaos et de l'étrangeté. " + 
      listeNomPhilosophe[Math.floor(Math.random() * listeNomPhilosophe.length)] + " a été mobilisé dans la discussion." 
    }
    return gagnantDebatPhilo
  }

function verifierFinPartie(){
  station_joueur.richesseTotale();
  station_joueur.payeEtRevenuPourTous();
  station_joueur.rechercheDePrestige();
  tour.augmenter();
  console.log(station_joueur.moralTotal() + " de moral!")
  if (station_joueur.richesseTotale() <= 0 || station_joueur.moralTotal() <= 0 || station_joueur.energie <= 0 || station_joueur.integrite <=0 ) {
    alert("Vous avez perdu! " + station_joueur.dirigeant.titre + " " + station_joueur.dirigeant.nomComplet() + " a guidé la station pendant " + tour.numero + 
    " cycles. Il vous restait " + station_joueur.moralTotal() + " de moral, " + station_joueur.energie + " d'énergie et " + station_joueur.integrite + " d'intégrité.");
    location.reload(); 
  }
  if (station_joueur.capacitePopulation <= station_joueur.population() ) {
    alert("Le moral descend, car une part de la population n'a pas accès à du logement.");
    station_joueur.augmentationMoralAuHasard(1);
  }
  if (station_joueur.ressources <= station_joueur.population() ) {
    alert("Le moral descend, car la station n'a pas assez de ressource pour satisfaire la population.");
    station_joueur.ressources--;
    station_joueur.augmentationMoralAuHasard(1);
  }
  if (station_joueur.moralTotal() <= 5 ) {
    alert("Le moral de la station est assez bas.");
  }
  if (station_joueur.regime == "Lottocratie" && (tour.numero == 2 || tour.numero == 5 || tour.numero == 10)){
    alert("Il y a un nouveau tirage au sort pour le gouvernement de la station.")
    var nouveauDirigeantTirageAuSort = station_joueur.randomNobody[Math.floor(Math.random() * station_joueur.randomNobody.length)]
    station_joueur.changementDirigeantStation(nouveauDirigeantTirageAuSort, station_joueur.dirigeant);
    alert(station_joueur.dirigeant.nomComplet() + " est maintenant à la tête de la station.");
  }
  if (station_joueur.regime == "République" && (tour.numero == 2 || tour.numero == 5 || tour.numero == 10)){
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
      var listOfRulesOfAcquisiton = ["Rules of Acquisition #57 : Good customers are as rare as latinum. Treasure them. " , 
          "Rules of Acquisition #98 :	Every man has his price. ",
          "Rules of Acquisition #125 : You can't make a deal if you're dead. "]
      textDeEvenement2 = "C'est bien enrichissant en Gold Pressed Latinum."
      textEffetsEvenement = listOfRulesOfAcquisiton[[Math.floor(Math.random() * listOfRulesOfAcquisiton.length)]]
      station_joueur.enrichissementAuHasard(1);
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
      station_joueur.augmentationMoralAuHasard(1);
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


