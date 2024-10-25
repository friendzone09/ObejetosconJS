const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

ctx.fillStyle = '#ffe489';
ctx.arc(300,200,120,200, Math.PI*2, true);
//      x y
ctx.fill(); 

ctx.beginPath();
ctx.fillStyle = '#71ffe3';
ctx.ellipse(300, 180, 150, 150, Math.PI, 0, Math.PI, false);
ctx.fill();

ctx.beginPath();
ctx.ellipse(270, 180, 250, 150, Math.PI*0.75, 0, Math.PI*0.5, false);
ctx.fill();

ctx.beginPath();
ctx.ellipse(326, 170, 150, 250, Math.PI*1.76, 0, Math.PI*0.5, false);
ctx.fill();

ctx.beginPath();
ctx.ellipse(360, 160, 100, 150, Math.PI*0.72, 0, Math.PI*0.5, false);
ctx.fill();

ctx.beginPath();
ctx.ellipse(410, 120, 150, 150, Math.PI*0.65, 0, Math.PI*0.5, false);
ctx.fill();

ctx.beginPath();
ctx.ellipse(212, 140, 90, 80, Math.PI*1.81, 0, Math.PI, false);
ctx.fill();

ctx.beginPath();
ctx.ellipse(384, 130, 90, 80, Math.PI*0.20, 0, Math.PI, false);
ctx.fill();

ctx.fillStyle = '#ff4f4f';
ctx.beginPath();
ctx.ellipse(300, 265, 70, 40, Math.PI*2, 0, Math.PI, false);
ctx.fill();

ctx.fillStyle = '#FEFEFE'; 
ctx.beginPath();
ctx.ellipse(300, 265, 70, 10, Math.PI*2, 0, Math.PI, false);
ctx.fill();

ctx.beginPath();
ctx.ellipse(300, 293, 50, 12, Math.PI*2, 0, Math.PI, false);
ctx.fill();

ctx.fillStyle = '#ffa9a9';
ctx.beginPath();
ctx.ellipse(300, 294, 10, 10, Math.PI*2, 0, Math.PI *2, false);
ctx.fill();
