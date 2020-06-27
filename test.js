(function (){

  var Cite = {
      nom: "Monreal",
      dirigeant: "",
      richesse: 10,
      moral:10, 
  }

  let tour = 1

  console.log(Cite.nom)
  let nomsDeLaCite = ["Montreal", "Laval", "Candiac"]
  nouveauNom = nomsDeLaCite[Math.floor(Math.random() * nomsDeLaCite.length)];
  Cite.nom = nouveauNom
  console.log(Cite.nom)
  nomsPersonnages = ["Catherine", "Bernard", "Rapunzel", "Sophia", "Martin", "Gabriel", "Mathieu", "Arthur", "Rieke", "Christina", "Christian"]
  let nomChoisit = nomsPersonnages[Math.floor(Math.random() * nomsPersonnages.length)];
  Cite.dirigeant = nomChoisit

  console.log(Cite)

  //garde la description
  const keepDescription = () => {
    document.getElementById('descriptionCitePage').textContent = Cite.nom;
    document.getElementById('consulCite').textContent = nomChoisit;
  }

  document.getElementById('tourinfo').textContent = tour;

  document.querySelector('#formchoix').addEventListener('submit', function (e){
    var choix = document.querySelector('#actionchoix').selectedOptions[0].value
    console.log(choix)
    switch(choix) {
      case "fete":
        alert("C'est la fête et la danse!");
        tour++
        Cite.richesse--
        Cite.moral++
      break;
    case "commerce":
      tour++
      Cite.richesse--
      Cite.moral--
        alert("C'est jour de marché!");
      break;
    default:
        alert("Ok!");
        tour ++
      } 
    console.log(e)
    console.log(tour)
    console.log(Cite.richesse)
    console.log(Cite.moral)
    document.getElementById('tourinfo').textContent = tour
    keepDescription()
    })
  /*
class Partie {

  constructor(){
    this.tour = 1
    this.etat = true
  }

  get tour() {
    return this.tour
  }



  while (this.etat === true) {

  }

}
*/


})() // fin de la window... si je comprends bien.
