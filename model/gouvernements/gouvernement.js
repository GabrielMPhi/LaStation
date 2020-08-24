class Gouvernement {

    constructor(type, corruption = 0){
        console.log("constructeur gouvernement. "+type); 
        this._type = type;
        this._corruption = corruption;
        this._intervalElection = 5
        tour.observateurs.push(this);  
    }

    get type (){
        return this._type;
    }

    set type(val){
        this._type = val;
    }

    get corruption(){
        return this._corruption;
    }

    set corruption(val){
        this._corruption = val;
    }

    get intervalElection(){
        return this._intervalElection;
    }

    set intervalElection(val){
        this._intervalElection = val;
    }

    get momentElection(){
        return this._momentElection;
    }

    set momentElection(val){
        this._momentElection = val;
    }

    changementTour(numero){

    }

    choisirDirigeant(){
        
    }

    
}
