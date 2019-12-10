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

let books = [
  { author: "Толстой", title: "Война и мир" },
  { author: "Гончаров", title: "Обломов" },
  { author: "Лермонтов", title: "Герой Нашего Времени" }
];

//1. Написать функцию со следующими аргументами: объект, from (значение от), to (значение до). Функция должна вернуть объект с товарами, цены которых лежат в диапазоне от значения from до значения to. Пример вызова функции getGoods(goods, 2000, 3000); в данном случае функция должна вернуть все товары, у которых цена в диапазоне от 2000 до 3000. Для проверки функции используйте объект! goods из файла forHw.js.
function getGoods(obj,from,to) {
    let res = [];
    for (let good in obj) {
        if (obj[good].price >= from && obj[good].price <= to) {
            res.push(obj[good].title);
      }
    }
    return res;
  }
    console.log(getGoods(goods,399,2399));

//2 Написать функцию addToCart(obj, title, countToCart) {} , где obj - объект, title - название товара, count - количество товара, которое нужно добавить в корзину. Функция ищет товар с указанным названием, если количество позволяет, то уменьшает количество товара на countToCart, если не позволяет, то выводит информацию об этом в консоль и завершает работу. Для проверки функции используйте объект! goods из файла forHw.js.
function addToCart(obj,title,countCart) {
  for (let good in obj) {
    if (obj[good].title == title) {
      if (obj[good].count >= countCart) {
        obj[good].count -= countCart;
        return `Товар ${obj[good]["title"]} добавлен в корзну ${countCart} уп.`;
      } else {
        return "Данного товара нет в наличии";
      }
    }
  }
}
console.log(addToCart(goods, "арфа", 2));

//3. Напишите функцию, которая отсортирует массив объектов books по значению свойства title. Массив в файле forHw.js. Функцию сортировки разберите самостоятельнj.
function objectSort(arr) {
  let sortedArr = arr.sort((a, b) => {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
    }
        return 0;
  });
        return sortedArr;
}
        console.log(objectSort(books));
