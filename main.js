//Tiempo minimo que la IA espera para la tirada
const TIMEPO_MINIMO_ESPERA_IA = 500;

class Boton {
    constructor(btn) {
        this.btn = btn;
        this.pressed = false;
    }

    getBtn = function () {
        return this.btn;
    }

    setPressed = function (pressed) {
        this.pressed = pressed;
    }

    isPressed = function () {
        return this.pressed;
    }
}

const btnPos1 = new Boton(document.getElementById('pos1'));
const btnPos2 = new Boton(document.getElementById('pos2'));
const btnPos3 = new Boton(document.getElementById('pos3'));
const btnPos4 = new Boton(document.getElementById('pos4'));
const btnPos5 = new Boton(document.getElementById('pos5'));
const btnPos6 = new Boton(document.getElementById('pos6'));
const btnPos7 = new Boton(document.getElementById('pos7'));
const btnPos8 = new Boton(document.getElementById('pos8'));
const btnPos9 = new Boton(document.getElementById('pos9'));

//Miramos a ver quien es el que saca primero
let turno = Math.round(Math.random() * 1 + 1);
//1 jugador
//2 IA

//Contador para saber las celtas ocupadas
let celdasLlenas = 0;
let arrCeldasDisponibles = [
    btnPos1,
    btnPos2,
    btnPos3,
    btnPos4,
    btnPos5,
    btnPos6,
    btnPos7,
    btnPos8,
    btnPos9
];

if (turno === 1) {
    console.log('--- Turno del Jugador ---');
} else {
    console.log('--- Turno de la IA ---');
    turnoIA();
}

btnPos1.getBtn().onclick = function () {
    dibujarCruz(btnPos1);
}

btnPos2.getBtn().onclick = function () {
    dibujarCruz(btnPos2);
}

btnPos3.getBtn().onclick = function () {
    dibujarCruz(btnPos3);
}

btnPos4.getBtn().onclick = function () {
    dibujarCruz(btnPos4);
}

btnPos5.getBtn().onclick = function () {
    dibujarCruz(btnPos5);
}

btnPos6.getBtn().onclick = function () {
    dibujarCruz(btnPos6);
}

btnPos7.getBtn().onclick = function () {
    dibujarCruz(btnPos7);
}

btnPos8.getBtn().onclick = function () {
    dibujarCruz(btnPos8);
}

btnPos9.getBtn().onclick = function () {
    dibujarCruz(btnPos9);
}

function dibujarCruz(pos) {
    if (!pos.isPressed()) {
        if (turno === 1) {
            let element = document.createElement('i');
            element.setAttribute('class', 'fas fa-times fa-4x');
            pos.getBtn().appendChild(element);
            pos.setPressed(true);
            setCeldaSelected();
            turno = 2;
            celdasLlenas++;
            console.log('--- Turno de la IA ---');
            turnoIA();
        }
    } else {
        console.log('El boton seleccionado ya esta presionado');
    }
}

//######################   I.A. ###################\\

async function turnoIA() {

    let milsec = Math.random() * 1000 + TIMEPO_MINIMO_ESPERA_IA;
    await sleep(milsec);
    let tiro = Math.round(Math.random() * (arrCeldasDisponibles.length - 1));
    dibujarCirculo(arrCeldasDisponibles[tiro]);
}

function dibujarCirculo(pos) {
    if (!pos.isPressed()) {
        if (turno === 2) {
            let element = document.createElement('i');
            element.setAttribute('class', 'fas fa-circle fa-4x');
            pos.getBtn().appendChild(element);
            pos.setPressed(true);
            setCeldaSelected(pos.getBtn());
            turno = 1;
            celdasLlenas++;
            console.log('--- Turno del Jugador ---');
        }
    } else {
        console.log('El boton seleccionado ya esta presionado');
    }
}

//###############   Funciones generales   ###############\\
function sleep(milsec) {
    return new Promise(resolve => setTimeout(resolve, milsec));
}

function setCeldaSelected() {
    for (let index in arrCeldasDisponibles) {
        if (arrCeldasDisponibles[index].isPressed()) {
            arrCeldasDisponibles.splice(index, 1);
            console.log('Tirada la ficha en la celda ' + (parseInt(index) + 1));
            break;
        }
    }
}