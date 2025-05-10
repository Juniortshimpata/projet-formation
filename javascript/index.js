/*console.log('hello');
console.log('papa');
console.log('5');*/

// prompt('ecrire un nombre?')
// alert('réussi')

/*
Variables: let, var ,const
Type: Number, string
*/
const nom = "jean"; 
let prix = 10;
var montant = 250;

prix = 25;
montant = 150;
// nom = "paul";

console.log(nom);
console.log(prix);
console.log(montant);
console.log(typeof prix)

// Les opérations arithmétiques
console.log(15 + 10);
console.log(5-2);
console.log(2*8);
console.log(7/2);
console.log(50%15);

// Addition
let a = 15, b = 10,c;
c = a + b;
console.log(c);

// Soustraction
let d = 5,e = 2,f;
console.log(f = d - e);

// Mulitiplication
let k = f * c;
console.log(k);


// de comparaison : >,< <= ; >=, !== 
console.log(25 > 10);

// logique : && et; || ou,
console.log( 4< 8 && 7 >2);
console.log( 4< 8 || 7 <2);

let p = Number("4");
console.log(typeof p);

let pays = String(40);
console.log(typeof pays);

let fruit ="orange";
console.log(fruit.length);
console.log(fruit.indexOf('e'));
console.log(fruit.charAt(2));
console.log(fruit.replace('o','t'));
console.log(fruit.slice(2,5));
console.log(fruit.split(','));

// Les conditions : if
if ( a= 'paul' ) {
    alert ('Bonjour' + " " + a);
};

var contry = 'rdc';
// console.log(contry)

if (contry == 'france'){
    console.log('je ne suis pas congolais ')
} else{
    console.log('je  suis  congolais');
}

// Boucles : do while, while do
for(let i=0; i< 50; i++){
    console.log(i);
}

// Structures de données: tableau & objet
let tab = [1,2,'luc'];
console.log(tab);
console.log(tab[2]);
tab[3] = 5;
console.log(tab);

// tab.push('call');
// console.log(tab);

// tab.pop(5);
// console.log(tab);

tab.shift();
console.log(tab);

tab.unshift(10);
console.log(tab)

let tab1=[];

for (let i=0; i < tab.length;i++){
    // tab1.push(tab[i]);
    // console.log(tab1)
    // console.log(tab[i]);
    console.log(tab[i]);

    tab1.push(tab[i]);
    console.log(tab1);
}

//Objet

let car = {
    nom: 'mercedes',
    vitesse: 1500,
    marque: 'benz'
};
 let car1 = {
    nom:'Toyota',
    vitess: 5204,
    marque: 'bwm'
 };

 car1.nom = 'peugeot';

 console.log(car1.nom);

