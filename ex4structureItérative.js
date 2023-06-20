<<<<<<< HEAD
// Ecrire un algorithme qui affiche la somme, en partant de 1
// jusqu’à un nombre donné.
// - Par exemple, le programme reçoit 4. L’affichage doit donc être :
// 10 (1 + 2 + 3 + 4 vaut en effet 10)


let prompt = require("prompt-sync")();
let nombre = parseInt(prompt("Taper un nombre "));
let S = 0
for (let i = 1; i <= nombre; i++) {
    S = + i;
}
=======
// Ecrire un algorithme qui affiche la somme, en partant de 1
// jusqu’à un nombre donné.
// - Par exemple, le programme reçoit 4. L’affichage doit donc être :
// 10 (1 + 2 + 3 + 4 vaut en effet 10)


let prompt = require("prompt-sync")();
let nombre = parseInt(prompt("Taper un nombre "));
let S = 0
for (let i = 1; i <= nombre; i++) {
    S = + i;
}
>>>>>>> 7f15e0f9cdf79a8fbc06583482984dc46c9b7f52
console.log("la somme est :", S)