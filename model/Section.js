let listeTypesSectionsStation = ["Arboretum", "Bibliothèque"]

export class Section{

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