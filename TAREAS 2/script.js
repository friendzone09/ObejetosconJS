const inputTareas = document.getElementById('tareatxt');
const tareas = document.getElementById('tareas');
const btnola = document.getElementById('jpla');
const myForm = document.querySelector('#myform');

let arrayTareas = localStorage.getItem('tareas')
    ? JSON.parse(localStorage.getItem('tareas'))
    :[];



function addWork(){
    const tarea = inputTareas.value;
    tareas.appendChild(creatTarea(tarea));
    inputTareas.value=''; 

    arrayTareas.push({
        tarea: tarea,
        estado: 'danger',
        id : Math.floor(Math.random() * 10000)
    });

    constructorDivs();
    localStorage.setItem('tareas',JSON.stringify(arrayTareas));
}

function constructorDivs(){
    tareas.innerHTML="";
    arrayTareas.forEach(tarea=>{
        tareas.appendChild(creatTarea(tarea));
    })
}

function creatTarea(tarea){
    const div = document.createElement('div');
    const p = document.createElement('p');
    const btn = document.createElement('button');
    p.innerText= tarea.tarea;
    btn.innerText ='Eliminar';
    btn.addEventListener('click', delateItem);
    div.appendChild(p);
    div.appendChild(btn);
    div.classList.add('alert');
    div.classList.add(tarea.estado);
    div.setAttribute('data-id', tarea.id)

    div.addEventListener('click', changeColor);
    return div;
}


myForm.addEventListener('submit', (e)=>{
    addWork();
    e.preventDefault();
    
})

function delateItem (e){
    const pa = e.target.parentElement;
    const id = pa.getAttribute('data-id');
    arrayTareas = arrayTareas.filter(tarea => tarea.id !== Number(id));
    pa.remove();
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
}

function changeColor  (e){
    const currentDiv = e.target;
    const id = currentDiv.getAttribute('data-id');
    const encontrado = arrayTareas.findIndex(tarea => tarea.id == id);

    if(currentDiv.classList.contains('danger')){
        currentDiv.classList.remove('danger');
        currentDiv.classList.add('warning');
        arrayTareas[encontrado].estado = 'warning'
    } else if(currentDiv.classList.contains('warning')){
        currentDiv.classList.remove('warning');
        currentDiv.classList.add('success');
        arrayTareas[encontrado].estado = 'success'
    } else if(currentDiv.classList.contains('success')){
        currentDiv.classList.remove('success');
        currentDiv.classList.add('danger');
        arrayTareas[encontrado].estado = 'danger'
    }

    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
}

constructorDivs();

//CAMBIAR FONDOOO

const body = document.querySelector('body');
const changeFont = document.querySelector('#changetheme');


let background= localStorage.getItem('backColor');
let fontColor= localStorage.getItem('fontColor'); 
let text = document.querySelector('.container h1');


changeFont.addEventListener('click', ()=>{
    
    const estilos = window.getComputedStyle(body);
    let backgroundColor = estilos.backgroundColor;

    

    if(backgroundColor == 'rgb(237, 237, 237)'){

        body.style.backgroundColor = '#202020';
        text.style.color = 'white';

    }else if(backgroundColor == 'rgb(32, 32, 32)'){

        body.style.backgroundColor = '#EDEDED';
        text.style.color = 'black';
        
    }

});