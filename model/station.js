class Station {

    constructor(nom, regime){
      this._nom = nom;
      this._regime = this.creerGouvernement(regime);
      this._dirigeant = new Personnage();
      this._capacitePopulation = parseInt((Math.floor(Math.random() * 10) + 20), 10)
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
      this._historiqueRichesse = [];
  
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
    get historiqueRichesse() {
      return this._historiqueRichesse
    }
    set historiqueRichesse(historiqueRichesse) {
      this._historiqueRichesse = historiqueRichesse
    }
  
    creerGouvernement(regime_choisi){
      switch(regime_choisi){
        
      case "Lottocratie":
        return new Lottocratie();
        break
      case "République":
        return new Republique();
      break;
      case  "Autocratie":
        return new Autocratie();
      break;
      case "Corporation": 
      return new Corporation();
      break;
      case "Monarchie" :
        return new Monarchie();
      break;
      case "Théocratie":  
        return new Theocratie();
      break;
      case "Ploutocratie": 
      return new Ploutocratie();
      break;
      case "Gabrielocratie":
        return new Gabrielocratie();
      break;
      case "Épistocratie": 
        return new Epistocratie();
      break; 
      case "Kakistocratie" :
        return new Kakistocratie();
      break;  
      case "Communisme" :
        return new Communisme();
      break;  
      case "Idiocratie": 
        return new Idiocratie();
      break;
      }
  
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
      let dirigeantArrivantIndex = this.randomNobody.indexOf(dirigeantArrivant)
      this.randomNobody.splice(dirigeantArrivantIndex,1)
      this.dirigeant = dirigeantArrivant
      this.dirigeant.titre = dirigeantPartant.titre
      if(this.dirigeant.corruption > this.regime.corruption){
        this.regime.corruption++;
      }
      dirigeantPartant.titre = ""
    }
  
    population = function (){
      var totalCalculPopulation = this._randomNobody.length
      return totalCalculPopulation
    }
  
    enrichissementAuHasard(nombre){
      for(let i=0; i<nombre; i++){
        let chanceux = Math.floor(Math.random() * this._randomNobody.length);
        this._randomNobody[chanceux].richesse++;    
      }
    }
  
    appauvrissementAuHasard(nombre){
      for(let i=0; i<nombre; i++){
        let malchanceux = Math.floor(Math.random() * this._randomNobody.length);
        this._randomNobody[malchanceux].richesse--;    
      }
    }
  
    enrichissementTotal(creditParHabitant){
      for(let i=0; i< this._randomNobody.length; i++){
        this._randomNobody[i].richesse = this._randomNobody[i].richesse + creditParHabitant;  
      }
    }
  
    appauvrissementTotal(creditParHabitant){
      for(let i=0; i< this._randomNobody.length; i++){
        this._randomNobody[i].richesse = this._randomNobody[i].richesse - creditParHabitant;    
      }
    }
  
    payeEtRevenuPourTous(){
      for(let i=0; i< this._randomNobody.length; i++){
        var salaire = 0
        switch (this._randomNobody[i].occupation){
          case "Making ze mony": 
          salaire = 4;
            break;
        case "Philosophie": 
          salaire = 3
          break;
        case "Médecine":
          salaire = 2
          break;
        case "Histoire":
          salaire = -1
          break;
        default: 
        salaire = 1;
        break;
      }
  
      //à l'avenir, ici un autre switch au cas ou y'a une propriété qui donne du revenu et ce tout s'ajoute à salaire ou à la somme en bas
      this._dirigeant.richesse = this._dirigeant.richesse + 5 + this._dirigeant.corruption;
      this.appauvrissementAuHasard(this._dirigeant.corruption)
      this._randomNobody[i].richesse = this._randomNobody[i].richesse + this._randomNobody[i].prestige + salaire;  
    }
    }
  
    rechercheDePrestige(){
      for(let i=0; i< this._randomNobody.length; i++){
          if (this._randomNobody[i].richesse >= parseInt((this.richesseTotale()/this._randomNobody.length),10)){
            this._randomNobody[i].richesse = parseInt((this._randomNobody[i].richesse / 2),10)
            this._randomNobody[i].prestige++
            this._randomNobody[i].moral++
            console.log(this._randomNobody[i].nomComplet() + " dépense ses richesses pour devenir prestigieux.")
          }
          if (this._randomNobody[i].richesse == 0 && this._randomNobody[i].prestige > 0){
            var utilisationDuPrestige = Math.floor(Math.random() * 100);
            this._randomNobody[i].prestige--
            this._randomNobody[i].richesse = this._randomNobody[i].richesse + utilisationDuPrestige
            console.log(this._randomNobody[i].nomComplet() + " perd 1 de prestige et gagne : " + utilisationDuPrestige + " crédits")
          }
    }}
  
    augmentationMoralAuHasard(nombre){
      for(let i=0; i<nombre; i++){
        let chanceux = Math.floor(Math.random() * this._randomNobody.length);
        this._randomNobody[chanceux].moral++;    
      }
    }
  
    diminutionMoralAuHasard(nombre){
      for(let i=0; i<nombre; i++){
        let malchanceux = Math.floor(Math.random() * this._randomNobody.length);
        this._randomNobody[malchanceux].moral--;    
      }
    }
  
  
    augmentationMoralTotal(moralParHabitant){
      for(let i=0; i< this._randomNobody.length; i++){
        this._randomNobody[i].moral = this._randomNobody[i].moral + moralParHabitant;  
      }
    }
  
    diminutionMoralTotal(moralParHabitant){
      for(let i=0; i< this._randomNobody.length; i++){
        this._randomNobody[i].moral = this._randomNobody[i].moral - moralParHabitant;    
      }
    }
  
    effetDuMoralFinDuTour(){
      for(let i=0; i< this._randomNobody.length; i++){
          if (this._randomNobody[i].moral <= 0){
            if (this._randomNobody[i].richesse > 10){
              this._randomNobody[i].richesse = parseInt((this._randomNobody[i].richesse / 2),10)
              this._randomNobody[i].moral++
              console.log(this._randomNobody[i].nomComplet() + " perd de l'argent pour regagner du moral")
            } else if(this._randomNobody[i].prestige >= 1) {
              this._randomNobody[i].prestige--
              this._randomNobody[i].moral++
              console.log(this._randomNobody[i].nomComplet() + " perd du prestige pour regagner du moral")
            } else {
              console.log(this._randomNobody[i].nomComplet() + " devrait partir de la Station")
              let indexPersonneQuiPart = station_joueur.randomNobody.indexOf(station_joueur.randomNobody[i]); 
              this._randomNobody.splice(indexPersonneQuiPart, 1);
            }
          }
    }}
  
    moralTotal(){
      var calculTotalMoral = 0
      for (var i = 0; i < this._randomNobody.length; i++){
        calculTotalMoral = calculTotalMoral + this.randomNobody[i].moral
      };
      calculTotalMoral = calculTotalMoral + this._dirigeant.moral 
      calculTotalMoral = (calculTotalMoral /this._randomNobody.length)
      return parseInt(calculTotalMoral,10);
      }
  
    richesseTotale(){
    var calculTotalRichesse = 0
    for (var i = 0; i < this.randomNobody.length; i++){
      calculTotalRichesse = calculTotalRichesse + this.randomNobody[i].richesse
    };
    calculTotalRichesse = calculTotalRichesse + this._dirigeant.richesse 
    return calculTotalRichesse;
    }
  
    verifierRichesse(){
      for(let i=0; i< this._randomNobody.length; i++){
        if (this._randomNobody[i].richesse <= 0){
          this._randomNobody[i].richesse = 1
          this._randomNobody[i].moral--
          console.log(this._randomNobody[i].nomComplet() + " perd de du moral, car il n'a plus d'argent")
        }
      }
    }
  
      personnageCorruption(personnageCorrupteur){
      if (personnageCorrupteur.richesse >= 100){
        personnageCorrupteur.richesse = personnageCorrupteur.richesse - 75
        this._dirigeant.richesse = this._dirigeant.richesse + 50
        this._dirigeant.corruption++
        personnageCorrupteur.corruption++
        personnageCorrupteur.prestige++
      }
    }
  
    mise_a_jour_historique_richesse_station (){
      this.historiqueRichesse.push(this.richesseTotale())
      console.log(this.historiqueRichesse)
    }

    afficherChangementRichesseStation (){
      let premierSpam = "";
      let chamgementRichesseStation = parseInt((this.richesseTotale() - this.historiqueRichesse[(tour.numero-2)]), 10)
      if (chamgementRichesseStation == null || chamgementRichesseStation == undefined || isNaN(chamgementRichesseStation)){
        return "Trop loin dans le passé! "
      }
      if (chamgementRichesseStation == 0){
        premierSpam = "<span class='has-text-warning'>"
      } else if (chamgementRichesseStation > 0){
        premierSpam = "<span class='has-text-success'>"
      } else {
        premierSpam = "<span class='has-text-danger'>"
      } 
      let changementRichesseAAfficher = "( " + premierSpam + chamgementRichesseStation + "</span>" + ")"
      return changementRichesseAAfficher
    }




    verifierFinPartie(){
      if (tour.numero == 100){
        let annonceFinDePartie = new Evenement ();
        annonceFinDePartie._textOfEvent = "Fin de la partie. Vous avez gagné!"
        annonceFinDePartie._textEffetsEvenement = "Redémarage de la station!"
        evenements_a_annoncer.push(annonceFinDePartie);
      }
      if (this.richesseTotale() <= 0 || this.moralTotal() <= 0 || this._energie <= 0 || this._integrite <=0 ) {
        alert("Vous avez perdu! " + this._dirigeant.titre + " " + this._dirigeant.nomComplet() + " a guidé la station pendant " + tour.numero + 
        " cycles. Il vous restait " + this.moralTotal() + " de moral, " + this._energie + " d'énergie et " + this._integrite + " d'intégrité.");
      }
      if (this._capacitePopulation <= this.population() ) {
        let annonceCapacitePopulationAtteint = new Evenement ();
        annonceCapacitePopulationAtteint._textOfEvent = "Le moral descend, car une part de la population n'a pas accès à du logement.";
        annonceCapacitePopulationAtteint._textEffetsEvenement = "Diminution de morale à une personne au hasard."
        this.augmentationMoralAuHasard(1);
        evenements_a_annoncer.push(annonceCapacitePopulationAtteint);
      }
      if (this._ressources <= this.population() ) {
        let annonceRessourceInsuffisante = new Evenement();
        annonceRessourceInsuffisante._textOfEvent = "Le moral descend, car la station n'a pas assez de ressource pour satisfaire la population.";
        annonceRessourceInsuffisante._textEffetsEvenement = "Diminution des ressources et diminution du moral."

        evenements_a_annoncer.push(annonceRessourceInsuffisante);
        this._ressources--;
        this.augmentationMoralAuHasard(1);
      }
      if (this.moralTotal() <= 1 ) {
        let annonceMoralBas = new Evenement();
        annonceMoralBas._textOfEvent = "Le moral de la station est assez bas.";
        annonceMoralBas._textEffetsEvenement = "Le moral de la station est assez bas."
        evenements_a_annoncer.push(annonceMoralBas);
      }
      if (this._regime == "République" && momentElection == 0){
      var candidatGagnantElection = this.electionNormale()

        let annonceRepubliqueElection = new Evenement();
        annonceRepubliqueElection._textOfEvent = "Il y a une élection. "
        annonceRepubliqueElection._textEffetsEvenement = candidatGagnantElection.nomComplet() + " a gagné."
        evenements_a_annoncer.push(annonceRepubliqueElection);
      this.changementDirigeantStation(candidatGagnantElection, this._dirigeant);
      }
      if (this._chaos > this._ordre){
        let listeCorruptionChaosMoinsOrdre = []
        let personnageCorrupteur
        for (var i = 0; i < this._randomNobody.length; i++){
          if (this._randomNobody[i].richesse >= 100){
            listeCorruptionChaosMoinsOrdre.push(this._randomNobody[i])
          }
        }
        if (listeCorruptionChaosMoinsOrdre == undefined || listeCorruptionChaosMoinsOrdre.length == 0){
        } else {
        console.log(listeCorruptionChaosMoinsOrdre)
        console.log("Corruption à cause du chaos")
        personnageCorrupteur = listeCorruptionChaosMoinsOrdre[Math.floor(Math.random() * listeCorruptionChaosMoinsOrdre.length)]
        this.personnageCorruption(personnageCorrupteur)
      }
      }
        if ((this._dirigeant.leadership - this._dirigeant.corruption) < (this._chaos - this._ordre)){
          this._chaos++
        } else {
          this._energie++
        }
  
  
    }
  
  }