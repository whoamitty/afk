// Définir l'heure cible, par exemple 14:00 (2 PM)
let heureCible = '14:00';

function obtenirHeureCible(heureCible) {
  const [heures, minutes] = heureCible.split(':').map(Number);
  const maintenant = new Date();
  const cible = new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate(), heures, minutes, 0);

  // Si l'heure cible est déjà passée aujourd'hui, réglez-la pour demain.
  if (maintenant > cible) {
    cible.setDate(cible.getDate() + 1);
  }

  return cible;
}

var countDownDate = obtenirHeureCible(heureCible);

// Mettre à jour le compte à rebours toutes les secondes
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Calculs du temps pour les minutes et les secondes
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Afficher le résultat dans l'élément avec id="compteARebours"
  document.getElementById("compteARebours").innerHTML = minutes + "m " + seconds + "s";

  // Si le compte à rebours est terminé, écrire du texte
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("compteARebours").innerHTML = "L'heure est arrivée !";
  }
}, 1000);