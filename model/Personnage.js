
import { Station, nomsDeLastation } from './Station.js';

var prenomsPersonnagesHomme = ["Bernard", "Martin", "Gabriel", "Mathieu", "Arthur", "Thomas", "Christian", "Simon", "Geralt", "Alexandre", "Étienne", "François"]
var prenomsPersonnagesFemme = ["Catherine", "Florence", "Sophia", "Morgane", "Rieke", "Julia", "Linda", "Christina", "Anne-Sophie", "Anne-Marie", "Marie-Pier", "Marie", "Anne", "Anna", "Rapunzel", "Éloise"]
var prenomsPersonnagesTotal = [].concat(prenomsPersonnagesHomme, prenomsPersonnagesFemme);
var momsFamillePersonnages = ["Monette", "Ducharme", "Carel", "Dax", "Rideout", "Delorme", "Picard", "Sisko", "Janeway", "Pratte", "Séguin", "Gagné", "Turpin", "Bouras", "De Rivia", "Côté", "Gingras"]
export var listIdeology = ["Républicanisme", "Anarchisme", "Autoritarisme", "Ludisme", "Gabrielisme", "Scientisme", "Féminisme", "Turpinisme", "Chaotisme", "Monarchisme", "Bernardisme", "Socialisme", "Libéralisme", "Capitalisme", "Conspirationisme", "Rawlsisme", "Anarco-capitalisme", "Lavalisme", "Municipalisme", "Vedge", "Apathie"]
var listeGenre = ["Homme", "Femme", "Fluide", "Homme", "Femme", "Homme", "Femme", "Non-binaire"]
var listeTitresDirigeant = ["Capitaine", "Commandant", "Consul", "Guide", "Président", "Général", "Professeur", "Dude", "Tsé, lui-là", "Philosophe", "Politicien", "Délégué", "Vendu", "Maître", "WTF?"]

export class Personnage {

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
      this._charisme = parseInt((Math.floor(Math.random() * 10) + 5), 10)
      this._capaciteCombat = parseInt((Math.floor(Math.random() * 10) + 5), 10)
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
  
  export function choiceIdeology (){
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
  
 
  
  
  