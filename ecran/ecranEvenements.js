

// ACTIONS ET ÉVÉNEMENTS

function afficherChoixEtEvenements() {
    document.getElementById('textOfChoiceInfluence').textContent = textOfChoiceInfluence;
    document.getElementById('textEffectsOfChoiceInfluence').textContent = textEffectsOfChoiceInfluence;
    document.getElementById('textOfChoice').textContent = textOfChoice;
    document.getElementById('textEffectsOfChoice1').textContent = textEffectsOfChoice1;
  }
  
  
  
    function debatPhilo(participantA, participantB){
      if (participantA.ideologie == "Républicanisme" && participantB.ideologie != "Républicanisme") {
        var gagnantDebatPhilo = participantA.nomComplet() + " a gagné!"
      } else if (participantB.ideologie == "Républicanisme" && participantA.ideologie != "Républicanisme"){
        var gagnantDebatPhilo = participantB.nomComplet() + " a gagné!"
      } else if (participantB.ideologie == "Gabrielisme" && participantA.ideologie != "Gabrielisme" && participantA.ideologie != "Républicanisme" ){
        var gagnantDebatPhilo = participantB.nomComplet() + " a gagné!"
      } else {
        gagnantDebatPhilo = "Il n'y a pas de gagnant. Il n'y a que de la confusion, du chaos et de l'étrangeté. " + 
        listeNomPhilosophe[Math.floor(Math.random() * listeNomPhilosophe.length)] + " a été mobilisé dans la discussion." 
      }
      return gagnantDebatPhilo
    }
  