
// Ecrire un script de build dans le style de votre choix
// (synchrone, asynchrone, promise, async/await)

// Etapes

// 1 - Supprimer le dossier dist (s'il existe)
// vous pouvez utiliser del (pas besoin de vérifier qu'il existe)
// https://github.com/sindresorhus/del

// 2 - Créer le dossier dist

// 3 - Copier le contenu des fichiers src/js/horloge.js
// et src/js/index.js dans un fichier dist/app.js

// 4 - Copier le fichier src/index.html dans dist/index.html
// en remplaçant les balises script de dev
// par celle de prod (app.js)

// 5 - Optionnel
// Utiliser la bibliothèque uglify-es ou babili
// pour réduire le poids du fichier js de prod

// 6 - Optionnel
// Utiliser le module crypto de Node pour signer
// le fichier app.js et remplacer son nom
// par le checksum md5 (pour invalider le cache)
// Voir https://gist.github.com/remarkablemark/ef52f3fb1c16cf7aaf8aae1fc81aceca


// Note :
// Faire un npm install
// serveur de dev -> npm run serve:dev
// serveur de prod -> npm run serve:prod

