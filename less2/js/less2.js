//Задание 1. Дан массив целых чисел. Числа не отсортированы и могут повторяться. Необходимо найти в данном массиве такие два числа M и N,чтобы их сумма была равна 7. Например, 3 + 4 = 7 или 0 + 7 = 7 или -2 + 9 = 7 и тд. Для решения достаточно найти хотя бы одну подходящую пару чисел M и N. 

let arr = [6, 1, 8, 3, 4, 7, -1];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr.length; j++) {        
if (arr.indexOf(arr[i]) === arr.indexOf(arr[j])) {
    sum = 0;
    }
        else {
            sum = arr[i] + arr[j];
            if (sum === 7) {
                console.log(arr[i], arr[j]);
            };
        };
    } 
}


//Задание 3. Задать количество тарелок и количество моющего средства. Моющее средство расходуется из расчета 0,5 на одну тарелку.В цикле выводить сколько моющего средства осталось после мытья каждой тарелки В конце вывести,сколько тарелок осталось, когда моющее средство закончилось или наоборот. 

let plates = 70;
let cleanser = 15;

for (let i = plates; i > 0; i--) {
    cleanser -= 0.5;
    console.log(i, cleanser);
    if (cleanser <= 0) {break};
}


// Задание 4. Создайте 2 массива равной длины, выведите массивы на экран. Посчитайте среднее арифметическое элементов каждого массива и сообщите,для какого из массивов это значение оказалось больше (либо сообщите, что их средние арифметические равны). 

let arr1 = [7, 1, 4, 5, 3, 2, 6];
let arr2 = [1, 8, 4, 2, 3, 5, 7];
console.log(arr1, arr2);
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
    sum2 += arr2[i];
}
let average1 = sum1 / arr1.length;
let average2 = sum2 / arr2.length;
console.log(average1, average2);
if (average1 > average2) {
    console.log("cреднее арифм. массива 1 > среднего арифм. массива 2");
} else if (average2 > average1) {
    console.log("cреднее арифм. массива 2 > среднего арифм массива 1");
} else if (average1 == average2) {
    console.log("cреднее арифм. массива 1 = среднему арифм. массива 2");
};

// Задание 5. Одну на выбор (можно решить все). Кому js дается сложно, решайте все три, тренируйтесь: */
// 5.1. Пользователь вводит число, создать массив заданного размера, вывести элементы массива в обратном порядке

let number = prompt("Необходимо ввести число");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
    let rand = [];
        for (let i = 0; i < number; i++) {
        rand[i] = getRandomInt(0, 31);
        console.log(rand[i]);
}
    console.log(rand.reverse());

// 5.2. Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128

var num = 1;
    for (let i = 0; i < 20; i++) {
	num *= 2;
	console.log(num);
};

