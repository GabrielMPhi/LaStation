/*FONCTIONS CRÉATION DES PERSONNAGES*/
function choiceGender (){
    var choixGenre = listeGenre[Math.floor(Math.random() * listeGenre.length)]
    return choixGenre
  }
  
  function choiceIdeology (){
    var choiceIdeology = listIdeology[Math.floor(Math.random() * listIdeology.length)]
    return choiceIdeology
  }
  
  function choiceOccupation(){
    var choiceOccupation = listOccupation[Math.floor(Math.random() * listOccupation.length)];
    return choiceOccupation
  }
  
  
  function choisir_prenom_personnage(genre){
    if (genre == "Homme") {
      var prenomPersonnageFinal = prenomsPersonnagesHomme[Math.floor(Math.random() * prenomsPersonnagesHomme.length)]
    } else if (genre == "Femme"){
      var prenomPersonnageFinal = prenomsPersonnagesFemme[Math.floor(Math.random() * prenomsPersonnagesFemme.length)]
    } else {
      var prenomPersonnageFinal = prenomsPersonnagesTotal[Math.floor(Math.random() * prenomsPersonnagesTotal.length)]
    }
    return prenomPersonnageFinal
  }
  
  // FUNCTION vérification si un personnage existe
  
  function verificationExistencePersonnage(nomComplet){
    for (var i = 0; i < station_joueur.randomNobody.length; i++){
      var persoExisteDeja = false
      if (nomComplet.nom == station_joueur.randomNobody[i].nom && nomComplet.prenom == station_joueur.randomNobody[i].prenom){
        persoExisteDeja = true
        break; 
      } else {
        persoExisteDeja = false
      }
  }
  return persoExisteDeja
  }
  
  
  
  /*CRÉATION DE LA PAGE*/
  window.onload = function(){
    tour = new Tour();
    generer_listeHTML_gouvernements(liste_type_gouv);
  }
  
  function generer_listeHTML_gouvernements(liste){
    var liste_html = document.getElementById("select_type_gouv");
    liste.forEach( opt => {
      var option_html = document.createElement("option");
      option_html.innerHTML = opt;
      option_html.value = opt;
      option_html.id = "gouv"+opt;
      liste_html.appendChild(option_html);
    })
  }


  