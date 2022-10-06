const foguete = document.querySelector('.foguete');
const cometa = document.querySelector('.cometa');
const divContador = document.getElementById("contador");

let pulos = 0;

const jump = () => {
    pulos++;
    divContador.textContent = pulos

    foguete.classList.add('jump');

    setTimeout(() => { 
    foguete.classList.remove('jump');
    }, 500)
}

const loop = setInterval(()=> {

   console.log('loop') 

   const cometaPosition =  cometa.offsetLeft;
   const foguetePosition = +window.getComputedStyle(foguete).bottom. replace('px', ' ');

   if (cometaPosition <= 120 && cometaPosition > 0 && foguetePosition < 80) {
    cometa.style.animation = 'none'; 
    cometa.style.left = '${cometaPosition}px';

    foguete.style.animation = 'none'; 
    foguete.style.bottom = '${foguetePosition}px'; 

    foguete.src = "images/explosao.gif";
    foguete.style.widht ='75px';
    foguete.style.merginLeft = '50px';

    clearInterval(loop);
   }

}, 10)

document.addEventListener('keydown', jump);