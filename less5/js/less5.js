let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

//1.Написать функцию со следующими аргументами: объект, from (значение от), to (значение до).Функция должна вернуть объект с товарами, цены которых лежат в диапазоне от значения from до значения to.Пример вызова функции getGoods(goods, 2000, 3000); в данном случае функция должна вернуть все товары,у которых цена в диапазоне от 2000 до 3000. Для проверки функции используйте объект! goods из файла forHw.js.
function getGoods(obj, from, to) {
    let arr = [];
    for(let item in obj) {
        if (obj[item].price >= from && obj[item].price <= to) {
            arr.push(obj[item].title);
        }
    }
    return arr;
};

let aprice = getGoods(goods, 2000, 3000);
console.log(aprice);
