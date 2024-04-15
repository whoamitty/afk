<?php
// Remplacez 'chemin/vers/musique' par le chemin réel du dossier contenant vos fichiers musicaux.
$musicDir = 'ateez';
$musicFiles = glob($musicDir . '/*.mp3'); // Obtient tous les fichiers .mp3

// Utilise preg_grep pour exclure les fichiers qui contiennent "Japanese"
$musicFiles = preg_grep('/.*Japanese.*|066_*/', $musicFiles, PREG_GREP_INVERT);



// Dear Diary
// Sélectionner un fichier musical aléatoire.
$randomMusicFile = $musicFiles[array_rand($musicFiles)];



// Remplacer le chemin complet par le chemin relatif pour le lecteur audio HTML.
echo str_replace($_SERVER['DOCUMENT_ROOT'], '', $randomMusicFile);