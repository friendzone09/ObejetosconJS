const body = document.querySelector('body');
const btnChange = document.querySelector('#btnchange');
const span = document.querySelector('#color')

btnChange.addEventListener('click', ()=>{
    let colores = '1234567890abcdef';
    let colores2 = colores.split('')
    let random;
    let random2 = '';
    for(i=0; i<6;i++){
        random = colores2[Math.floor(Math.random() *16)]
        random2 += random;
    }
    body.style.backgroundColor= `#${random2}`
    span.innerText = `#${random2}`
});