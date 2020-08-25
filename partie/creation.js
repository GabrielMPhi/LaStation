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


  