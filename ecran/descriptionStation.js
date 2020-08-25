
/*Écran de description de la station*/
function afficherDescription() {
    document.getElementById('tourProgressBar').value = tour.numero
    document.getElementById('ecranDescriptionStationTitrePrincipal').textContent = "Description de la station " + station_joueur.nom 
    document.getElementById('tourInfo').textContent = tour.numero;
    document.getElementById('nomStationPage').textContent = station_joueur.nom;
    document.getElementById('dirigeantStationTitre').textContent = station_joueur.dirigeant.titre;
    document.getElementById('consulStation').textContent = station_joueur.dirigeant.nomComplet();
    document.getElementById('consulStation2').textContent = station_joueur.dirigeant.nomComplet();
    document.getElementById('richessePrecedenteStationInfo').textContent = station_joueur.historiqueRichesse[(tour.numero-2)];
    document.getElementById('richesseStationInfo').textContent = station_joueur.richesseTotale();
    document.getElementById('typeGouvernementStationPage').textContent = station_joueur.regime.type;
    document.getElementById('moralStationInfo').textContent = station_joueur.moralTotal();
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

  document.getElementById("btnInfoGraphRichesse").addEventListener('click', function (e){ 
 
    let textOfInfo = "Ok, il n'y a rien ici encore, mais je veux trouver un moyen de faire apparaitre un graphique avec l'historique de la richesse via Chart.js"
    
  //  var canvasChartRichesseStation = document.createElement('canvas');
  //  canvasChartRichesseStation.id = "chartRichesseStation"
 //   canvasChartRichesseStation.width = 100
  //  canvasChartRichesseStation.height = 100

  //  let ctx = document.getElementById("chartRichesseStation").getContext('2d');
 //   let chartRichesseStation = new Chart(ctx, ­{
 //       type: 'line',
 //       data: {
  //        labels: ['Richesse de la station'],
  //        datasets: [{
  //            label: '# of Votes',
  //            data: [station_joueur.historiqueRichesse],
  //        }]
  //    },
 //   })
        
   // document.getElementById('textOfInfo').innerHTML = canvasChartRichesseStation

        
    document.getElementById('textOfInfo').innerHTML = textOfInfo
    ouvrir_modal_information();
  });


  document.getElementById("btnInfoDirigeant").addEventListener('click', function (e){
  
    var textInfo = station_joueur.dirigeant.titre + " " + station_joueur.dirigeant.nomComplet() + " est la personne qui dirige la station."+ 
    "<br>" + "Son idéologie : " + station_joueur.dirigeant.ideologie +
    "<br>" + "Sa richesse : " + station_joueur.dirigeant.richesse + " crédits." +
    "<br>" + "Sa corruption : " + station_joueur.dirigeant.corruption +
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
    remove_all_children(document.getElementById('liste_population'));
    for (var i = 0; i < station_joueur.randomNobody.length; i++){
      let new_row = document.createElement("tr");
      new_row.id = "personnage"+i;
      let first_cell = document.createElement("td");
      first_cell.innerHTML = textInfo.concat("<b>", station_joueur.randomNobody[i].titre, " ", station_joueur.randomNobody[i].nomComplet(), "</b> est un random nobody de la station.", 
      "<br>", "Son titre : ", station_joueur.randomNobody[i].titre,
      "<br>", "Son occupation : ", station_joueur.randomNobody[i].occupation,
      "<br>", "Son idéologie : ", station_joueur.randomNobody[i].ideologie,
      "<br>", station_joueur.randomNobody[i].height + "cm.",
      "<br>", "Son genre : ", station_joueur.randomNobody[i].genre,
      "<br>", "Son charisme : ", station_joueur.randomNobody[i].charisme,
      "<br>", "Son leadership : ", station_joueur.randomNobody[i].leadership,
      "<br>", "Son prestige : ", station_joueur.randomNobody[i].prestige,
      "<br>", "Son moral : ", station_joueur.randomNobody[i].moral,
      "<br>", "Sa capacité de combat : ", station_joueur.randomNobody[i].capaciteCombat,
      "<br>", "Sa richesse : ", station_joueur.randomNobody[i].richesse, " crédits",
      "<br>", "Sa corruption : ", station_joueur.randomNobody[i].corruption,
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
          partir_en_mission_chaotique(aventurier, second_cell.id, button.id); 
        }); 
        second_cell.appendChild(button); 
      //  second_cell.innerHTML = "<input type='button' class='button is-small is-danger' value='partir en mission' onclick='partir_en_mission_chaotique("+aventurier+")'><br>";
      }
      new_row.appendChild(second_cell);
      document.getElementById("liste_population").appendChild(new_row);
      ouvrir_modal_information();
    }
  });

  
