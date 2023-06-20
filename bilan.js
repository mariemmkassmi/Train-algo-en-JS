// Exercice
// - Jeu des bâtonnets
// - 20 bâtonnets au départ

// - Le jeu se joue à deux, chacun son tour les joueurs vont retirer 1,
// 2 ou 3 bâtonnets.
// - Celui qui retire le dernier bâtonnet à gagné


let Batonnets = 20;
let tour = 1;
while (Batonnets > 0) {
    console.log("le nombre des batonnets restes est ", Batonnets);
    let joueur = tour % 2 === 1 ? "Joueur 1" : "Joueur 2";
    let choix = parseInt(prompt(joueur + "ton tour maintenant de choisir"));
    if (choix >= 1 && choix <= 3 && choix <= Batonnets) {
        Batonnets -= choix;
        tour++;
    } else {
        console.log("Choix invalide");
    }
}

let gagnant = tour % 2 === 1 ? "Joueur 2" : "Joueur 1";
console.log(gagnant);