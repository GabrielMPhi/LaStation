import { ouvrir_modal_information, fermer_modal } from '../utilitaires/gestion_ecrans.js';
import { tour, station_joueur } from '../jeu.js';
import { partir_en_mission } from '../model/Mission.js';
import { removeAllChildNodes } from '../utilitaires/gestion_elements.js';

export function add_station_controller(){

//modal
//fermer le modal
    document.getElementById("modal_background").onclick = function(){
        fermer_modal();
    }

    document.getElementById("btn_modal_close").onclick = function() {
        fermer_modal();
    }


    // BOUTONS INFO

document.getElementById("btnInfoRegime").addEventListener('click', function (e){ 
 
    var textInfo = ""
    switch (station_joueur.regime) {
     case "République": 
      textInfo = "Le républicanisme est un régime politique."
      break;
    case "Lottocratie":
      textInfo = "La lottocratie est un régime polique où le dirigeant est sélectionné au hasard."
      break;
    default: 
      textInfo = "Texte d'information à venir."
     }
  
    document.getElementById('textOfInfo').innerHTML = textInfo
    ouvrir_modal_information();
  });
  
  
    document.getElementById("btnInfoDirigeant").addEventListener('click', function (e){
    
      var textInfo = station_joueur.dirigeant.titre + " " + station_joueur.dirigeant.nomComplet() + " est la personne qui dirige la station."+ 
      "<br>" + "Son idéologie : " + station_joueur.dirigeant.ideologie +
      "<br>" + "Sa taille : " + station_joueur.dirigeant.height + " cm." +
      "<br>" + "Son genre : " + station_joueur.dirigeant.genre +
      "<br>" + "Son origine : " + station_joueur.dirigeant.origine
      document.getElementById('textOfInfo').innerHTML = textInfo
      ouvrir_modal_information();
    });
  
    document.getElementById("btnInfoTour").addEventListener('click', function (e){
     
      var textInfo = "De la perspective d'une intelligence artificelle, le temps passe à la fois rapidement et lentement. Elle peut réagir très rapidement comme considérer les choses dans le temps long." + 
      " " + "À ce titre, l'unité de temps centrale est l'année, le cycle."
      document.getElementById('textOfInfo').textContent = textInfo
      ouvrir_modal_information();
    });
  
    document.getElementById("btnInfoPopulationListNobody").addEventListener('click', function (e){
    
      var textInfo = ""
      console.log(textInfo)
      removeAllChildNodes(document.getElementById('liste_population'));
      for (var i = 0; i < station_joueur.randomNobody.length; i++){
        let new_row = document.createElement("tr");
        new_row.id = "personnage"+i;
        let first_cell = document.createElement("td");
        first_cell.innerHTML = textInfo.concat("<b>", station_joueur.randomNobody[i].titre, " ", station_joueur.randomNobody[i].nomComplet(), "</b> est un random nobody de la station.", 
        "<br>", "Son titre : ", station_joueur.randomNobody[i].titre,
        "<br>", "Son idéologie : ", station_joueur.randomNobody[i].ideologie,
        "<br>", station_joueur.randomNobody[i].height + "cm.",
        "<br>", "Son genre : ", station_joueur.randomNobody[i].genre,
        "<br>", "Son charisme : ", station_joueur.randomNobody[i].charisme,
        "<br>", "Sa capacité de combat : ", station_joueur.randomNobody[i].capaciteCombat,
        "<br>", "Sa richesse : ", station_joueur.randomNobody[i].richesse, " crédits",
        "<br>", "Son origine : ", station_joueur.randomNobody[i].origine, "<br><br>");
        new_row.appendChild(first_cell); 
        let second_cell = document.createElement("td");
        second_cell.id = "second_cell_no"+i; 
        
        if(station_joueur.randomNobody[i].ideologie == "Chaotisme"){
          let aventurier = station_joueur.randomNobody[i];
          let button = document.createElement("input"); 
          button.id = "btnMission_no"+i;
          button.type = "button"; 
          button.class= "button is-small is-warning";
          button.value= "partir en mission";
          button.addEventListener("click", () => {
            partir_en_mission(aventurier, second_cell.id, button.id); 
          }); 
          second_cell.appendChild(button); 
        //  second_cell.innerHTML = "<input type='button' class='button is-small is-danger' value='partir en mission' onclick='partir_en_mission("+aventurier+")'><br>";
        }
        new_row.appendChild(second_cell);
        document.getElementById("liste_population").appendChild(new_row);
        ouvrir_modal_information();
      }
    });



}



/*Écran de description de la station*/
export function afficherDescription() {
    document.getElementById('tourProgressBar').valeur = tour.numero
    document.getElementById('ecranDescriptionStationTitrePrincipal').textContent = "Description de la station " + station_joueur.nom 
    document.getElementById('tourInfo').textContent = tour.numero;
    document.getElementById('nomStationPage').textContent = station_joueur.nom;
    document.getElementById('dirigeantStationTitre').textContent = station_joueur.dirigeant.titre;
    document.getElementById('consulStation').textContent = station_joueur.dirigeant.nomComplet();
    document.getElementById('consulStation2').textContent = station_joueur.dirigeant.nomComplet();
    document.getElementById('richesseStationInfo').textContent = station_joueur.richesseTotale();
    document.getElementById('typeGouvernementStationPage').textContent = station_joueur.regime;
    document.getElementById('moralStationInfo').textContent = station_joueur.moral;
    document.getElementById('ordreStationInfo').textContent = station_joueur.ordre;
    document.getElementById('chaosStationInfo').textContent = station_joueur.chaos;
    document.getElementById('liberteStationInfo').textContent = station_joueur.liberte;
    document.getElementById('securiteStationInfo').textContent = station_joueur.liberte;
    document.getElementById('energieStationInfo').textContent = station_joueur.energie;
    document.getElementById('connaissanceDataBaseInfo').textContent = station_joueur.connaissance;
    document.getElementById('ressourcesStationInfo').textContent = station_joueur.ressources;
    document.getElementById('populationStationInfo').textContent = station_joueur.population();
    document.getElementById('integriteStationInfo').textContent = station_joueur.integrite;
    document.getElementById('cybersecuriteStationInfo').textContent = station_joueur.cybersecurite;
    document.getElementById('capacitePopulationStationInfo').textContent = station_joueur.capacitePopulation;
  }