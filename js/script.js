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
window.addEventListener('beforeunload', beforeUnLoad);

function beforeUnLoad(event) {
	event.preventDefault();
	event.returnValue = '';
}

























//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачу:
*/
/*
Пишем форму поиска, которая открывается по клику на иконку
а закрывается по клику на любое место страницы, кроме самой формы.
Также, закрыть форму можно по клавише эскейп (Esc) на клавиатуре.
Для поля ввода поискового запроса добавляем счетчик символов.
*/
//========================================================================================================================================================
//========================================================================================================================================================


// Введение в JS события

/*
Отлавливать возникновение события мы будем с помощью
специальных обработчиков.

Любому событию можно назначить обработчик, то есть функцию,
которая сработает, как только произойдет нужное нам событие.
Именно благодаря этим обработчикам JavaScript может
реагировать на действия пользователя.

Есть несколько способов назначить событию обработчик.
Сейчас о них и поговорим
*/

// -----------------------------

// Использование атрибута HTML

// -----------------------------

// Использование DOM-объекта
//const button = document.querySelector('.button');

/*
button.onclick = function () {
	console.log('Клик!');
}
*/
/*
function showConsole() {
	console.log('Клик!');
}
button.onclick = showConsole;

// Важно! Без круглых скобок!
*/

// -----------------------------

/*
Фундаментальный недостаток описанных выше способов
назначения обработчика – невозможность повесить несколько
обработчиков на одно событие.
Каждое новое назначение обработчика перезапишет предыдущее:
*/
/*
const button = document.querySelector('.button');

button.onclick = function () {
	console.log('Клик!');
}
button.onclick = function () {
	console.log('Клак!');
}
*/

//===================================================

// Обработчик событий addEventListener/removeEventListener

/*
Существует основной способ назначения
обработчиков при помощи специальных
методов addEventListener и removeEventListener,
которые лишены этого недостатка

element.addEventListener(event, handler[, options]);
*/
/*
const button = document.querySelector('.button');

button.addEventListener("click", function (e) {
	console.log('Клик!');
});
button.addEventListener("click", function (e) {
	console.log('Клак!');
});
*/
// ------

/*
const button = document.querySelector('.button');

function showConsole() {
	console.log('Клик!');
	button.removeEventListener("click", showConsole);
}

button.addEventListener("click", showConsole);
//button.removeEventListener("click", showConsole);

*/

// ------

/*
// Опции

const options = {
	"capture": false, // фаза, на которой должен сработать обработчик
	"once": true, // если true, тогда обработчик будет
	//автоматически удалён после выполнения.
	"passive": false // если true, то указывает, что обработчик
	//никогда не вызовет preventDefault()
}

const button = document.querySelector('.button');

function showConsole() {
	console.log('Клик!');
}

button.addEventListener("click", showConsole, options);
*/

/*
Метод addEventListener может показаться сложнее чем, скажем, onclick.
Но, из-за того что он обладает преимуществом
"прослушивания" нескольких событий,
а также учитывая тот факт что существуют события которые можно отловить
только при помощи этого метода.
В результате разработчики чаще используют именно его.
*/

//====================================================

// Объект события
/*
Чтобы хорошо обработать событие, могут понадобиться детали того,
что произошло.Не просто «клик» или «нажатие клавиши»,
а также – какие координаты указателя мыши, какая клавиша
нажата и так далее.
Когда происходит событие, браузер создаёт объект события,
записывает в него детали и передаёт его в качестве
аргумента функции - обработчику.
*/
/*
const button = document.querySelector('.button');

function showConsole(event) {
	// Тип события
	//console.log(event.type);
	// Объект на котором сработал обработчик
	//console.log(event.target);
	// Объект к которому назначен обработчик
	//console.log(event.currentTarget);
	// Положение курсора по оси X
	//console.log(event.clientX);
	// Положение курсора по оси Y
	//console.log(event.clientY);

	// Все детали события
	//console.log(event);
}

button.addEventListener("click", showConsole);
//button.addEventListener("mouseenter", showConsole);
*/

//===================================================


