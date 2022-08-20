/*
function removeChar(str) {
	//You got this!
	let result = str.slice(1, (str.length-1));
	//console.log(result);
	return result;
}
removeChar('eloquent');
*/
// function DNAtoRNA(dna) {
// create a function which returns an RNA sequence from the given DNA sequence
/*
let arr=dna.split('');
console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'T') {
			console.log('да');
			arr[i]='U';
			// console.log(`Индекс ${i} значение ${arr[i]}`);
		} 
		// console.log(arr);
	}
	let res=arr;
	let result = res.join('') ;
	return result;
	console.log(result);
	
}
DNAtoRNA('TATT');
*/
/*
function rentalCarCost(d) {
	// Your solution here
	cost = 40;
	let result;
	if (d >= 7) {
		result = 40 * d - 50;
	} else if (d >= 3 && d <= 6) {
		result = 40 * d - 20;
	} else {
		result = 40 * d;
	}
	return result;
	console.log(result);
}

rentalCarCost(6);
*/
/*
function greet(name, owner) {
	// Add code here
	if (owner === 'boss') {
		// console.log(name + ' Hello boss');
		return name + ' Hello boss';

	} else {
		// console.log(name + ' Hello guest');
		return name + 'Hello guest';
	}
}
greet('Daniel', 'boss');
*/
/*
function findShort(s) {
	let arr = s.split(' ');
	// console.log(arr);
	let arrLength = [];
	arr.forEach((item, index) => {
		arrLength[index] = arr[index].length;
	});
	// console.log(arrLength);
	let result = Math.min.apply(null,arrLength);
	// console.log(result);
	return result;
}

findShort('bitcoin take over the world maybe who knows perhaps');
*/
/*
function century(year) {
	// Finish this :)
	let result = Math.ceil(year / 100);
	console.log(result);
	// return;
}
century(582139); //5822
century(1705);
century(1900);
century(1601);
century(2000);
century(89);
*/
/*
function numberToString(num) {
	// Return a string of the number here!
	let result = String(num);
	//console.log(result);
	return result;
}

numberToString(666);
*/
/*
function highAndLow(numbers) {
	// ...
	let arr = numbers.split(' ');
	let max = Math.max.apply(null,arr);
	let min = Math.min.apply(null, arr);
	let arr2 = max +' '+ min;
	console.log(arr2);
	return arr2;

}
highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4');
*/
/*
function filter_list(l) {
	// Return a new array with the strings filtered out
	//console.log(typeof l);
	let arr = [];
	let i = 0;
	l.forEach((item) => {
		if (typeof item === 'number') {

			arr[i] = item;
			i++;
		}

	});
	return arr;
	console.log(arr);


}
filter_list([1, 2, 'a', 'b']);
*/
/*
function past(h, m, s) {
	//#Happy Coding! ^_^
	let summ;
	let hours = h * 60 * 60 * 1000;
	let min = m * 60 * 1000;
	let sec = s * 1000;
	summ = hours + min + sec;
	console.log(summ);
	return summ;
}

 past(0, 1, 1);
*/
/*
function simpleMultiplication(number) {
	// your code........
	let result;
	let even = number % 2;
	//console.log(even);
	if (even == 0) {
		result = number * 8;
	} else {
		result = number * 9;
	}
	//console.log(result);
	return result;
	// (result === 0) ? result = number * 8 : result = number *9;
}
simpleMultiplication(2);
*/
/*
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	// TODO
	let result;
	result = (distanceToPump <= mpg * fuelLeft) ? true : false;
	console.log(result);
	return (distanceToPump <= mpg * fuelLeft) ? true : false;
};
zeroFuel(100, 50, 1);
*/
/*
const quarterOf = (month) => {
	// Your code here

	let result = (month >= 1 && month <= 3) ? 1 :
		(month >= 4 && month <= 6) ? 2 :
		(month >= 7 && month <= 9) ? 3 : 4;
	return result;

};
*/
/*
const rps = (p1, p2) => {
	let player1 = 1;
	let player2 = 2;
	let n;
	
	//win p1
	if (p1 === p2) {
		console.log('Draw!');
		return 'Draw!';
	} else if (p1 === 'scissors' && p2 === 'paper') {
		console.log(player1);
		 n = player1;
	} else if (p1 === 'scissors' && p2 === 'rock') {
		console.log(player2);
		 n = player2;
	} else if (p1 === 'paper' && p2 === 'scissors') {
			console.log(player2);
			 n = player2;		
	} else if (p1 === 'paper' && p2 === 'rock') {
		console.log(player1);
		 n = player1;
	} else if (p1 === 'rock' && p2 === 'scissors') {
		console.log(player1);
		 n = player1;
	} else if (p1 === 'rock' && p2 === 'paper') {
		console.log(player2);
		 n = player2;
	}
	const getMsg = (n) => `Player ${n} won!`;
	return getMsg(n);
};
rps('rock', 'scissors');
*/
/*
function correct(string) {
	// your code here
	let arr = string.split('');
	let result = [];
	arr.forEach((element, index) => {
		(element === '5') ? result[index] = 'S':
			(element === '0') ? result[index] = 'O' :
			(element === '1') ? result[index] = 'I' :
			result[index] = arr[index];
	});
	let arrstr = result.join('');
	console.log(arrstr);
	return arrstr;
}
correct('L0ND5N');
*/
/*
function feast(beast, dish) {
	//your function here
	let result = (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) ? true : false;
	console.log(result);
	return result;
}
feast("brown bear", "bear claw");
*/
/*
var uniqueInOrder = function (iterable) {
	//your code here - remember iterable can be a string or an array
	let arr = iterable.split('');
	let arr2 = iterable.split('');
	console.log(arr);
	let newArr = [];
	let summ;
	for (let i = 0; i < arr.length; i++) {
		summ=0;
		for (let j = i; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
summ+=1;
				// console.log(`Значение ${arr[i]} повторилось ${summ} раз`);
				// arr1.splice(1, arr1[j]);
			}
			
			// newArr.push(arr1[i]);
		}
		console.log(`Значение ${arr[i]} повторилось ${summ} раз`);
		if(summ===1){
			newArr.splice(1,0,arr[i]);
		}
	}
	console.log(newArr);
};
uniqueInOrder('AAAABBBCCDAABBB');
*/
/*
function abbrevName(name) {

	// code away
	let arr=name.split(' ');
	console.log(arr);
	let array1 = arr[0];
		console.log(array1);
	let array2 = arr[1];
	console.log(array2);
	console.log();
	let str1 = array1[0].toUpperCase();
		// console.log(str1);
	let str2 = array2[0].toUpperCase();
		let result=(str1+'.'+str2);
		console.log(result);
		return result;
}
abbrevName("uDkDXMITiDln chRTNebfTLkRVtnz"); //, "S.H";
*/
/*
function oddOrEven(array) {
	//enter code here
	let summ = 0;
	if (array.length) {
		array.forEach(element => {
			summ += element;
		});
		let result = summ % 2;
		if (result === 0) {
			// console.log('even');
			return 'even';
		} else {
			// console.log('odd');
			return 'odd';
		}
	} else
		console.log('even');
	return 'even';
}
oddOrEven([0]);
oddOrEven([-1023, 1, -2]);
oddOrEven([1023, 1, 3]);
*/
/*
function smash(words) {
	let arr=[];
	arr = words.join(" ");
	//console.log(arr);
	return arr;
};
smash(["hello", "world"]);
*/
// const button = document.querySelector('.button');

