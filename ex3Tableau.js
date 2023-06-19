// Créez un premier tableau qui contient 5 nombres
// - Créez un second tableau vide
// - Recopiez à l’aide d’une boucle les valeurs du premier tableau
// dans le second
// AMELIORATION : Recopier le premier tableau à l’envers dans
// le second



let Tab1 = [1, 20, 13, -4, 5];
let Tab2 = [];
for(let i=Tab1.length-1;i>=0;i--) {
    Tab2.push(Tab1[i]);

}
console.log(Tab2)