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