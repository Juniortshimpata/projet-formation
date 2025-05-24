/* Function flechée 
function greet(name){
    console.log('hello'+ + name);
    return a +b 
}

greet('junior');*/

const greet = (name) => 'hello ' + ' '+ name ; 
console.log(greet("junior"));

const add = (a,b) => a + b;
console.log(add(5,10));

const animal = (nom,poids) => ({nom,poids});
console.log(animal("Lion", 150));

function etudiant (name ="junior"){
    console.log(` Hello, ${name}`);
}

// etudiant('Alice');

// Destructuration

const monde = [10,20]
const [first,second] =monde;
console.log(second);

const user = {
    name:"Alice",age: 25
};

const {name,age} =user;
console.log(age);

// Copie tableau & objet
const monde1 = [...monde,30,40];
console.log(monde1);

const user2 = {...user,sexe:'feminin'};
console.log(user2);

// Map,Filter,Reduce
//const number =[1,2,3,4].map((num) => num * 2 );
//console.log(number); [2,4,6,8]

//const number = [1,2,3,4].filter((num) => num +2 == 4 );
//console.log(number);
//const number = [1,2,3,4].reduce((total,num) => total + num, 0);
//console.log(number);

//const number = [1,2,3,4].map(num => num * 2).filter(num =>num + 2 == 4).reduce((total,num) => total + num);

// console.log(number);
const cart =[
    {id:1,name:'Apple',prix:150},
    {id:2,name:"Banane", prix: 100},
    {id:3,name:"Ana",prix:250}
];

const totalCart = () => {
    const total = cart.reduce((sum,item) => sum + item.prix,0);
    console.log(total);
}

totalCart();

const filtCart = () =>{
    const tr = cart.filter(user => user.name == "Banane");
    console.log(tr)
}

filtCart();

const desc= [20,10,5].sort();
console.log(desc);

// Operateur Ternaire
let IsUser =50;
// if (IsUser) {
//     console.log("Login");
// } else {
//     console.log('sing up')
// };

// let message = IsUser = 50 ? 'Login' : 'Signup';
// console.log(message);

console.log(IsUser && 'Succes');
console.log(IsUser || 'Succes');
