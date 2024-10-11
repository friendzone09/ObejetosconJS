const images = document.querySelectorAll('.images img');
const imgUser = document.querySelector('#choiceuser');
let imgMachine = document.querySelector('#choicecompu');
const span = document.querySelector('span');

const opciones = ['piedra', 'papel', 'tijeras'];

images.forEach(image => {
    image.addEventListener('click', (e)=>{
        const image = e.target;
        const choiceUser = image.getAttribute('data-id');
        const imageUser = image.src;
        let random = Math.floor(Math.random()*3);
        const choiceMachine = opciones[random];
        
        imgUser.src = imageUser;
        imgMachine.src = `./${choiceMachine}.png`;

        if (choiceUser == choiceMachine){
            span.innerText = 'Empate {{{(>_<)}}}';
        }
        else if(choiceUser == 'piedra' && choiceMachine == 'tijeras' ||
            choiceUser == 'papel' && choiceMachine == 'piedra' ||
            choiceUser == 'tijeras' && choiceMachine == 'papel'
        ){
          span.innerText = 'GANASTEEEEE SIIIIII (*^▽^*)'; 
        } else{
            span.innerText = 'PERDISTE NOOOOOOOO (┬┬﹏┬┬)';
        }
    });
});