"use strict";
// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// пусть переменная "number" содержит число 10 
// let number;
// console.log(number);
// console.log(typeof number);

// number = 20;
// console.log(number);
// console.log(typeof number);

// number = 'Привет!';
// console.log(number);
// console.log(typeof number);

// const num = 10;
// console.log(num);
// // num=20;

// const user = {
// 	name: 'Максим',
// 	age: 26
// };
// console.log(user.name);
// console.log(user.age);

// user.name = 'Лоцы';
// console.log(user.name);
// console.log(typeof user);


// let numb = 100;
// let sayHi = '50';

// let blockHeight = 100;
// blockHeight = numb - sayHi;
// console.log(typeof blockHeight);
// console.log(blockHeight);

// let partOne = 'Привет,';
// let partTwo = ' Вася!';
// sayHi = partOne + partTwo;
// console.log(typeof sayHi);
// console.log(sayHi);

// let numOne = 30;
// let numTwo = 20;
// let result = numOne !== numTwo;
// console.log(typeof result);
// console.log(result);

// if (numOne >= numTwo) {
// 	console.log('numOne ' +
// 		numOne + ' больше чем numTwo ' + numTwo);
// } else if (numOne === 20) {
// 	console.log('numOne равно 20');
// } else {
// 	console.log('Условия НЕ выполнены');
// }

// let numThree = 20;
// if (numThree){
// 	console.log('numThree возвращает true');
// }

// const mainPage = document.querySelector('.page');
// if (mainPage) {
// 	console.log(mainPage);
// }

// let numOne = 30;
// let numTwo = 20;
// if (numOne <= numTwo && numOne === 30) {
// 	console.log('Выполняеться код ... ')
// }

// const block=document.querySelector('.block');
// if(!block.classList.contains('active')){
// 	block.classList.add('active')
// }

// let someVar='Ястрока!';
// let someVar = "Ястрока!";
// let someVar =` Ястрока!`;

// let someNum=20;
// let someString = `Мне ${someNum} 
// лет`;
// console.log(someString);


// let someNum = 10;
// let someString;
// if (10 > 5) {
// 	someString = `Привет`;
// 	console.log(someNum);
// 	console.log(someString);
// }
// console.log(someString);


function setControle(params) {
	console.log(params);
}
setControle('Привет');

let numOne = 20;
let numTwo = 50;
let summ;

function getSumm(numOne, numTwo) {
	return summ = numOne + numTwo;
}

let someNumber = 580;
if (someNumber === 100) {
	console.log(getSumm(50, 80));
} else {
	console.log(getSumm(10, 10));
}

someNumber === 100 ? console.log(getSumm(50, 80)) : console.log(getSumm(10, 10));

	const menuLinks = document.querySelectorAll('.menu__link');
console.log(menuLinks);

menuLinks.forEach(menuLink => {
	menuLink.addEventListener("click", function (e) {
		menuLink.classList.add('_active');
		e.preventDefault();
	});
});