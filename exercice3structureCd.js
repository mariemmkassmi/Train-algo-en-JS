<<<<<<< HEAD
// Ecrire un algorithme qui prend une réponse en entrée
// - Posez la question : “Est-ce que j’ai un diplôme en informatique?”
// - Si ce n’est pas le cas, affichez “On va tout vous apprendre à
// M2I Formation !”
// - Sinon afficher “Nous n’avons plus rien à vous apprendre”



let prompt = require("prompt-sync")();
let reponse = prompt("Est-ce que j'ai un diplôme en informatique? ");
reponse.toLowerCase() === 'false' ? console.log(`On  va tout vous apprendre à
=======
// Ecrire un algorithme qui prend une réponse en entrée
// - Posez la question : “Est-ce que j’ai un diplôme en informatique?”
// - Si ce n’est pas le cas, affichez “On va tout vous apprendre à
// M2I Formation !”
// - Sinon afficher “Nous n’avons plus rien à vous apprendre”



let prompt = require("prompt-sync")();
let reponse = prompt("Est-ce que j'ai un diplôme en informatique? ");
reponse.toLowerCase() === 'false' ? console.log(`On  va tout vous apprendre à
>>>>>>> 7f15e0f9cdf79a8fbc06583482984dc46c9b7f52
M2I Formation ! `) : console.log(`Nous n'avons rien à vous apprendre `)