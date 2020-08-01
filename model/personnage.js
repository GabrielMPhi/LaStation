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
      this._leadership = parseInt((Math.floor(Math.random() * 10) + 5), 10)
      this._ideologie = choiceIdeology ();
      this._corruption = 0;
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