// Всплытие и погружение
/*
const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');
*/
/*
Всплытие
Когда на элементе происходит событие, обработчики
сначала срабатывают на нём, потом на его родителе,
затем выше и так далее, вверх по цепочке предков.
*/
/*
Погружение
Для того чтобы что-то всплыло, оно должно сначало погрузиться :)
*/
/*
block.addEventListener("click", function (event) {
	console.log('Клик на Блок!');
	//console.log(event.target);
});
blockInner.addEventListener("click", function (event) {
	console.log('Клик на Блок второго уровня!');
}, { "capture": false });
blockInnerInner.addEventListener("click", function (event) {
	console.log('Клик на Блок третьего уровня!');
	// Остановка всплытия
	//event.stopPropagation();
});
*/
/*
В современной разработке стадия погружения используется очень редко,
обычно события обрабатываются во время всплытия.
*/

//===================================================

// Делегирование событий

/*
Всплытие и перехват событий позволяет реализовать
один из самых важных приёмов разработки – делегирование.
*/
/*
const button = document.querySelectorAll('.button');

function showConsole() {
	console.log('Ура!');
}
button.forEach(buttonItem => {
	buttonItem.addEventListener("click", showConsole);
});
*/

// -----------------

/*
const lesson = document.querySelector('.lesson');

function showConsole() {
	console.log('Ура!');
}
lesson.addEventListener("click", function (event) {
	if (event.target.closest('.button')) {
		showConsole();
	}
});
*/


// Пример с меню
/*
const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}
*/

//===================================================

// Действия браузера по умолчанию

/*
Многие события автоматически влекут за собой действие браузера.
Например:
- Клик по ссылке инициирует переход на новый URL.
- Нажатие на кнопку «отправить» в форме – отсылку её на сервер.
- Зажатие кнопки мыши над текстом и её движение
	в таком состоянии – инициирует его выделение и т.д.

Если мы обрабатываем событие в JavaScript,
то зачастую такое действие браузера нам не нужно.
К счастью, его можно отменить.
*/
/*
const link = document.querySelector('.link');
*/
/*
link.addEventListener("click", function (event) {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	event.preventDefault();
});
*/
/*
link.onclick = function () {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	return false;
}
*/

/*
Необязательная опция passive: true для addEventListener
сигнализирует браузеру, что обработчик не собирается выполнять
preventDefault(). Почему это может быть полезно ?
Есть некоторые события, как touchmove на мобильных
устройствах(когда пользователь перемещает палец по экрану),
которое по умолчанию начинает прокрутку, но мы можем отменить
это действие, используя preventDefault() в обработчике.
Поэтому, когда браузер обнаружит такое событие,
он должен для начала запустить все обработчики и после,
если preventDefault не вызывается нигде, он может начать прокрутку.
Это может вызвать ненужные задержки в пользовательском интерфейсе.
Опция passive: true сообщает браузеру, что обработчик
не собирается отменять прокрутку.Тогда браузер начинает её немедленно,
обеспечивая максимально плавный интерфейс, параллельно обрабатывая событие.
Для некоторых браузеров(Firefox, Chrome) опция passive по умолчанию
включена в true для таких событий, как touchstart и touchmove.
*/
/*
const link = document.querySelector('.link');

link.addEventListener("click", function (event) {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	event.preventDefault();
}, { "passive": true });
*/
//===================================================

// Основы событий мыши

// Типы событий мыши
/*
Мы можем разделить события мыши на две категории:
«простые» и «комплексные».
*/

// Простые события
//Самые часто используемые простые события:
/*
mousedown / mouseup - Кнопка мыши нажата / отпущена над элементом.
mouseover / mouseout - Курсор мыши появляется над элементом и уходит с него.
mousemove - Каждое движение мыши над элементом генерирует это событие.
contextmenu - Вызывается при попытке открытия контекстного меню,
					как правило, нажатием правой кнопки мыши.
					Но, заметим, это не совсем событие мыши,
					оно может вызываться и специальной клавишей клавиатуры.
*/
//Комплексные события
/*
click - Вызывается при mousedown, а затем mouseup над одним
и тем же элементом, если использовалась основная кнопка мыши.
dblclick - Вызывается двойным кликом на элементе.
Комплексные события состоят из простых, поэтому
в теории мы могли бы без них обойтись.
Но хорошо, что они существуют, потому что работать с ними очень удобно.
*/


