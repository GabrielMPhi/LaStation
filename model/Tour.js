export class Tour {
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