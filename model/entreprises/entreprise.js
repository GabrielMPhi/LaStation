class Entreprise {

    constructor(industrie = "Banque", corruption = 0){
        this._nom = "The company"
        this._industrie = industrie;
        this._corruption = corruption;
        this._CEO = []
        this._employes = []
        this._salaire = []
        this._richesse = []

        tour.observateurs.push(this);  
    }

    get nom (){
        return this._nom;
    }

    set nom(val){
        this._nom = val;
    }

    get industrie (){
        return this._industrie;
    }

    set industrie(val){
        this._industrie = val;
    }

    get corruption(){
        return this._corruption;
    }

    set corruption(val){
        this._corruption = val;
    }

    get ceo(){
        return this._ceo;
    }

    set ceo(val){
        this._ceo = val;
    }

    get employes(){
        return this._employes;
    }

    set employes(val){
        this._employes = val;
    }

    get salaire(){
        return this._salaire;
    }

    set salaire(val){
        this._salaire = val;
    }

    get richesse(){
        return this._richesse;
    }

    set richesse(val){
        this._richesse = val;
    }

    changementTour(numero){

    }

    choisirDirigeant(){
        
    }
    
}