/*
const button = document.querySelector('.button');

button.addEventListener("mousedown", function (event) {
	console.log(`Нажата кнопка ${event.which}`);
});

button.addEventListener("click", function (event) {
	console.log('Нажата основная кнопка мыши');
});

button.addEventListener("contextmenu", function (event) {
	console.log('Вызвано контекстное меню (не основная кнопка мыши)');
});
*/
/*
event.which = 1 - Нажата основная кнопка мыши (обычно левая)
event.which = 2 - Нажата средняя кнопка мыши (колесо)
event.which = 3 - Нажата не основная кнопка мыши (обычно правая)
*/

// Координаты: clientX/Y, pageX/Y
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mousemove", function (event) {
	blockForMouse.innerHTML =
		`clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});
*/

//------------------

// Наведение мыши: mouseover/out, mouseenter/leave

//События mouseover/mouseout, relatedTarget

/*
Событие mouseover происходит в момент, когда курсор оказывается
над элементом, а событие mouseout – в момент,
когда курсор уходит с элемента.
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
	blockForMouse.innerHTML = `Курсор над элементом`;
});
blockForMouse.addEventListener("mouseout", function (event) {
	blockForMouse.innerHTML = `Курсор уходит с элемента`;
});
*/

/*
Эти события являются особенными, потому что у них имеется свойство
relatedTarget. Оно «дополняет» target. Когда мышь переходит
с одного элемента на другой, то один из них будет target,
а другой relatedTarget.

Для события mouseover:
event.target – это элемент, на который курсор перешёл.
event.relatedTarget – это элемент,
с которого курсор ушёл(relatedTarget → target).

Для события mouseout наоборот:
event.target – это элемент, с которого курсор ушёл.
event.relatedTarget – это элемент,
на который курсор перешёл(target → relatedTarget).
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
	console.log(event.target);
	console.log(event.relatedTarget);
});
blockForMouse.addEventListener("mouseout", function (event) {
	console.log(event.target);
	console.log(event.relatedTarget);
});
*/

/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
	console.log(`Курсор над элементом`);
});
blockForMouse.addEventListener("mouseout", function (event) {
	console.log(`Курсор уходит с элемента`);
});
*/


// События mouseenter и mouseleave
/*
Пара важных отличий:
1) Переходы внутри элемента, на его потомки и с них, не считаются.
2) События mouseenter / mouseleave не всплывают.
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseenter", function (event) {
	console.log(`Курсор над элементом`);
});
blockForMouse.addEventListener("mouseleave", function (event) {
	console.log(`Курсор уходит с элемента`);
});
*/

//Делегирование событий наведения мыши
/*
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseover", function (event) {
	let target = event.target.closest('span');
	// переход не на <span> - игнорировать
	if (!target) return;
	target.style.cssText = `background-color: #77608d;`;
});
blockForMouse.addEventListener("mouseout", function (event) {
	let target = event.target.closest('span');
	// переход не на <span> - игнорировать
	if (!target) return;
	target.style.cssText = ``;
});
*/

//-------------------------

// Перетаскивание Drag`n`Drop
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
	}, { "once": true });
});
gragItem.addEventListener("dragstart", function (event) {
	event.preventDefault();
});
*/


//===================================================

// Клавиатура

/*
Основные события при работе с клавиатурой это:
	keydown – происходит при нажатии клавиши
	keyup – при отпускании клавиши
*/

// event.code и event.key

/*
document.addEventListener("keydown", function (event) {
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
});
document.addEventListener("keyup", function (event) {
	console.log(`Отжата клавиша ${event.code} (${event.key})`);
});
*/

/*
Если пользователь работает с разными языками, то при переключении
на другой язык символ изменится с "G" на совершенно другой.
Получившееся станет новым значением event.key,
тогда как event.code останется тем же: "KeyG".
*/

