console.log(process.argv);

//const worldOne = process.argv[2] ? process.argv[2] : "Boolean";
const worldOne = process.argv[2] ?? 'Boolean'; //default value

console.log(`Hello ${worldOne}`);

//eseguito con node index.js point 1
//eseguito con npm run start point 2
//eseguito con npm run watch che aggiorna il server in tempo reale point 3
//bonus
//npm run start "Boolean"
