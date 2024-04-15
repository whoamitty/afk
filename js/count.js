// Heure cible sous la forme 'HH:MM'
let heureCible = '22:00';

function obtenirHeureDuLive(heure) {
  const maintenant = new Date();
  const [heures, minutes] = heure.split(':').map(Number);
  let cible = new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate(), heures, minutes, 0);
  
  return cible; 
  /*   // Si l'heure cible est déjà passée, réglez-la pour le lendemain
  if (maintenant >= cible) {
    cible.setDate(cible.getDate() + 1);
  }
  */
}

var countDownDate = obtenirHeureDuLive(heureCible);

// Mettre à jour le compteur toutes les secondes
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Calculs du temps pour les heures, minutes et secondes
  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Affichage du résultat dans l'élément avec l'id "compteARebours"
  // document.getElementById("compteARebours").innerHTML = hours + "h " + minutes + "m " + seconds + "s";
  document.getElementById("compteARebours").innerHTML = hours + "h " + minutes + "m " + seconds + "s";

  // Si le compte à rebours est terminé, afficher un message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("compteARebours").innerHTML = "Quelques instants...";
    // Redirection optionnelle ou autres actions ici
  }
}, 1000);