// - Ecrire un algorithme qui possède un tableau à deux dimensions
// qui contient uniquement des nombres
// - Pour chaque ligne, afficher la somme des nombres

let Tab = [[1,2,3,4],[1,4,5,6],[15,5,6,7],[0,8,12,15]];
let Tab1 =[]
for (let i=0;i<Tab.length;i++) {
    Tab1=Tab [i];
    let sum=0
    for (let j=0;j<Tab1.length;j++){
      sum=+Tab1[j]
    }
    console.log ("la somme de ",i,"est egale à ",sum)
}