/*
button.onclick = () => console.log('Клик!');
button.onclick = () => console.log('Клак!');
*/
/*
button.addEventListener('click', function (e) {
	console.log('Клик!')
});
button.addEventListener('click', function (e) {
	console.log('Клак!')
});
*/
/*
const options = {
	'capture': false,
	'once': false,
	'passive': false,
};

function showConsole(event) {
	// console.log('Клик!');
	// button.removeEventListener('click', showConsole);

	// console.log(event.type);
	// console.log(event.target);
	// console.log(event.currentTarget);
	// console.log(event.clientX);
	// console.log(event.clientY);
	// console.log(event);

}
button.addEventListener('click', showConsole, options);
// button.addEventListener('mouseenter', showConsole);
*/
/*
const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');

block.addEventListener('click', function (event) {
	console.log('Клик на Блок!');
	//console.log(event.target);
});

blockInner.addEventListener('click', function (event) {
	console.log('Клик на Блок второго уровня!');
}, {
	'capture': true
});
blockInnerInner.addEventListener('click', function (event) {
	console.log('Клик на Блок третькго уровня!');
	// event.stopPropagation();
});
*/
/*
const button=document.querySelectorAll('.button');

function showConsole() {
	console.log('Ура!');
}
button.forEach(buttonItem=>{
	buttonItem.addEventListener('click',showConsole,{'once':true});
});
*/
/*
const lesson = document.querySelector('.lesson');

function showConsole() {
	console.log('Ура!');
}
lesson.addEventListener('click', function (event) {
	if (event.target.closest('.button')) {
		showConsole();
	}
});
*/
/*

const menuBody = document.querySelector('.menu');

document.addEventListener('click', menu);
document.addEventListener('keydown', (event) => {
	console.log(event.key);
	if (event.key === 'Escape') {
		menuBody.classList.remove('_active');
	}
})

function menu(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}
*/

