// var 
// const 
// let 

var Greetme = "Good Morning Mr Emmanuel"
Greetme = "Good morning Mr President"
console.log(Greetme);

const PI = 22
// PI = 500
console.log(PI);

let Music_artist = 'Davido' 
Music_artist = 'Chioma Jesus'
console.log(Music_artist);

// Variable scope 
{
    var Plant = "Orange tree"
}
console.log(Plant);

// Variable casing 
// pascalCase 
// CamelCase
// SnakeCase

First_Name = "snake case"
Camelcase = "camel case"
PASCALCASE = "pascal case"

// Datatypes in javascript 
// strings 
// int 
// Boolean
// Array
// Object
// null
// undefined

let Tutor = 'Emmanuel'
let tutor_age = 200
let tutor_isactive = true || false 
let tutor_siblings = ['Ogechi','Christain', "Miss Evenlyn", 'Emmanuel']
let tutor_isanObject = {Name:'Emmanuel', Age:200, IsActive:true, Nationality:'Nigerian'}
let Null = null
console.log(tutor_siblings[0]);

console.log(tutor_isanObject.Nationality);
console.log('This is for Null ',Null);

let x = undefined;
console.log(x);

let empty = ''
console.log(empty);


console.log(typeof(Tutor));
console.log(typeof(tutor_age));
console.log(typeof(tutor_isactive));
console.log(typeof(tutor_siblings));


// const Button = document.querySelector('btn')

// Button.addEventListener('click', function(){
//     alert('Please select a child');
// })



// what is a function 
// A function is a block of code that does something whenever it's called 

// types of function are 
// function 
// arrow function 
// anonymouse function 
// iife function immidialty invoked function expression

function Greetus(){
    // console.log('Good morning sirs we ar happy to see you God bless you amen');
    return('Good morning sirs we ar happy to see you God bless you amen');
}

console.log(Greetus()); 
Greetus()


function Comehome(msg, text){
    console.log(msg, text);
}

Comehome('Come home your food is ready', 77)

let speed = 500

speed = speed * 1000

function Speed(value){
    console.log(value);
}

Speed(speed)

// default parameters

function Default(msg = 'Good day'){
    console.log(msg);
}

Default('good afternoon')


// Do not know the anount of aguments for a function 

function Sum(values, item, ...args) {
    console.log(values, ...args);
}

Sum(1,2,3,4,5,6,7,8,9,10)

const values = function(){

}

let playing = ()=>{

}

((function(){
    console.log('loading files....');
}))()

let increament = document.querySelector('.increament')
let decreament = document.querySelector('.decreament')
let value = document.querySelector('.value')
let num = 0
function increaments(){
    // num = num + 1
    num += 1
    value.innerHTML = num
    value.style.backgroundColor = 'red'
    value.style.fontSize = '50px'
}
function decreaments(){
    num -= 1
    value.innerHTML = num
    value.style.backgroundColor = 'red'
    value.style.fontSize = '50px'
}
    
// Array is a collection of items seperated by comas
let fruits = ['Apple', 'Orange', 'banana', 'grape']
let fruitsArray = ['Apple', 'Orange', 'banana', 'grape']
console.log(fruits.pop());
console.log(fruits.push('seed'));
console.log(fruits.shift());
console.log(fruits.unshift('cassava'));
console.log(fruits[0]);
console.table(fruits.concat(fruitsArray));

// Object collection of item in keys values pairs

let person = {
    name: 'Emmanuel',
    age: 200,
    isactive: true,
    nationality: 'Nigerian'
}

let phone = {
    phoneBrand: ' iphone 11 pro max',
    phoneModel: 'iphone 11 pro max',
    phonePrice: 1000000,
    phoneColor: 'black'
}
console.log(phone.phoneBrand);

// Conditional Statement in JS 
// We have IF condition
// We have renary operator in JS
// We ahve swicth conditional statement in JS

let yearOfBirth = 2024
currentYear = 2000

if(yearOfBirth){
    let age = yearOfBirth - currentYear
    console.log(`Your age is ${age}`);
}

let Playing = false
let song = 'amapiano playing'
if(Playing === false){
    Playing = true;
    console.log(song);

}else{
    Playing = false;
    song = 'amapiano is not playing'
    console.log(song);
}

const priceValue = document.querySelector('.price')
// let Price = 20000
// let radioPrice = 10000

// if(Price > radioPrice) {
//     document.write('Price is greater than radio');
//     priceValue.innerHTML = 'Price is greater than radio'
// }else if(Price < radioPrice) {
//     document.write('Price is less than radio');
//     priceValue.innerHTML = 'Price is less than radio'
// }else{
//     priceValue.innerHTML = 'bro go and save more to buy your radio'
// }

let number = 200;

number == 100 ? console.log('this is 100') : console.log('this is not 100');


let date = new Date()
console.log(date.getDay());

switch (date.getDay()){
    case 1:
        console.log('this is Monday');
        break;
    case 2:
        console.log('this is Tuesday');
        break;
    case 3:
        console.log('this is Wednesday');
        break;
    case 4:
            console.log('this is Thursday');
        break;
    case 5:
            console.log('this is Friday');
           break;
    case 6:
            console.log('this is Saturday');
            break;
    case 7:           
        console.log('this is Sunday');
        break

    default:
        console.log('invalid date format');

}


let countValue = 10;
let countItem = document.querySelector('.countItem');

let timerId = setInterval(() => {
  countValue--;
  countItem.innerHTML = countValue;
  
  if (countValue <= 0) {
    countItem.innerHTML = 'Game is over';
    clearInterval(timerId);
  }
}, 1000);


// for loop 
// for in loop 
// for of loop 
// while loop 
// do while loop
// Infinity loop


let fruit = ['Apple', 'Orange', 'banana', 'grape']
// for (let index = 0; index < fruit.length; index++) {
//     const element = fruit[index];
//     console.log(element);
// }

for(let man in fruit) {
    console.log(fruit[man]);
}

let NavList = ['Home', 'About', 'Services', 'Contact']
let navlist = document.querySelector('.nav_list')

for(let man in NavList) {
    let li = document.createElement('li')
    navlist.appendChild(li)
    li.className = 'nav_listsss'
    li.innerHTML = NavList[man]
}

// let item1, item2, item3, item4 = fruits
// console.log(item1);


