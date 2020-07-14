import { Personnage } from './Personnage.js';
import { Section } from './Section.js';

export var liste_type_gouv = ["Lottocratie", "République", "Corporation", "Autocratie", "Monarchie", "Théocratie", "Ploutocratie", "Gabrielocratie", "Épistocratie", "Kakistocratie", "Communisme", "Idiocratie"];
export let nomsDeLastation = ["Montréal", "Laval", "Candiac", "Paris", "Montpellier", "DS9", "DS7", "Terre", "Ahuntsic", "Villeray", "Saturne", "Jupiter", "Lune", "Europe", "Le lointain"]
let nomsDeSecteursListe = [""]
let ressourcesTypeList = ["Gold Pressed Latinum", "Livres de philo", "Deuterium", "Awesomeness"]
let listOfLawInPlace = [""]


export class Station {

    constructor(nom, regime){
      this._nom = nom;
      this._regime = regime;
      this._dirigeant = new Personnage();
      this._capacitePopulation = parseInt((Math.floor(Math.random() * 5) + 20), 10)
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
  
    enrichissement(nombre){
      for(let i=0; i<nombre; i++){
        let chanceux = Math.floor(Math.random() * this._randomNobody.length);
        this._randomNobody[chanceux].richesse++;    
      }
    }
  
    appauvrissement(nombre){
      for(let i=0; i<nombre; i++){
        let malchanceux = Math.floor(Math.random() * this._randomNobody.length);
        this._randomNobody[malchanceux].richesse--;    
      }
    }
  
    richesseTotale(){
    console.log(this.randomNobody[1].richesse)
    var calculTotalRichesse = 1
    for (var i = 0; i < this.randomNobody.length; i++){
      calculTotalRichesse = calculTotalRichesse + this.randomNobody[i].richesse
    };
    return calculTotalRichesse;
    }
  }
  

   // FUNCTION vérification si un personnage existe
  
   import { station_joueur } from '../jeu.js';
   
   export function verificationExistencePersonnage(nomComplet){
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