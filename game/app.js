const linzo = document.querySelector('#lienzo');
const ctx = linzo.getContext('2d');
const actPunt = document.querySelector('#act_punt');
const puntFinal = document.querySelector('#punt_final');
const lavelMaxPuntuaje = document.querySelector('#max_punt');
const modalGameOver= document.querySelector('#modal');
const btnReiniciar = document.querySelector('#btn_reiniciar');

let maxScore = localStorage.getItem('maxScore');

lavelMaxPuntuaje.innerText = maxScore;

let puntuajeActual=0;

ctx.font = "20px serif";

const snake= [{
   x:2,
    y:1,
    show: function(){
        ctx.fillText('😺', this.x * 20, this.y *20);
    } 
},
{
    x:1,
    y:1,
    xSig:2,
    ySig:1,
    show: function(){
        ctx.fillText('🟡', this.x * 20, this.y *20);
     } 
 },
 {
    x: 0,
    y: 1,
    xSig: 1,
    ySig: 1,
    show: function(){
        ctx.fillText('🟡', this.x * 20, this.y *20);
     } 
 }

];

const food ={
    x:0,
    y:0,
    show: function(){
        ctx.fillText('🐟', this.x * 20, this.y *20);
    },
    aparece: function(){
        this.x= Math.floor(Math.random()* 29);
        this.y= Math.floor(Math.random()* 19) +1;
        for(i=1;i<snake.length;i++){
            if (this.x==snake[i].x && this.y==snake[i].y){
                this.x= Math.floor(Math.random()* 29);
                this.y= Math.floor(Math.random()* 19) +1;
            }
        }
    }
}

function checkEat(){
    if(snake[0].x === food.x && snake[0].y === food.y){
        food.aparece();
        snake.push({...snake[1]});
        puntuajeActual+=1;
        actPunt.innerText = puntuajeActual;
        if(maxScore == null || puntuajeActual > maxScore){
            localStorage.setItem('maxScore', puntuajeActual);
            lavelMaxPuntuaje.innerText = puntuajeActual;
        }
    }
}

function checkColition(){
    for(i =2;i<snake.length;i++){
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            puntFinal.innerText = puntuajeActual;

            modalGameOver.classList.add('modal_show');
            clearInterval(mainJuego);


       }
    }
   
}




function nextMove(x,y){
    snake.forEach((item, idx) =>{
        if (idx ===0){
            item.x = x;
            item.y = y;
        } else{
            item.x = item.xSig;
            item.y = item.ySig;
            item.xSig= snake[idx-1].x;
            item.ySig= snake[idx-1].y;
        }
    })
}

btnReiniciar.addEventListener('click', ()=>{
    location.reload();
})


let direction =1;
let x = 2;
let y = 1;


food.aparece();
let mainJuego = setInterval(()=>{
    ctx.clearRect(0,0,600,400);
    nextMove(x,y);
    snake.forEach(i=>i.show());
    food.show();
    
    checkEat();
    checkColition();
    


    if(direction ==1) x ++;
    else if (direction == 2) y++;
    else if (direction == 3) x--;
    else y--;
    
    if(x >29) x = 0;
    if(x<0) x =29;
    if(y >20) y = 1;
    if (y<1) y=20;

},100)


document.querySelector('body')
    .addEventListener('keydown',(e) =>{
        if(e.key === 'd' || e.key ==='ArrowRight') direction = 1;
        if(e.key === 's' || e.key ==='ArrowDown') direction = 2;
        if(e.key === 'a' || e.key ==='ArrowLeft') direction = 3;
        if(e.key === 'w' || e.key ==='ArrowUp') direction = 4;
})





