// // for rect
// fonction flechée

// let dibonjour = nom => "bonjour " + " " + nom;
// console.log(dibonjour('junior'))
import { name,ageOne } from "./person.js";
console.log(name + " " + ageOne);


let ditbonjuor = () => 'bonjour, junior';
console.log(ditbonjuor())

let addi = (a,b) => (a+b);
console.log(addi(2,5))

let mult = (a,b) => (a*b);
console.log(mult(2,7))

let sous = (a,b) => (a-b);
let a = Number(prompt("entrez le nombre 1"));
let b = Number(prompt("entrez le deuxieme nombre"));
console.log(sous(a,b))

let add = (a,b,c) => (a+b+c);
console.log(add(2,5,9))

let airectangle = (longeur,largeur) => (longeur*largeur);
console.log (airectangle(6,9))

const saluer = (prenom , age) => 'bonjour , ${prenom}, tus as ${age} ans';
console.log(saluer('junior', 23))

let plusgrand = (a,b) => (a > b ? a : b);
console.log(plusgrand(7,10))

let pluspetit = (c,d) => (c < d ? c:d);
console.log(pluspetit(4,8))
console.log(pluspetit(9,7))

let egalite = (e,g) => ( e >= g ? e:g);
console.log(egalite(2,4))

// destruction


let persone =[10, 20];
let [ note,cour] = persone;
console.log(cour)

let etudiants = ["infomatique", "mecanique", "electricite"];
let[junior, benie, emmanuel] = etudiants;
console.log(benie, junior)

let eleves = [10, 20, 30, 12];
let [jures, job, ben, wiz] = eleves;
console.log(jures,job)

let animal = {
    nom : "Chat" , poid: 34,
};
let{nom , poid} = animal;
console.log(nom)

// let cole = {
//     prenom : "ispt" , nombre : 56,
    
// };
// let {  nombre, prenom } = cole;
// console.log (prenom)

const pers = {
    prenom : "jean",
    age : 23,
    pay : "france"
}
const{prenom , age} = pers;
console.log(prenom)
console.log (age)

const utilisateur = {
    id : 1,
    pseude: "jeved",
}
const{pseude : monutlisateur, id} = utilisateur;
console.log(monutlisateur)

let jr = {
    far : "jf",
}
let {far , bg=  23  } = jr;
console.log(far,bg)

let couleurs = {
    voiture : "toyota",
    model : 47,
}
let {voiture : modelvoiture , model : coulvoiture} = couleurs;
console.log(modelvoiture)
console.log(coulvoiture)

let identite = {
    cart : "joce",
    contact :{
        imail: "juniortshimpata91@gmail.com",
        telephone : "0852112344"
    }
}
let {contact : {imail , telephone}} = identite;
console.log(imail,telephone)

let vie = {
    etudian :"hec",
    ident :{
        dina : "jonatha",
        ages : 22,
        sexe : "m",
    }
}
let {ident :{dina, ages, sexe}} = vie;
console.log(dina)
console.log(ages)
console.log(sexe)

const travail = [
     {nm : "joel",ag : 25,},
     { nm : "jud",ag : 17,},
];
let [{nm : nm1} ,{ag : ag2}] = travail;
console.log (nm1)
console.log(ag2)

let trav = [
    {mn : "hopital", num : 16, coul : "rouge"},
    {mn : "ecole", num : 18 , coul : "jeune"},
    
]
let [{mn : mn2 }  , { coul : coul1 }] = trav;
console.log(mn2 , coul1 )


let div = [10 , 20];
let div1 = [...div , 30,40];
console.log (div1)

let dr ={
    jh : "jose", bd : 21,
}
let dr1 = {...
    dr,
    jt : "lk ", bg : 11,
}
console.log(dr1)

const kl = [ 1,2,3,4,5].map((num) => num * 2);
console.log(kl)

const tl = [4,8,24,9].map((n) => n );
console.log(tl)

const gd = [ 2,6,7].map((Number) => Number -4)
console.log(gd)

let bn = [2,4,9,12].filter((br) => br +3==12 );
console.log(bn)

let rd = [ 2, 5, 6,9]. reduce(( total,bt ) => total+ bt,0)
console.log(rd)

const dsr = [50, 60, 20].sort();
console.log(dsr)

// let bcart = () => {
//     let tr = cart .filter (user => user . btre == "banana")
// }
// console.log(tr)

let jtroi = 4;

const  jud = jtroi == 50 ? 'vrai' : 'faux';
console.log(jud)

console.log (jtroi && "succe")
console.log(jtroi|| "succe" )

let cours = {
    epst : "junj",
    points : 23,
    sexe : "m"
}
console.log(cours)

let ditbonjr = (kl) => "bonjour" + ' ' + kl;
console.log(ditbonjr("tshimpata"))

function trvf (nom){
    console.log("bjr" + " " + nom)
       
}
trvf("junior")

let bnr = {
    nv : "tyh",    ft : 23,
}
if( ft > 23){
    console.log(majeur);
}else{
    console.log(mineur)
}