// const link = document.querySelector('.link');

/*
link.addEventListener('click', function (event) {
	console.log('Наши действия');
	event.preventDefault();
});
*/
/*
link.onclick=function () {
	console.log('Нажи действия');
	return false;
}
*/
/*
link.addEventListener('click', function (event) {
	console.log('Наши действия');
	event.preventDefault();
}, {'passive':true});
*/
/*
button = document.querySelector('.button');

button.addEventListener('mousedown', function (event) {
	console.log(`Нажата кнопка ${event.which}`);
});

button.addEventListener('click', function (event) {
	console.log(`Нажата основная кнопка мыши`);
});

button.addEventListener('contextmenu', function (event) {
	console.log(`Вызвоно контекстное меню(не основная кнопка мыши)`);
});
*/
/*
blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener('mousemove', (event) =>
	{blockForMouse.innerHTML = `clientX - ${event.clientX}<br> clientY - ${event.clientY}`;
});
*/
// const blockForMouse = document.querySelector('.block-for-mouse');

/*
blockForMouse.addEventListener('mouseover', (event) => {
	blockForMouse.innerHTML = `Курсор над элементом`
});

blockForMouse.addEventListener('mouseout', (event) => {
	blockForMouse.innerHTML = `Курсор уходит с элемента`;
});
*/
/*
blockForMouse.addEventListener('mouseover', (event) => {
	console.log(event.target);
	console.log(event.relatedTarget);
});

blockForMouse.addEventListener('mouseout', (event) => {
	console.log(event.target);
	console.log(event.relatedTarget);
});
*/
/*
blockForMouse.addEventListener('mouseover', (event) => {
	console.log(`Курсор над элементом`);
});

blockForMouse.addEventListener('mouseout', (event) => {
	console.log(`Курсор уходит с элемента`);
});
*/
/*
blockForMouse.addEventListener('mouseenter', (event) => {
	console.log(`Курсор над элементом`);
});

blockForMouse.addEventListener('mouseleave', (event) => {
	console.log(`Курсор уходит с элемента`);
});
*/
/*
blockForMouse.addEventListener('mouseover', (event) => {
	let target = event.target.closest('span');
	if (!target) return;
	target.style.cssText = 'background-color:#77608d;';
});
blockForMouse.addEventListener('mouseout', (event) => {
	let target = event.target.closest('span');
	if (!target) return;
	target.style.cssText = '';
});
*/






