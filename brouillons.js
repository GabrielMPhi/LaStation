
class Firm {
  
    constructor(nom){
      this._nom = "East Sector Company";
    }
  
  }
  
  class Ressource {
    
    constructor(nom){
      this._nom = nom;
      this._valeur = 1;
    }
  
  }
  
  
  class Sector {
    constructor(){
      this._nom = nomsDeSecteursListe[Math.floor(Math.random() * nomsDeSecteursListe.length)];
      this._ressources = new Ressource(ressourceSecteurListe[Math.floor(Math.random() * ressourceSecteurListe.length)]);
  
    }
  
    get nom() {
      return this._nom
    }
    set nom(nom){
      this._nom = nom
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
  