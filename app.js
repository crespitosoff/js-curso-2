//Variables
let titulo = document.querySelector('h1');

//Funciones
function mostrarTitulo() {
    titulo.innerHTML = 'Hora del desafío';
}

//Eventos
document.addEventListener('DOMContentLoaded', mostrarTitulo);

function clickBotonConsole() {
    console.log('El botón fue clicado, este mensaje está declarado en el JS');
}

function clickBotonPrompt() {
    let nombreCiudad = prompt("Digita el nombre de una ciudad de Brasil");
    alert(`Estuve en ${nombreCiudad} y me acordé de ti.`);
}

function clickBotonAlert() {
    alert('Yo amo JS');
}

function clickBotonSuma() {
    let num1 = prompt("Digite un primer número: ");
    let num2 = prompt("Digite un segundo número: ");
    let suma = Number(num1) + Number(num2);
    alert(`${num1} + ${num2} = ${suma}`);
}