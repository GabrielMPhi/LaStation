export class Evenement {
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