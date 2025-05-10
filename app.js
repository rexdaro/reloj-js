const reloj = document.querySelector('#reloj');
const btnCambiarHora = document.querySelector('#cambiarHora');
let tipoHora = 'comun';
let intervalo;

const body = document.querySelector('body');

const imgReloj = document.querySelector('#imgReloj');
const btnCambiarDiseno = document.querySelector('#cambiarDiseno');

function showTimeMilitar() {
  clearInterval(intervalo)
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const horaMilitar = `${hours}:${minutes}:${seconds}`;  

  reloj.innerHTML = horaMilitar;

  intervalo = setInterval(showTimeMilitar, 1000);
}

function showTimeComun() {
  clearInterval(intervalo)
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const horaComun = `${hours-12}:${minutes}:${seconds} ${hours >= 12 ? 'PM' : 'AM'}`;

  reloj.innerHTML = horaComun;

  intervalo = setInterval(showTimeComun, 1000);
}


// Ejecutamos el reloj al cargar la pagina
tipoHora = 'militar';
btnCambiarHora.innerHTML = 'Cambiar a hora comun';
showTimeMilitar();


btnCambiarHora.addEventListener('click', () => {
    if (tipoHora === 'comun') {
        tipoHora = 'militar';
        btnCambiarHora.innerHTML = 'Cambiar a hora comun';
        showTimeMilitar();
    } else {
        tipoHora = 'comun';
        btnCambiarHora.innerHTML = 'Cambiar a hora militar';
        showTimeComun();
    }
});

// imgReloj.src = "/images/reloj 2.png";

btnCambiarDiseno.addEventListener('click', () => {

    
    
    switch (imgReloj.classList.value) {
        case 'diseño-reloj':
                imgReloj.src = "/images/reloj 2.png"
                imgReloj.classList = 'diseño-reloj-2';
                reloj.style.color = 'white';
                reloj.style.fontSize = '2rem';
                body.style.backgroundColor = '#001311';
            break;

        case 'diseño-reloj-2':
                imgReloj.src = "/images/reloj 3.png"
                imgReloj.classList = 'diseño-reloj-3';
                reloj.style.color = 'white';
                reloj.style.fontSize = '2rem';
                body.style.backgroundColor = 'black';
            break;
        
        case 'diseño-reloj-3':
                imgReloj.src = "/images/reloj 4.png"
                imgReloj.classList = 'diseño-reloj-4';
                reloj.style.color = 'white';
                reloj.style.fontSize = '3rem';
                body.style.backgroundColor = 'black';
            break;

        case 'diseño-reloj-4':
                imgReloj.src = "/images/reloj 5.png"
                imgReloj.classList = 'diseño-reloj-5';
                reloj.style.color = 'red';
                reloj.style.fontSize = '3rem';
                body.style.backgroundColor = 'rgb(16 16 16)';
            break;

        case 'diseño-reloj-5':
                imgReloj.src = "/images/reloj 1.png"
                imgReloj.classList = 'diseño-reloj';
                reloj.style.color = 'black';
                reloj.style.fontSize = '3rem';
                body.style.backgroundColor = 'rgb(55 66 85)';
            break;

        default:
            break;
    }



});

reloj.addEventListener('click', () => {

        switch (imgReloj.classList.value) {
        case 'diseño-reloj':
                imgReloj.src = "/images/reloj 2.png"
                imgReloj.classList = 'diseño-reloj-2';
                reloj.style.color = 'white';
                reloj.style.fontSize = '2rem';
                body.style.backgroundColor = '#001311';
            break;

        case 'diseño-reloj-2':
                imgReloj.src = "/images/reloj 3.png"
                imgReloj.classList = 'diseño-reloj-3';
                reloj.style.color = 'white';
                reloj.style.fontSize = '2rem';
                body.style.backgroundColor = 'black';
            break;
        
        case 'diseño-reloj-3':
                imgReloj.src = "/images/reloj 4.png"
                imgReloj.classList = 'diseño-reloj-4';
                reloj.style.color = 'white';
                reloj.style.fontSize = '3rem';
                body.style.backgroundColor = 'black';
            break;

        case 'diseño-reloj-4':
                imgReloj.src = "/images/reloj 5.png"
                imgReloj.classList = 'diseño-reloj-5';
                reloj.style.color = 'red';
                reloj.style.fontSize = '3rem';
                body.style.backgroundColor = 'rgb(16 16 16)';
            break;

        case 'diseño-reloj-5':
                imgReloj.src = "/images/reloj 1.png"
                imgReloj.classList = 'diseño-reloj';
                reloj.style.color = 'black';
                reloj.style.fontSize = '3rem';
                body.style.backgroundColor = 'rgb(55 66 85)';
            break;

        default:
            break;
    }

});