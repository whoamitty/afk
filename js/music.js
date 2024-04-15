const audioPlayer = document.getElementById('audioPlayer');
const currentTrack = document.getElementById('currentTrack');

function fetchRandomMusic() {
    let trackName
    fetch('list_music.php') // Remplacez 'list_music.php' par le chemin de votre script PHP
    .then(response => response.text())
    .then(musicPath => {
        audioPlayer.src = musicPath;
        audioPlayer.play();
        trackName=musicPath.split('/').pop()
        trackName= trackName.substring(trackName.indexOf('_') + 1); // Supprime le numéro de piste
        trackName = trackName.replace('.mp3', ''); // Supprime l'extension de fichier
        currentTrack.textContent = ` ${trackName}`;
    
    })
    .catch(error => console.error('Erreur lors de la récupération des données: ', error));
}   

audioPlayer.addEventListener('ended', fetchRandomMusic);

// // Commencer à jouer de la musique au chargement de la page.

fetchRandomMusic();