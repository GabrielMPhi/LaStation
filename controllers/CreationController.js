import { Station } from '../model/Station.js'; 
import { station_joueur } from '../jeu.js';

export function add_creation_controller(){

}


export function set_creation_screen(liste){
    generer_listeHTML_gouvernements(liste);
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