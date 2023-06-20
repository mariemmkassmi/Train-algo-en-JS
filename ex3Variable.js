<<<<<<< HEAD
// Initialiser et affecter deux variables : prenom et age. Si vous
// vous appelez Jean et que vous avez 24 ans, l’algorithme
// affichera : “Je m’appelle Jean et j’ai 24 ans”



let prompt = require("prompt-sync")();
let prenom = prompt(`Tapez un prenom`)
let age = parseInt(prompt(`Tapez une age`))

=======
// Initialiser et affecter deux variables : prenom et age. Si vous
// vous appelez Jean et que vous avez 24 ans, l’algorithme
// affichera : “Je m’appelle Jean et j’ai 24 ans”



let prompt = require("prompt-sync")();
let prenom = prompt(`Tapez un prenom`)
let age = parseInt(prompt(`Tapez une age`))

>>>>>>> 7f15e0f9cdf79a8fbc06583482984dc46c9b7f52
(age ===24 && prenom.toLowerCase()==='jean')? console.log("je m'appelle Jean et j'ai 24 ans"): console.log("error")