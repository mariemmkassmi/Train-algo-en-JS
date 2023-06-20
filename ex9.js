// Ecrire un algorithme qui permet de dessiner un triangle d’étoiles.
// - Par exemple, l’utilisateur donne 3, l’algorithme doit afficher :

// *
// **
// ***
// **
// *

// - L’utilisateur donne 5 :

// *
// **
// ***
// ****
// *****
// ****
// ***
let prompt = require("prompt-sync")();
let nombre = prompt(`Tapez un nombre`)

for (let i = 1; i <= nombre; i++) {
    let etoile = ''
    for (let j = 1; j <= i; j++) {
        etoile = +'*'

    }
    console.log(etoile)
}
for (let i = n - 1; i <= 1; i--) {
    let etoile = ''
    for (let j = 1; j <= i; j++) {
        etoile = +'*'

    }
    console.log(etoile)
}
