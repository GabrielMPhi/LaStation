/*Écran de création de la station*/

document.getElementById("btn_creation_station").addEventListener('click', function (e){
    var nom_station = document.getElementById("txt_nom_station").value
    var regime_choisi = document.getElementById("select_type_gouv").value
    if (nom_station == ""){
      nom_station = "DS7"
    }
    station_joueur = new Station(nom_station, regime_choisi)
    console.log("on a créé une station! = "+station_joueur);
    station_joueur.dirigeant.gagneUnTitre();
    var startingNumberOfNobody = (Math.floor(Math.random() * 7)) + 7;
    for (var i = 0; i < startingNumberOfNobody; i++){
      station_joueur.randomNobody.push(new Personnage())
      };
    station_joueur.richesseTotale();
    console.log(station_joueur)
    charger_description_station("ecran_creation_station");
  });
  

  