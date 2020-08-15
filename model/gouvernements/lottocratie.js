class Lottocratie extends Gouvernement {

        constructor(){
            super("Lottocratie"); 
        }
    
    
    
    changementTour(numero){
        let momentElection = numero % super.intervalElection

        if(momentElection == 0){
            this.choisirDirigeant();
        }
    }


    choisirDirigeant(){
        
        let annonceDirigeantTirageAuSort = new Evenement();
        
        
        let nouveauDirigeantTirageAuSort = station_joueur.randomNobody[Math.floor(Math.random() * station_joueur.randomNobody.length)];
        while(!this.dirigeantAccepte(nouveauDirigeantTirageAuSort)){
            nouveauDirigeantTirageAuSort = station_joueur.randomNobody[Math.floor(Math.random() * station_joueur.randomNobody.length)];
        }

        station_joueur.changementDirigeantStation(nouveauDirigeantTirageAuSort, station_joueur.dirigeant);
        annonceDirigeantTirageAuSort._textOfEvent = "Il y a un nouveau tirage au sort pour le gouvernement de la station.";
        annonceDirigeantTirageAuSort._textEffetsEvenement = station_joueur.dirigeant.nomComplet() + " est maintenant à la tête de la station."
        evenements_a_annoncer.push(annonceDirigeantTirageAuSort);

    }
    
    dirigeantAccepte(nouveauDirigeantTirageAuSort){
        if(nouveauDirigeantTirageAuSort == null || nouveauDirigeantTirageAuSort == undefined){
            console.log("dirigeant indéfini"); 
            return false;
        } 
         if (super.corruption < 10){
            console.log("la station n'est pas corrompue"); 
            return true;
        } 
        if(nouveauDirigeantTirageAuSort.richesse >= parseInt((station_joueur.richesseTotale()/station_joueur._randomNobody.length),10)) {
            console.log("la station est corrompue et le dirigeant est riche");
            return true;
        } else {
            console.log("la station est corrompue et le dirigeant est pauvre");
            return false;
        }
    }

}