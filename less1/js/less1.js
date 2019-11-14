// Дано целое число. С помощью тернарного оператора определить четное оно или нет.
let num = 6;
let result = (num % 2) === 0 ? "Число - четное" : "Число - нечетное";
console.log(result);

// Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n. Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.
let m = 9.5;
let n = 11.45;
let diffM = m - 10;
let diffN = n - 10;
let close = Math.abs(diffM) < Math.abs(diffN) ? console.log(m) : console.log(n);

// Задайте высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь. Узнайте, что больше: ширина или высота и выведите информацию об этом в консоль.
let length = 5;
let width = 9;
let height = 9;
let area = 2 * ((length * height) + (width * height) + (length * width));
console.log(area);
let larger = width >= height ? "Ширина больше или равна высоте" : "Высота больше ширины";
console.log(larger);