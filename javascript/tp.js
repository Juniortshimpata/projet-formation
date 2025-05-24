// let persone = {
//     non: "junior",
//     age :23,
//     etudians:false,

// }

// console.log( typeof persone);

// let non = "joel";
// let age = 34;
// let etudians = true;

// console.log(non, age, etudians);


// let prenom = prompt("entrez votre prenom");
// let ages = Number(prompt("saisie votre age "));
// let eleve = false;

// console.log(prenom, ages,eleve);


function getype(valeur){
    return typeof valeur;
}

console.log(getype("junior"));
console.log(getype(23));


// let a = Number(prompt("entrez le premier nombre"));
// let b = Number(prompt("entrez le second nombre"));

// console.log( "l'adition de :" ,a+b);
// console.log( "multiplication de :" ,a*b);
// console.log( "soustraction de :" ,a-b);
// console.log( " division :" ,a/b);

// nombre = Number(prompt("saisie un nobre"));
// function estpair(nombre){
//     return nombre % 2 === 0;
// }

// console.log(estpair(nombre));


// note = Number(prompt("saisie le note"))
// function evoluenote(note){
//     if(note>=17){
//         return "bien";
//     }if(note >=14 ){
//         return "excelent";
//     }if(note>= 10){
//         return"passable";
//     }else{
//         return "insufisant";
//     }
// }

// console.log(evoluenote(note));

//  let fruits = ["banana","pomme", "annana","kiwa"];

//  console.log(fruits[0]);
//  console.log(fruits[fruits.length-1]);
//  console.log(fruits.length);

// let objet = prompt("entrez les element du tableau");
// let varobjet = ["pomme", "banana", "kiwa",];
// console.log(varobjet[objet]);

// let nombres = [2,5,6,12,76,23];
// for (let i = 0; i< nombres.length; i++){
//     console.log(nombres[i]);
//     if(nombres[i] % 2 === 0){
//         console.log("nombres pair", nombres[i]);
//     }
    
// }

    
// let nombres = Number(prompt("saisie le nombre"));
// if(nombres % 2 === 0){
//     console.log("nombres pair:", nombres);
// }else{
//     console.log("nombres impair:", nombres);
// }
    


// function sommtableau(tableau){
//     let somm = 0;
//     for(let i = 0; i<sommtableau.length; i++){
//         somm += tableau[i];
//     }
//     return somm;
// }

// console.log(sommtableau([5,4,7]));

// let persone = {
//     nom: "job",
//     age: 12,
//     etudiant:false
// }
// console.log(persone.nom);
// console.log(persone.age);
// console.log(persone.etudiant);

// let persone = {
//     nom : prompt("entrez votre nom"),
//     age:Number(prompt("saisie votre age")),
//     etudiant: false
// }
// console.log(persone.nom);
// console.log(persone.age);
// console.log(persone.etudiant);

//  let etudiants =[
//     {nom:"junior",note:15},
//     {nom:"joel",note:17},
//      {nom:"job",note:16},
//  ]
//  let somme = 0;
//  for(let i = 0; i< etudiants.note; i++){
//     console.log(etudiants.note [length]);
//      somme += etudiants.note[length];
//  };
//  console.log(etudiants.length)

    let nbanimaux = Number(prompt("nombre d'animaux pour rengistrez"));
    let animaux =[];
    for(let i = 0; i < nbanimaux ; i++){
        let nom = prompt("nom d'animaux");
        let poid = Number(prompt("poid d'animaux"));
        animaux.push({nom:nom, poid:poid});
    }
    let somme = 0;
    console.log("liste des animaux : ")
    for(i = 0; i< animaux; i++){
        console.log(animaux.nom +" : "+ animaux.poid);
        somme += animaux.poid;
    }
    let moyenne = somme / animaux.length;
    console.log("moyenne generale :", moyenne);

    console.log("les animaux ayant le moyenne")
    for(i = 0; i<animaux ; i++){
        if(animaux.poid>10){
            console.log(animaux.poid);
        }

    }





    
