const contenedor = document.getElementById('contenedor');
const inputAlto = document.querySelector('#height');
const inputAncho = document.querySelector('#width');
const inputRadio = document.querySelector('#radio');
const inputShadow = document.querySelector('#shadowSide');
const inputShadowButton = document.querySelector('#shadowButton');
const inputShadowOpacity = document.querySelector('#shadowOpacity');
const inputColor = document.querySelector('#inputColor')

let alto = 0;
let ancho = 0;
let shadow = 0;
let radio = 0;
let sideShadow = 0;
let buttonShadow = 0;
let opacity = 0;
let color;

inputAlto.addEventListener('input', (e)=>{
    alto = e.target.value;
    contenedor.style.height = `${alto}px`;
});

inputAncho.addEventListener('input', (e)=>{ 
    ancho = e.target.value;
    contenedor.style.width = `${ancho}px`; 
});

inputRadio.addEventListener('input', (e)=>{
    radio = e.target.value;
    contenedor.style.borderRadius = `${radio}%`;
});

inputRadio.addEventListener('input', (e)=>{
    radio = e.target.value;
    contenedor.style.borderRadius = `${radio}%`;
});

inputShadow.addEventListener('input', (e)=>{
    sideShadow = e.target.value;
    contenedor.style.boxShadow = `${sideShadow}px ${buttonShadow}px ${opacity}px`;
});

inputShadowButton.addEventListener('input', (e)=>{
    buttonShadow = e.target.value;
    contenedor.style.boxShadow = `${sideShadow}px ${buttonShadow}px ${opacity}px`;
});

inputShadowOpacity.addEventListener('input', (e)=>{
    opacity = e.target.value;
    contenedor.style.boxShadow = `${sideShadow}px ${buttonShadow}px ${opacity}px`;
});

inputColor.addEventListener('input', (e)=>{
    color = e.target.value;
    contenedor.style.backgroundColor = color
    console.log(e.target.value);
})