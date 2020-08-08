
/* GESTION DES ÉCRANS */
function changeScreen(ecranDepart, ecranArrivee){
	document.getElementById(ecranDepart).setAttribute('hidden', 'hidden');
	document.getElementById(ecranArrivee).removeAttribute('hidden');
}

function charger_description_station(ecran_de_depart){
  afficherDescription();
  changeScreen(ecran_de_depart, "ecran_description_station");
}

function chargerVersEvenement(ecran_de_depart){
  changeScreen(ecran_de_depart, "ecranChoixEtEvenementsStation");
}

function chargerVersInformation(ecran_de_depart){
  changeScreen(ecran_de_depart, "ecranInformationStation");
}

//modal
function ouvrir_modal_information(){
  var modal = document.getElementById("modal_info");
  modal.classList.add("is-active")
}

function ouvrir_modal_choix_evenements(){
  var modal = document.getElementById("modal_tour_evenements");
  modal.classList.add("is-active")
}

//fermer le modal info
document.getElementById("modal_background").onclick = function(){
  fermer_modal();
}

document.getElementById("btn_modal_close").onclick = function() {
  fermer_modal();
}

function fermer_modal(){
  document.getElementById('textOfInfo').textContent = "";
  removeAllChildNodes(document.getElementById("liste_population")) ;
  var modal = document.getElementById("modal_info");
  modal.classList.remove("is-active");
}

//fermer le modal choix evenement
document.getElementById("modal_background_tour_evenement").onclick = function(){
  fermer_modal_choix_evenements();
}

document.getElementById("btnExitModalEvent").onclick = function() {
  fermer_modal_choix_evenements();
}

function fermer_modal_choix_evenements(){
  document.getElementById('textOfChoiceInfluence').textContent = "";
  document.getElementById('textEffectsOfChoiceInfluence').textContent = "";
  document.getElementById('textOfChoice').textContent = "";
  document.getElementById('textEffectsOfChoice1').textContent = "";
  removeAllChildNodes(document.getElementById("body_evenements")) ;
  var modal = document.getElementById("modal_tour_evenements");
  modal.classList.remove("is-active");
}