// Написать функцию, которая будет осуществлять сортировку таблицы по значениям столбца при нажатии на название этого столбца.

let articles = [{
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

function generateTable(arr) {
    let table = document.createElement("table");
    table.setAttribute("border", "1px solid black");
    let firstElementLen = Object.keys(arr[0]).length;
    let Row = table.insertRow();
    for (let j = 0; j < firstElementLen; j++) {
        let Cell = Row.insertCell();
        Cell.innerHTML = Object.keys(arr[0])[j].toUpperCase();
    }
    for (let i = 0; i < arr.length; i++) {
        let Row = table.insertRow();
        for (let j = 0; j < firstElementLen; j++) {
            let Cell = Row.insertCell();
            Cell.innerHTML = Object.values(arr[i])[j];
        }
    }
    table.addEventListener("click", tableSort.bind(table, arr));
    document.getElementById("table1").append(table);

}
 generateTable(articles);


function tableSort(arr, event) {
    let tbl = document.getElementsByTagName("table")[0];

    let clickTable = event.target.innerHTML.toLowerCase();
    tbl.remove();
    console.log(clickTable, arr);
    let sortingArr = arr.sort((a, b) => {
        if (a[clickTable] > b[clickTable]) {
            return 1;
        }
        if (a[clickTable] < b[clickTable]) {
            return -1;
        }
        return 0;
    });
    console.log(sortingArr);
    generateTable(sortingArr);
    return sortingArr;
};

//Написать функцию генерации поля n x n (значение n - аргумент функции), в ячейки рандомно спрятать несколько призов.  Пользователю дается 3 попытки найти их - по нажатию на ячейку либо открывается приз (иконка, изменения цвета и тд), либо иконка,  сообщающая, что приза нет. Количество оставшихся попыток выводим рядом с игровым полем.

function generatePrize(n) {
    let gameTable = document.createElement("div");
        gameTable.classList.add("game");
        gameTable.style.width = (350 * n) + "px";
        gameTable.style.height = (50 * n) + "px";

    let attempt = document.createElement("div");
    let counter = 3;
        attempt.style.width = (150 * n) + "px";
        attempt.textContent = `Attempts: ${counter}`;

    let counterPresent = 0;
    let arr = [];
        for (let i = 0; i < (Math.floor((n * n) / 7)); i++) {
        arr[i] = Math.floor(Math.random() * (n * n))
    };
        for (i = 1; i <= (n * n); i++) {
        let box = document.createElement("p");
        box.classList.add("box");
        if (arr.includes(i)) {
            box.classList.add("priseBox");
        } else {
            box.classList.add("emptyBox")
        };
            box.addEventListener("click", boxOpen);
        function boxOpen() {
            if (counter > 0) {
                if (this.classList.contains("priseBox")) {
                    box.classList.add("win");
                    counterPresent++;
                } else {
                    box.classList.add("no");
                };
                counter--;
                attempt.textContent = `Attempts: ${counter}`;
            }
            if (counter === 0) {
                attempt.textContent = `Attempts are over. YOU WIN ${counterPresent} PRISE`;
            };
        };
        gameTable.append(box);
    };
    document.body.append(gameTable);
    document.body.append(attempt);
};
    generatePrize(3);
// Задание 3  Дан чекбокс и поле для ввода текста, если чекбокс отмечен галочкой, то поле должно быть доступным для ввода данных,  в противном случае, поле остается заблокированным.
let check = document.forms.click;
check.checkbox.addEventListener("click", getClick);

function getClick() {
    check.text.disabled = !check.checkbox.checked;
}

// Задание 4 Дана форма и два поля: логин и пароль. Длина логина от 4 до 10 символов, пароля от 6. Реализовать обработку следующих событий:

let form = document.forms.lesson;
let password = form.elements.password;
let login = form.elements.login;
login.addEventListener("focus", focusOnElem);
password.addEventListener("focus", focusOnElem);

function focusOnElem() {
    this.nextElementSibling.classList.add("error");
}

login.addEventListener("blur", focusOutLogin);
password.addEventListener("blur", focusOutPassword);

function focusOutLogin() {
    if (this.value.length < 3 || this.value.length > 10) {
        this.nextElementSibling.classList.add("error");
    } else {
        this.nextElementSibling.classList.remove("error");
        this.nextElementSibling.classList.add("success");
    }
}

function focusOutPassword() {
    if (this.value.length < 6) {
        this.nextElementSibling.classList.add("error");
    } else {
        this.nextElementSibling.classList.remove("error");
        this.nextElementSibling.classList.add("success");
    }
}
form.addEventListener("submit", takeForm);

function takeForm(event) {
    event.preventDefault();
    console.log("отправка");
    console.log(this.elements.login.value)
    let formData = new FormData(this);
    console.log(formData);
    console.log(formData.getAll("login"));
    console.log(formData.getAll("password"))
}
let clean = document.getElementsByClassName("info-block");
form.addEventListener("reset", outForm);

function outForm(event) {
    event.preventDefault();
    login.value = null;
    password.value = null;
    this.nextElementSibling.classList.add("error");
    this.nextElementSibling.classList.remove("success");
    for (elem of clean) {
        elem.classList.add("error");
        elem.classList.remove("success");
    }
}