// Initialiser et affecter deux variables : prenom et age. Si vous
// vous appelez Jean et que vous avez 24 ans, l’algorithme
// affichera : “Je m’appelle Jean et j’ai 24 ans”



let prompt = require("prompt-sync")();
let prenom = prompt(`Tapez un prenom`)
let age = parseInt(prompt(`Tapez une age`))

(age ===24 && prenom.toLowerCase()==='jean')? console.log("je m'appelle Jean et j'ai 24 ans"): console.log("error")