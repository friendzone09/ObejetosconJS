const inputRed = document.querySelector('#red');
const inputGreen = document.querySelector('#green');
const inputBlue = document.querySelector('#blue');
const body = document.querySelector('body')
const span = document.querySelector('#color')

let redColor = 0;
let greenColor = 0;
let blueColor = 0;


function generateColor(){
    return `rgb(${ redColor },${ greenColor },${ blueColor })`
}

inputRed.addEventListener('change', (e)=>{
    redColor = e.target.value;

    body.style.backgroundColor = generateColor();
    span.innerText = generateColor()
})

inputBlue.addEventListener('change', (e)=>{
    blueColor = e.target.value;

    body.style.backgroundColor = generateColor();
    span.innerText = generateColor()
})

inputGreen.addEventListener('change', (e)=>{
    greenColor = e.target.value;

    body.style.backgroundColor = generateColor();
    span.innerText = generateColor()
})

