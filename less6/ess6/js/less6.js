let articles = [
    {
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

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

    function generateTable(data) {
        let table = document.createElement("table");    
        let cap = table.createCaption();                        
        cap.innerText = "Таблица1";

        let row = table.insertRow(0);                     
        let row2 = table.insertRow(1);                    

        for( let elem in data[0]){
            let  cell = row.insertCell(elem);                  
        cell.innerText = elem.toUpperCase();                
        cell.style.border= "2px solid black";
        }

        for(let i=1;i<data.length+1;i++){
            row2 = table.insertRow(i);                          

        for(let elem2 in data[0]) {
            let cell2 = row2.insertCell(elem2);          
            cell2.innerText = data[i-1][elem2];          
            cell2.style.border= "2px solid black";
            }
                };
        document.body.append(table); 
        generateTable(articles); 
        generateTable(goods); 