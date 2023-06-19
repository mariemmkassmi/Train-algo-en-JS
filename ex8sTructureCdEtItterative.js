// - Ecrire un algorithme qui prend un jour (“Lundi”, “Mardi”,
//     “Mercredi”, “Jeudi”, “Vendredi”, “Samedi” ou “Dimanche”), et une
//     heure (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...)
//     - Vérifier que si le jour est dimanche ou que l’horaire est inférieur
//     à 8h ou que l’horaire est supérieur à 19h, on affiche un message
//     // “Les magasins sont fermés”


let prompt = require("prompt-sync")();
let jour = prompt(`Tapez un jour de lundi jusqu'à Dimanche`)
let heure = prompt(`Tapez un heure de 0 jusqu'à 23h`)
    (jour.toLowerCase() === 'Dimanche' || heure < 8 || heure > 19) ? console.log("les magasin sont fermés") : console.log("les magasins sont ouvert")