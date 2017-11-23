const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

(async () => {
  try {
    await del(distPath);
    console.log(`${distPath} deleted`);

    await fs.mkdir(distPath);
    console.log(`${distPath} created`);

    let buffer = await fs.readFile(horlogeJsPath);
    let content = UglifyJS.minify(buffer.toString()).code;
    await fs.appendFile(appJsDistPath, content);
    console.log(`${horlogeJsPath} built`);

    buffer = await fs.readFile(indexJsPath);
    content = UglifyJS.minify(buffer.toString()).code;
    await fs.appendFile(appJsDistPath, content);
    console.log(`${indexJsPath} built`);

    buffer = await fs.readFile(appJsDistPath);
    const checksum = md5(buffer.toString());
    const newName = `app.${checksum}.js`;
    await fs.move(appJsDistPath, path.resolve(distPath, newName));

    buffer = await fs.readFile(indexHtmlPath);
    let contentHtml = buffer.toString();
    contentHtml = contentHtml.replace('<script src="./js/horloge.js"></script>', '');
    contentHtml = contentHtml.replace('<script src="./js/index.js"></script>', `<script src="./${newName}"></script>`);
    await fs.appendFile(indexHtmlDistPath, contentHtml);
    console.log(`${indexHtmlPath} built`);
  }
  catch (err) {
    console.log(err.message)
  }
})();


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
// readFile retourne un Buffer
// Buffer -> string : buffer.toString()

// 5 - Optionnel
// Utiliser la bibliothèque uglify-es ou babili
// pour réduire le poids du fichier js de prod

// 6 - Optionnel
// Utiliser le module crypto de Node pour signer
// le fichier app.js et remplacer son nom
// par le checksum md5 (pour invalider le cache)
// app.F4556Y4G445G454G.js
// Voir https://gist.github.com/remarkablemark/ef52f3fb1c16cf7aaf8aae1fc81aceca


// Note :
// Faire un npm install
// serveur de dev -> npm run serve:dev
// serveur de prod -> npm run serve:prod

