/* GESTION DES ÉCRANS */
export function changeScreen(ecranDepart, ecranArrivee){
	document.getElementById(ecranDepart).setAttribute('hidden', 'hidden');
	document.getElementById(ecranArrivee).removeAttribute('hidden');
}



/*
export function chargerVersInformation(ecran_de_depart){
  changeScreen(ecran_de_depart, "ecranInformationStation");
}
*/


//modal
export function ouvrir_modal_information(){
  var modal = document.getElementById("modal_info");
  modal.classList.add("is-active")
}

export function fermer_modal(){
  document.getElementById('textOfInfo').textContent = "";
  removeAllChildNodes(document.getElementById("liste_population")) ;
  var modal = document.getElementById("modal_info");
  modal.classList.remove("is-active");
}

