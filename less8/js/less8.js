let p= document.getElementById("point"); 
let canvas = document.getElementsByTagName("canvas")[1]; 

canvas.width = 600;
canvas.height = 400;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0,0,900, 600);

let canvas2 = document.getElementsByTagName("canvas")[0]; 
canvas2.width = 600;
canvas2.height = 64;

let ctx2 = canvas2.getContext("2d");
ctx2.fillStyle = "blue";
ctx2.fillRect(0,0,900, 600);

let point =0;
let point2 =0;                      

p.innerText="Счет: "+point2;        

let pepa = {                      
    img: 'pepa.png',
    x: 22,
    y: 15,
    width: 128,
    height: 128
};

let corX=genX();                   
let corY=genY();

let georg = {                     
    img: 'georg.png',
    x: corX,
    y: corY,
    width: 128,
    height: 128
};
let georg2 = {                    
    img: 'georg2.png',
    x: 0,
    y: 0,
    width: 64,
    height: 64
};

function genX()                     
{
    let x= Math.random()*1000^0;
    if(x<=canvas.width -128) {      
        return x;
    }
    else{
        return genX();
    }
}
function genY()                    
{
    let y= Math.random()*1000^0;
    if(y<=canvas.height -128)
    {
        return y;
    }
    else{
        return genY();
    }
}

function drawImg(obj,ctx1,...x1) {    
    let img = new Image();
    img.src = 'img/' + obj.img;
    img.onload = () => {
        if(ctx1===1)                 
        {
            ctx.drawImage(img,obj.x + x1, obj.y, obj.width, obj.height  );
        }
        if(ctx1===2)                    
        {
            ctx2.drawImage(img,obj.x + x1, obj.y, obj.width, obj.height );
        }
    }
}


function move(obj, event) {             


    console.log(obj.y);
    if (event.code === "KeyD" && obj.x<=(canvas.width-138)) {
        console.log("перемещение вправо");
        clearImg(obj);
        obj.x += 2;
        drawImg(obj, 1);
    } else if (event.code === "KeyA" && obj.x>=0) {
        console.log("перемещение влево");
        clearImg(obj);
        obj.x -= 2;
        drawImg(obj, 1);
    } else if (event.code === "KeyW" && obj.y>=0) {
        console.log("перемещение вверх");
        clearImg(obj);
        obj.y -= 2;
        drawImg(obj, 1);
    } else if (event.code === "KeyS" && obj.y<=(canvas.height-138)) {
        console.log("перемещение вниз");
        clearImg(obj);
        obj.y += 2;
        drawImg(obj, 1);
    }


    if ((obj.x <= (georg.x + 100) && obj.x >= (georg.x - 100)) && (obj.y <= (georg.y + 128) && obj.y >= (georg.y - 128))) {
        clearImg(georg);
        georg.x = genX();
        georg.y = genY();
        drawImg(georg, 1);
        drawPoint();
    }
}


function clearImg(obj) {                                
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

function drawPoint(){                                  
    let x=0;
    point++;
    console.log("point= "+point);
    if(point!==10) {                                    
        point2++;
        p.innerText="Счет: "+point2;
        for (let i = 0; i < point; i++) {
            drawImg(georg2, 2, x);
            x += 64;
        }
    }
    else{
        point2++;
        ctx2.fillRect(0,0,900, 600);    
        p.innerText="Счет: "+point2;
        drawImg(georg2, 2, x);
        point=1;

    }

}

drawImg(pepa,1);
drawImg(georg,1);

document.addEventListener("keydown",move.bind(document, pepa)); 