// function estpair (nombre) {
//     if (nombre % 2 === 0){
//         return"pair";
//     }else{
//         return"impair";
//     }
// }

// let nombres = [4, 7, 0, 13];

// for(let i= 0; i< nombres. length; i++){
//     console.log(nombres[i] + "est" + estpair(nombre[i]));
// }


let etudians = ["junior", "benie"];

/*
function verfierEtudian(prenom) {
    return etudians.includes(prenom);
}

let prenom1 = "junior";
let prenom2 = "joel";

if (verfierEtudian(prenom1)) {
    console.log(prenom1 + " existe dans la premier liste ");
} else {
    console.log(prenom1 + "n'xiste pas dans le liste");
}

if (verfierEtudian(prenom2)) {
    console.log(prenom2 + "  nom existe dans liste du deuxième");
} else {
    console.log(prenom2 + " n'existe pas dans la deuxieeme liste");
}
*/

// function lireTab(){
//     for(let i=0; i < etudians.length; i++) {
//         let nom = prompt('saisir votre nom');
//     // console.log(etudians[i]);  
//     if (etudians[i] == nom){
//         return console.log(etudians[i]);
//     } else {
//         return console.log("null");
//     } 
//     }
// }

// lireTab();

/*etudians.map(function(e){
    console.log(e);
})

*/


/*
let age = Number(prompt("saisie votre age"))
if (age > 18) {
    console.log(`majeur`);
} else {
    console.log(`mineur`);
}

let animal1 = {
    nom: "elephan",
    type: "domestique",
    poids: 240
}

let animal2 = {
    nom: "tigre",
    type: "sauvage",
    poids: 140
}

console.log(animal1, animal2)

let algoAnimal = [
    { nom: "chat", type: "domestique", poids: 100 },
    { nom: 'serpent', type: 'domestique', poids: 50 },
    { nom: 'corbo', type: 'domestique', poids: 70 }
];

console.log(algoAnimal)

*/

 let nbEleves = Number(prompt('Combien d"eleves ?'));
 let eleves = [];
 for(let i = 0; i < nbEleves; i++){
    let nom = prompt('Nom de l"eleve: ');
    let note = number(prompt('Note de ' + nom + " : "));
    eleves.push({nom: nom, note: note});
 }
 console.log(eleves)












