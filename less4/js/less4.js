//1. Допустим, пользователь вводит названия городов через пробел. Вы их присваиваете переменной.Переставьте названия так, чтобы они были упорядочены по алфавиту.
let city = prompt("","");
    console.log(city);
let arr = city.split(" ");
    console.log(arr.sort());

//2. Найти все вхождения подстроки в строку. Строку и подстроку вводит пользователь.
let string = prompt(" Введите строку", "ввести предложение");
let substring = prompt("Введите подстроку", "под");
    console.log(string);
    console.log(substring);

    for (let i = 0; i < string.length; i++) {
    let str = string[i];
    if(str === substring) {
        console.log(i);
    }
};

//3.Написать функцию, которая проверяет, является ли строка палиндромом (использовать стандартные методы)!

palindrome = str => {
    str = str.toLowerCase();
    console.log(str);
        let tr = str.split('').reverse().join('');
        console.log(tr);
        if (str === tr) {
        console.log("+");
    }   else {
        console.log("-");
    }
};
        palindrome("qwe");
