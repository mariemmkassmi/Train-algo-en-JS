// - Ecrire l’algorithme qui, à l’aide d’un tableau de tableaux, affiche
// la grille suivante :
// +---+---+---+
// | | | |
// +---+---+---+
// | | | |
// +---+---+---+
// | | | |
// +---+---+---+

let grille = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];


function afficher(grille) {
    for (let i = 0; i < grille.length; i++) {
        let ligne = "+---+---+---+\n";
        for (let j = 0; j < grille[i].length; j++) {
            ligne += `| ${grille[i][j]} `;
        }
        ligne += "|\n";
        console.log(ligne);
    }
    console.log("+---+---+---+");
}

afficher(grille);