/*
const gragField = document.querySelector('.drag-field');
const gragItem = document.querySelector('.drag-field__item');

gragItem.addEventListener("mousedown", function (event) {

	let coordsItemX = event.clientX - gragItem.getBoundingClientRect().left;
	let coordsItemY = event.clientY - gragItem.getBoundingClientRect().top;

	let gragItemSizes = {
		width: gragItem.offsetWidth,
		height: gragItem.offsetHeight
	}
	let gragFieldSizes = {
		left: gragField.getBoundingClientRect().left + scrollX,
		top: gragField.getBoundingClientRect().top + scrollY,
		right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
		bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
	}

	gragItem.style.position = 'absolute';
	gragItem.style.zIndex = 1000;
	document.body.append(gragItem);

	moveItem(event.pageX, event.pageY);

	function moveItem(pageX, pageY) {
		let currentX = pageX - coordsItemX;
		let currentY = pageY - coordsItemY;

		if (
			currentX + gragItemSizes.width <= gragFieldSizes.right &&
			currentX >= gragFieldSizes.left
		) {
			gragItem.style.left = `${currentX}px`;
		} else {
			if (currentX + gragItemSizes.width > gragFieldSizes.right) {
				gragItem.style.left = `${gragFieldSizes.right - gragItemSizes.width}px`;
			}
			if (currentX < gragFieldSizes.left) {
				gragItem.style.left = `${gragFieldSizes.left}px`;
			}
		}
		if (
			currentY + gragItemSizes.height <= gragFieldSizes.bottom &&
			currentY >= gragFieldSizes.top
		) {
			gragItem.style.top = `${currentY}px`;
		} else {
			if (currentY + gragItemSizes.height > gragFieldSizes.bottom) {
				gragItem.style.top = `${gragFieldSizes.bottom - gragItemSizes.height}px`;
			}
			if (currentY < gragFieldSizes.top) {
				gragItem.style.top = `${gragFieldSizes.top}px`;
			}
		}
	}

	let currentDroppable = null;

	function onDragItem(event) {
		moveItem(event.pageX, event.pageY);

		gragItem.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
		gragItem.hidden = false;

		if (!elemBelow) return;
		let droppableBelow = elemBelow.closest('.drag-field__point');

		if (currentDroppable !== droppableBelow) {
			if (currentDroppable) {
				currentDroppable.classList.remove('_active');
				gragItem.classList.remove('_active');
			}
			currentDroppable = droppableBelow;
			if (currentDroppable) {
				currentDroppable.classList.add('_active');
				gragItem.classList.add('_active');
			}
		}
	}
	document.addEventListener('mousemove', onDragItem);

	document.addEventListener("mouseup", function (event) {
		document.removeEventListener('mousemove', onDragItem);
	}, {
		"once": true
	});
});
gragItem.addEventListener("dragstart", function (event) {
	event.preventDefault();
});
*/
/*
document.addEventListener('keydown',(event)=>{
	console.log(`Ната клавиша ${event.code}(${event.key})`);
});

document.addEventListener('keyup', (event) => {
	console.log(`Ната клавиша ${event.code}(${event.key})`);
});
*/
/*
document.addEventListener('keydown', (event) => {
	if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey))
		console.log(`Отмена действий!`);
})
*/
/*
document.addEventListener('keydown', (event) => {
	console.log(`Нажата клавиша ${event.code}(${event.key})`);
	console.log(event.repeat);
});
*/
/*
const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');

txtCounter.innerHTML = txtItemLimit;
txtItem.addEventListener('keyup', txtSetCounter);

txtItem.addEventListener('keydown',function (event) {
	if(event.repeat) txtSetCounter();
});

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}
*/
/*
window.addEventListener('scroll', function (event) {
	event.preventDefault();
	console.log(`${scrollY}px`);
});
*/
/*
document.addEventListener('DOMContentLoaded', readyDom);

window.addEventListener('load', readyLoad);

function readyDom() {
	const image = document.querySelector('.image');
	console.log(document.readyState);
	console.log(`DOM загружен!`);
	console.log(image.offsetWidth);

}


function readyLoad() {
	const image = document.querySelector('.image');
	console.log(document.readyState);
	console.log(`Страница загружена!`);
	console.log(image.offsetWidth);
}
*/
/*
window.addEventListener('beforeunload', beforeUnLoad);

function beforeUnLoad(event) {
	event.preventDefault();
	event.returnValue = '';
}
*/
/*
function doubleChar(str) {
	// Your code here
	
	console.log(str);
	let arrstr='';
	for (const iterator of str) {
		arrstr += iterator + iterator;
	}
	return arrstr;
	console.log(arrstr);
}
doubleChar('Hello World');
*/
/*
function isPythagoreanTriple(integers) {
	// Good luck friends!
	let summ = 0;
	let c = integers[2] * integers[2];
	let b = integers[1] * integers[1];
	let a = integers[0] * integers[0];
	summ = a + b;
	if (c === summ) {
		console.log(true + ` ${c} and ${summ}`);
		return true;
	} else {
		console.log(false + ` ${c} and ${summ}`);
		return false;
	}
}

isPythagoreanTriple([3, 5, 9]);
*/
/*
function countSheeps(arrayOfSheep) {
	// TODO May the force be with you
	let summ=0;
	arrayOfSheep.forEach(element => {
		if (element == true) {
			summ++;
		}

	});
	// console.log(summ);
	return summ;
}

countSheeps([true, true, true, false,
	true, true, true, true,
	true, false, true, false,
	true, false, false, true,
	true, true, true, true,
	false, false, true, true
]);
*/
/*
function isDivisible(n, x, y) {
	let resultX = 0;
	let resultY = 0;
	resultX = n % x;
	resultY = n % y;
	if(resultX === 0 && resultY === 0)  {
		// console.log(true);
		return true;
	} else {
		// console.log(false);
		return false;
	}
}
	isDivisible(3, 3, 4);
	isDivisible(12, 3, 4);
*/
/*
function setAlarm(employed, vacation) {
	if (employed === true && vacation === false) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
}
*/
/*
function firstNonConsecutive(arr) {
	let difference = 0;
	let result = 0;
	difference = arr[1] - arr[0];
	console.log(difference);
	if (arr.length === 0 || arr.length === 1) {
		console.log(null);
		return null;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (!((arr[i] + difference) === arr[i + 1])) {
				result = arr[i + 1];
				console.log(result);
				return result;
			} else {
				console.log(null);
				return null;
			}
		}
	}
}
firstNonConsecutive([1, 2, 3, 4, 5, 7, 8]);
*/
/*
function isIsogram(str) {
	//...
	let result;
	let str1 = str.toLowerCase();
	if(str1.length){
	for (let i = 0; i < str1.length; i++) {
		for (let j = i + 1; j < str1.length; j++) {
			// console.log(`1-${str[i]} и 2-${str[j]}`);
			if (str1[i] === str1[j]) {
				// console.log(`1-${str1[i]} и 2-${str1[j]}`);				
				result =false;
				// console.log(result);
				return result;
			} 
				result= true;
				// console.log(result);
				// return true;
			
		}		
	}
	// console.log(result);
	return result;
}else
{result=true;
return result;}
}
// isIsogram('isogramm');
// isIsogram('Dermatoglyphics');
// isIsogram('aba');
isIsogram('moOse');
// isIsogram('isIsogram');
// isIsogram('');
*/
/*
function digitize(n) {
	//code here
	console.log(typeof n);
	let arr=String(n).split('');
	let result=arr.reverse();
	let res =+result;
	// let res2 = res.split('')
	console.log(res);
	return result;
}
digitize(35231);
*/
function XO(str) {
	//code here
	let x = 'x';
	let o = 'o';
	let result;
	let str1 = str.toLowerCase();
	let rep = str1.includes('xx');
	let rep2 = str1.includes('oo');
	if ((rep && rep2) || (!(rep && rep2))) {
result=true;
		console.log(result);
		return result;
	}else {
		result = false;
		console.log(result);
		return result;
	}


}

/*
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
function multiply(n,m) {
	let result = n * m;
	console.log(result);
	return result;
}
multiply(2, 3);