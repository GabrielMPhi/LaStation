class Mission {
    constructor(nature, tour_debut, nobody){
      this._nature_de_la_mission = nature;
      this._tour_debut = tour_debut;
      this._duree = Math.floor(Math.random()*3+3);
      this._nobody = nobody;
      this._evenement_retour = new Evenement();
      tour.observateurs.push(this);
    }
  
    changementTour(numero){
     // console.log("la mission observe... tour: "+numero+"; tour_debut: "+this._tour_debut+"; durée: "+this._duree);
      if(numero - this._tour_debut == this._duree){
        this.resoudre_mission();
        this.fait_retour_mission();
      }
    }
  
    fait_retour_mission(){
      evenements_a_annoncer.push(this._evenement_retour); 
    }
    
    resoudre_mission(){
      switch(this._nature_de_la_mission){
        case "mission chaotique": this.resoudre_mission_chaotique();
          break;
        default: break;
      }
    }
  
    resoudre_mission_chaotique(){
        
      switch (Math.floor(Math.random()*10+1)){
        case 1: this.mort_tragique("de soif.");
          break;
        case 2: this.mort_tragique("d'une panne des systèmes de survie.");
          break;
        case 3: this.mort_tragique("d'un accident mécanique.");
          break;
        case 4: this.mort_tragique("en se suicidant après avoir perdu la raison.");
          break;
        case 5: this.mort_tragique("massacré par des extraterrestres.");
          break;
        case 6: this.mission_commerciale();
          break;
        case 7: this.retour_avec_ressources();
          break;
        case 8: this.transformation_philosophique();
          break;
        case 9: this.recits_aventuriers();
          break;
        case 10: this.retour_chaotique();
          break;
          default: break;
      }
      
      
    }
  
    reintegrer_la_station(nobody){
      station_joueur.randomNobody.push(nobody);
      let indexReintegration = station_joueur.nobodiesEnMission.indexOf(nobody); 
      station_joueur.randomNobody.splice(indexReintegration, 1);
    }
    
    transformation_philosophique(){
      this._nobody.ideologie = choiceIdeology();
      this._evenement_retour.textOfEvent = this._nobody.nomComplet() + " est revenu complètement transformé par son expérience lors de sa mission.";
      this._evenement_retour.textEffetsEvenement = "Son idéologie est maintenant "+this.nobody.ideologie;
      this.reintegrer_la_station(this._nobody);
    }
  
  
    mort_tragique(cause_mort){
      this._evenement_retour.textOfEvent = "La navette de "+this._nobody.nomComplet()+" est revenue sur le pilote automatique. Grâce aux enregitrements, on apprend qu'il est mort "+cause_mort;
    }
  
    retour_chaotique(){
      station_joueur.integrite--;
    // Il faudrait faire diminuer le moral de qqn dans la station  station_joueur.moralTotal();
      station_joueur.chaos++;
      //station_joueur.population--;
      this._evenement_retour.textOfEvent =  this._nobody.nomComplet() + "est revenu de mission... accompagné de mercenaire extraterrestres qui sèment le chaos dans la station!"
      this._evenement_retour.textEffetsEvenement = "L'intégrité de la station est affectée et le moral de la population s'en ressent."; 
    }
  
    recits_aventuriers(){
      this._nobody.influenceCulturelle +=3;
      this._nobody.influence++;
      this._nobody.charisme++;
      this._evenement_retour.textOfEvent = this._nobody.nomComplet()+ " est revenu de mission. Il n'a rien rapporté d'utile, mais ses récits d'aventures captivent tout le monde";
      this._evenement_retour.textEffetsEvenement = "Son influence culturelle augmente beaucoup. Son influence et son charisme augmentent aussi."
      this.reintegrer_la_station(this._nobody);
    }
  
    mission_commerciale(){
      station_joueur.enrichissementAuHasard(2);
      this._nobody.richesse++;
      this._nobody.influence +=2;
      this._evenement_retour.textOfEvent = this._nobody.nomComplet()+" est revenu de mission. Il a découvert des extraterrestres prospères et heureux de commercer avec vous."
      this._evenement_retour.textEffetsEvenement = "La richesse de la station augmente grandement. L'influence de "+this._nobody.nomComplet() + " augmente d'autant."
      this.reintegrer_la_station(this._nobody);
    }
  
    retour_avec_ressources(){
      station_joueur.ressources +=2;
      this._nobody.influence +=1;
      this._evenement_retour.textOfEvent =  this._nobody.nomComplet()+" est revenu de mission. Sa navette regorge de minerais rares glanés sur des astéroïdes croisés en chemin."
      this._evenement_retour.textEffetsEvenement = "Les ressources de la station augmentent. L'influence de "+this._nobody.nomComplet()+ "s'accroît un peu.";
      this.reintegrer_la_station(this._nobody);
    }
    get nature_de_la_mission(){
      return this._nature_de_la_mission;
    }
    set nature_de_la_mission(val){
      this._nature_de_la_mission = val;
    }
    get tour_debut(){
      return this._tour_debut;
    }
    set tour_debut(val){
      this._tour_debut = val;
    }
    get duree(){
      return this._duree;
    }
    set duree(val){
      this._duree = val;
    }
    get nobody(){
      return this._nobody;
    }
    set nobody(val){
      this._nobody = val;
    }
  
  }
  

  function partir_en_mission(nobody, cell_id, button_id){
    console.log(button_id + " "+ cell_id)
    document.getElementById(button_id).remove
    nobody.mission = new Mission("mission chaotique", tour.numero, nobody); 
    station_joueur.nobodiesEnMission.push(nobody); 
    let indexPartirEnMission = station_joueur.randomNobody.indexOf(nobody); 
    station_joueur.randomNobody.splice(indexPartirEnMission, 1);
    document.getElementById(cell_id).innerHTML =  nobody.nomComplet() +" est parti en mission sur un coup de tête. Il mourra probablement, ou reviendra avec des ressources et couvert de gloire";
     
  }