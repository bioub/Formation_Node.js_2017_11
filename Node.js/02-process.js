process.stdout.write('Coucou');
process.stdout.write(' ');
process.stdout.write('Romain');

console.log(process.cwd());

console.log(process.argv);

if (process.argv[2] === '--debug') {
  console.log('Activer la config de debug');
}

console.log(process.exit(0));
