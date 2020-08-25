class Personnage {

    constructor(
      genre = choiceGender (),
      prenom = choisir_prenom_personnage(genre),
      nom = momsFamillePersonnages[Math.floor(Math.random() * momsFamillePersonnages.length)],
      titre = "",
      moral = parseInt((Math.floor(Math.random() * 10) + 5), 10),
      richesse = parseInt((Math.floor(Math.random() * 100) + 40), 10),
      influence = parseInt((Math.floor(Math.random() * 10) + 5), 10),
      prestige = 0,
      charisme = parseInt((Math.floor(Math.random() * 10) + 5), 10),
      capaciteCombat = parseInt((Math.floor(Math.random() * 10) + 5), 10),
      connaissance = parseInt((Math.floor(Math.random() * 10) + 5), 10),
      leadership = parseInt((Math.floor(Math.random() * 10) + 5), 10),
      ideologie = choiceIdeology (),
      corruption = 0,
      occupation = choiceOccupation(),
      height = parseInt((Math.floor(Math.random() * 70) + 145), 10),
      age = parseInt((Math.floor(Math.random() * 20) + 18), 10),
      origine = nomsDeLastation[Math.floor(Math.random() * nomsDeLastation.length)],

    ){
     // var genre = choiceGender ();
    //  var prenom = choisir_prenom_personnage(genre);
     // var nom = momsFamillePersonnages[Math.floor(Math.random() * momsFamillePersonnages.length)]
      
      this._genre = genre;
      this._prenom = prenom;
      this._nom = nom;
      this._titre = titre;
      this._moral = moral;
      this._richesse = richesse;
      this._influence = influence;
      this._prestige = prestige;
      this._charisme = charisme;
      this._capaciteCombat = capaciteCombat;
      this._connaissance = connaissance;
      this._leadership = leadership;
      this._ideologie = ideologie;
      this._corruption = corruption;
      this._occupation = occupation;
      this._height = height;
      this._age = age;
      this._origine = origine;
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
    get leadership() {
      return this._leadership
    }
    set leadership(leadership){
      this._leadership = leadership
    }
    get ideologie() {
      return this._ideologie
    }
    set ideologie(ideologie){
      this._ideologie = ideologie
    }
    get corruption() {
      return this._corruption
    }
    set corruption(corruption){
      this._corruption = corruption
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