/*
document.addEventListener('keydown', function (event) {
	if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
		console.log('Отмена действия!');
	}
});
*/


/*
Автоповтор
При долгом нажатии клавиши возникает автоповтор: keydown срабатывает
снова и снова, и когда клавишу отпускают, то отрабатывает keyup.
Так что ситуация, когда много keydown и один keyup, абсолютно нормальна.
Для событий, вызванных автоповтором, у объекта события
свойство event.repeat равно true.
*/
/*
document.addEventListener("keydown", function (event) {
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
	console.log(event.repeat);
});
*/

/*
// Пример
const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event) {
	if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}
*/

/*
document.addEventListener('keyup', function (event) {
	if (event.code === 'Escape') {
		menuBody.classList.remove('_active');
	}
});
*/

//===================================================

// Прокрутка (скролл)
/*
window.addEventListener('scroll', function (event) {
	//кол-во прокрученных пикселей по вертикали
	// scrollY или pageYOffset (устарел)
	// кол-во прокрученных пикселей по горизонтали
	// scrollX или pageXOffset (устарел)

	console.log(`${scrollY}px`);
});
*/
// Предотвращение прокрутки
/*
Нельзя предотвратить прокрутку, используя event.preventDefault()
в обработчике scroll,  потому что он срабатывает после того,
как прокрутка уже произошла.

Но можно предотвратить прокрутку, используя event.preventDefault()
на событии, которое вызывает прокрутку, например,
на событии keydown для клавиш pageUp и pageDown.

Способов инициировать прокрутку много, более надёжный
способ – использовать CSS, свойство overflow: hidden;.
*/


/*
Использование

Событие прокрутки scroll позволяет реагировать на прокрутку страницы
или элемента. Есть много хороших вещей, которые при этом можно сделать.

- Показать / скрыть дополнительные элементы управления или информацию,
основываясь на том, в какой части документа находится пользователь.
Например анимация при скроле или ленивая подгрузка
- Подгрузить данные, когда пользователь прокручивает страницу вниз
до конца. Бесконечный скрол.

По ссылкам в описании есть видео с примерами реализации этого
функционала с помощью события scroll. Но, более интересным решением
данных задач будет использование IntersectionObserver, который позволяет
веб-приложениям асинхронно следить за изменением пересечения
элемента с его родителем или областью видимости документа.

Подробно об IntersectionObserver я расскажу в отдельном видео

*/

//===================================================

// События загрузки страницы
/*
1) DOMContentLoaded – браузер полностью загрузил HTML,
	было построено DOM - дерево, но внешние ресурсы,
	такие как картинки <img> и стили, могут быть ещё не загружены.
2) load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.)
3) beforeunload / unload – пользователь покидает страницу.
*/

/*
document.readyState - состояние загрузки

Есть три возможных значения:
"loading" – документ загружается.
"interactive" – документ был полностью прочитан.
"complete" – документ был полностью прочитан
и все ресурсы(такие как изображения) были тоже загружены.
*/


/*
// Событие DOMContentLoaded срабатывает на объекте document
document.addEventListener("DOMContentLoaded", readyDom);

// Событие load срабатывает на объекте window
window.addEventListener("load", readyLoad);

function readyDom() {
	const image = document.querySelector('.image');
	console.log(document.readyState);
	console.log('DOM загружен!');
	console.log(image.offsetWidth);
}
function readyLoad() {
	console.log(document.readyState);
	const image = document.querySelector('.image');
	console.log('Страница загружена!');
	console.log(image.offsetWidth);
}
*/


/*
// Событие beforeunload срабатывает на объекте window
window.addEventListener("beforeunload", beforeUnLoad);

function beforeUnLoad(event) {
	// Отмените событие, как указано в стандарте.
	event.preventDefault();
	// Chrome требует установки возвратного значения.
	event.returnValue = '';
}


// Событие unload срабатывает на объекте window
window.addEventListener("unload", function (e) {
	// Отправка статистики в фоновом режиме и т.д.
	// navigator.sendBeacon(url, data)
	// https://w3c.github.io/beacon/.
});
*/

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================