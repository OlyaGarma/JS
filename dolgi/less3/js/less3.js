// Задание 4. Сгенерировать 5 массивов из случайных чисел (самостоятельно посмотреть про рандом). Вывести массивы и сумму их элементов на экран. Найти массив с максимальной суммой элементов. Вывести его на экран еще раз. Генерация массива и подсчет суммы - разные функции
function randomArrow(arrLength) {
	let arrow = [];
	for (let i=0; i<arrLength; i++) {
	arrow[i] = Math.floor(Math.random()*100);
	}
	return arrow;
}

function sumArr(arrow) {
	let sum = 0;
	for (let i=0; i<arrow.length; i++) {
		sum += arrow[i]
	}
	return sum;
}

function findBiggest(arrow) {
	let biggest = arrow[0];
	for (i=0; i<arrow.length; i++) {
		if (arrow[i]>biggest) {
			biggest=arrow[i];
		}
	}
	return biggest;
}

let arr1 = randomArrow(5);
console.log(arr1);
let sum1 = sumArr(arr1);
console.log(sum1);

let arr2 = randomArrow(5);
console.log(arr2);
let sum2 = sumArr(arr2);
console.log(sum2);

let arr3 = randomArrow(5);
console.log(arr3);
let sum3 = sumArr(arr3);
console.log(sum3);

let arr4 = randomArrow(5);
console.log(arr4);
let sum4 = sumArr(arr4);
console.log(sum4);

let arr5 = randomArrow(5);
console.log(arr5);
let sum5 = sumArr(arr5);
console.log(sum5);

let arrOfSums = [sum1, sum2, sum3, sum4, sum5];
console.log("суммы массивов: "+arrOfSums);

let biggestSum = findBiggest(arrOfSums);
console.log("наибольшая сумма: "+biggestSum);

