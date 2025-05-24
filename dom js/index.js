// import {prix} from "../javascript/index.js"; 

// alert(prix);   

// var titre = document.getElementsByTagName('header');
var titre = document.querySelector('header section');
console.log(titre);

var navLink = document.getElementsByClassName('navLink');
console.log(navLink);

var btn = document.getElementById('hide');
btn.style.backgroundColor = "red";
// console.log(btn);

var imgCart = document.querySelector('div img');


btn.addEventListener('click',function () {
    imgCart.src = '../images/1019.jpg';
    imgCart.style.width = '300px';
    imgCart.style.height = '200px';
    imgCart.style.border = '2px solid black';
    imgCart.style.borderRadius = '30px';
} );

imgCart.addEventListener('mousemove', clickOne())
    // imgCart.style.transform = `scale(1.1)`;);

function clickOne() {
    imgCart.style.transform = `scale(1.1)`
}
// imgCart.addEventListener('mouseout',function() {
//     imgCart.style.display = 'block'
//     imgCart.style.transform = `scale(0)`;
// })

// var para = document.querySelectorAll('p');
// para.forEach((i)=> {
//     i.style.backgroundColor = 'blue';
// });
var para = document.querySelector('p');
// console.log(para);
para.innerText = 'Welcome Home';
para.innerHTML = `
    <b>Welcome From England</b>
` ;

var footer = document.querySelector("footer");
console.log(footer)
var div = document.createElement('div');
div.setAttribute('id','prix');
div.textContent = '250$';
console.log(div);
footer.appendChild(div);