document.querySelector('#btnActionChoix').addEventListener('click', function (e){
    console.log("click btnActionChoix"); 
    var choix = document.querySelector('#actionChoix').selectedOptions[0].value
    var choixInfluence = document.querySelector('#actionChoixInfluence').selectedOptions[0].value
    console.log(choix)
    
    /// choix influence
    console.log(choixInfluence)
      switch(choixInfluence) {
        case "organiserDebatPhilo":
          var debateurPhiloA = station_joueur.randomNobody[Math.floor(Math.random() * station_joueur.randomNobody.length)]
          var debateurPhiloB = station_joueur.dirigeant
          textOfChoiceInfluence = "Il y a un débat philosophique entre " + debateurPhiloA.nomComplet() + " et " + debateurPhiloB.titre + " " + debateurPhiloB.nomComplet() + "!"
          textEffectsOfChoiceInfluence = debatPhilo(debateurPhiloA, debateurPhiloB)
          station_joueur.augmentationMoralAuHasard(1);
          station_joueur.chaos++;
        break;      
        case "favoriserPeuple":
          textOfChoiceInfluence = "Vous venez de favoriser le peuple."
          textEffectsOfChoiceInfluence = "Le peuple s'en fout un peu! Mais la richesse et le moral augmente de 1 tandis que vous dépensez 1 d'énergie.";
          station_joueur.enrichissementAuHasard(1);
          station_joueur.augmentationMoralAuHasard(1);
          station_joueur.energie--;
        break;
        case "exileHabitant":
          textOfChoiceInfluence = "Expulsion d'un habitant pour de faux prétextes."
          textEffectsOfChoiceInfluence = station_joueur.dirigeant.nomComplet() + " exile un habitant et confisque sa propriété!"
          station_joueur.dirigeant.richesse++;
          station_joueur.diminutionMoralAuHasard(1);
          station_joueur.energie++;
        break;
        case "festivalPhiloPolitique":
          textOfChoiceInfluence = "Sur l'ensemble des ordinateurs et des réseaux sociaux s'organise un immense festival de la philosophie politique."
          textEffectsOfChoiceInfluence = "Une grande fête en faveur de la pensée politique et éthique! Un très bon moyen de gagner le jeu."
          station_joueur.richesse++;
          station_joueur.augmentationMoralAuHasard(1);
          station_joueur.energie++;
          station_joueur.influenceCulturelle++;
          station_joueur.connaissance++;
        break;
        case "fete":
          textOfChoiceInfluence = "Vous organisez une fête."  
          textEffectsOfChoiceInfluence = "C'est la fête et la danse!";
          station_joueur.appauvrissementAuHasard(50);
          station_joueur.moral = parseInt(station_joueur.moral + (Math.floor(Math.random() * 4) - 1), 10)
          station_joueur.energie--
        break;
      case "commerce":
        textOfChoiceInfluence = "C'est jour de marché sur " + station_joueur.nom  
        textEffectsOfChoiceInfluence = "La station s'enrichit un peu."
        station_joueur.ressources = station_joueur.ressources + 5
        station_joueur.enrichissementAuHasard(100);
        station_joueur.appauvrissementAuHasard(100);
        station_joueur.diminutionMoralAuHasard(1);
        break;
        case "mission_commerciale":
          textOfChoiceInfluence = "Une mission commerciale quitte " + station_joueur.nom + "."  
         textEffectsOfChoiceInfluence = "Nous verrons les résultats au retour."
          nobody_en_mission = station_joueur.randomNobody[Math.floor(Math.random() * station_joueur.randomNobody.length)]
          creerMission(nobody_en_mission, "mission commerciale");
        break;
      case "confinement":
        station_joueur.chaos--
        station_joueur.ordre++
        station_joueur.liberte--
        break;
  
        }
  
  /// Choix énergie  
    switch(choix) {
    case "calculs":
      station_joueur.energie--
      textOfChoice = "Les ordinateurs de " + station_joueur.nom + " s'occupent à faire des calculs importants et insipides." 
      textEffectsOfChoice1 = "La station développe de nouvelles connaissances."
      break;
    case "ameliorerIntegrite":
      station_joueur.integrite++
      station_joueur.energie = station_joueur.energie - 3
      station_joueur.ressources--
      textOfChoice = "Vos systèmes se mobilisent pour améliorer la structure de la station et la population, incluant " + station_joueur.randomNobody[0].nomComplet() + ", se déploient construire de nouvelles instalations.";
      textEffectsOfChoice1 = "L'intégrité de la station s'améliore."
      break;
    case "pause":
      textOfChoice = "Une pause bien méritée pour recharger les batteries et faire les mises-à-jour.";
      textEffectsOfChoice1 = "La station emmagazine de l'énergie."
      station_joueur.energie = station_joueur.energie + 50;
      console.log("UNE PETITE PAUSE, donc 2 tour passent")
      finDuTour();
      
      break;
      } 
  
  
      finDuTour();
    })
  