// Créez un premier tableau qui contient 5 nombres
// - Créez un second tableau qui contient lui aussi 5 nombres
// - Faites la somme de chaque indice du premier tableau avec le
// second


let Tab1 = [1, 20, 13, -4, 5];
let Tab2 = [1, 2, 3, 4, 5];
let S = []

for (let i = 0; i < Tab1.length; i++) {

    let Sum = Tab1[i] + Tab2[i]

    S.push(Sum);



}
console.log(S);
