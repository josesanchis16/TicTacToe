//Tiempo minimo que la IA espera para la tirada
const TIMEPO_MINIMO_ESPERA_IA = 500;

class Boton {
    constructor(btn, pos) {
        this.btn = btn;
        this.pos = pos;
        this.pressed = false;
    }

    getPos = function () {
        return this.pos;
    }

    getBtn = function () {
        return this.btn;
    }

    pressedBy = function (who) {
        this.who = who;
    }

    whoPressed = function () {
        return this.who;
    }

    setPressed = function (pressed) {
        this.pressed = pressed;
    }

    isPressed = function () {
        return this.pressed;
    }
}

const btnPos1 = new Boton(document.getElementById('pos1'), 1);
const btnPos2 = new Boton(document.getElementById('pos2'), 2);
const btnPos3 = new Boton(document.getElementById('pos3'), 3);
const btnPos4 = new Boton(document.getElementById('pos4'), 4);
const btnPos5 = new Boton(document.getElementById('pos5'), 5);
const btnPos6 = new Boton(document.getElementById('pos6'), 6);
const btnPos7 = new Boton(document.getElementById('pos7'), 7);
const btnPos8 = new Boton(document.getElementById('pos8'), 8);
const btnPos9 = new Boton(document.getElementById('pos9'), 9);

const turnoText = document.getElementById('turnoText');
let partidaTerminada = 0;

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
    turnoText.innerText = "Turno del Jugador";
} else {
    console.log('--- Turno de la IA ---');
    turnoText.innerText = "Turno de la IA";
    turnoIA();
}

btnPos1.getBtn().onclick = function () {
    if (!partidaTerminada) {
        dibujarCruz(btnPos1);
    }
}

btnPos2.getBtn().onclick = function () {
    if (!partidaTerminada) {
        dibujarCruz(btnPos2);
    }
}

btnPos3.getBtn().onclick = function () {
    if (!partidaTerminada) {
        dibujarCruz(btnPos3);
    }
}

btnPos4.getBtn().onclick = function () {
    if (!partidaTerminada) {
        dibujarCruz(btnPos4);
    }
}

btnPos5.getBtn().onclick = function () {
    if (!partidaTerminada) {
        dibujarCruz(btnPos5);
    }
}

btnPos6.getBtn().onclick = function () {
    if (!partidaTerminada) {
        dibujarCruz(btnPos6);
    }
}

btnPos7.getBtn().onclick = function () {
    if (!partidaTerminada) {
        dibujarCruz(btnPos7);
    }
}

btnPos8.getBtn().onclick = function () {
    if (!partidaTerminada) {
        dibujarCruz(btnPos8);
    }
}

btnPos9.getBtn().onclick = function () {
    if (!partidaTerminada) {
        dibujarCruz(btnPos9);
    }
}

function dibujarCruz(pos) {
    if (!pos.isPressed()) {
        if (turno === 1) {
            let element = document.createElement('i');
            element.setAttribute('class', 'fas fa-times fa-4x');
            pos.getBtn().appendChild(element);
            pos.setPressed(true);
            pos.pressedBy(1);
            setCeldaSelected();
            celdasLlenas++;
            if (finPartida() === 0) {
                turno = 2;
                turnoText.innerText = "Turno de la IA";
                console.log('--- Turno de la IA ---');
                turnoIA();
            } else if (finPartida() === 3) {
                console.log('Empate');
                turnoText.innerText = "Empate";
            } else {
                partidaTerminada = 1;
                console.log('Ganaste la partida');
                turnoText.innerText = "Ganaste la partida";
            }
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
            pos.pressedBy(2);
            setCeldaSelected(pos.getBtn());
            celdasLlenas++;
            if (finPartida() === 0) {
                turno = 1;
                turnoText.innerText = "Turno del jugador";
                console.log('--- Turno del Jugador ---');
            } else if (finPartida() === 3) {
                console.log('Empate');
                turnoText.innerText = "Empate";
            } else {
                partidaTerminada = 1;
                console.log('Perdiste la partida, gana la IA');
                turnoText.innerText = "Perdiste la partida";
            }
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
            console.log('Tirada la ficha en la celda ' + arrCeldasDisponibles[parseInt(index)].getPos());
            arrCeldasDisponibles.splice(index, 1);
            break;
        }
    }
}

function finPartida() {
    let finalWho = 0;

    //Opciones ganadores desde la primera celda
    if (btnPos1.isPressed()) {
        let whoBtn1 = btnPos1.whoPressed();
        if ((whoBtn1 === btnPos2.whoPressed()) && (whoBtn1 === btnPos3.whoPressed())) {
            //Comprobación fila superior
            finalWho = whoBtn1;
        } else if ((whoBtn1 === btnPos4.whoPressed()) && (whoBtn1 === btnPos7.whoPressed())) {
            //Comprobación columna izquierda
            finalWho = whoBtn1;
        } else if ((whoBtn1 === btnPos5.whoPressed()) && (whoBtn1 === btnPos9.whoPressed())) {
            //Comprobación diagonal izquierda-derecha
            finalWho = whoBtn1;
        }
    }

    //Opciones ganadoras desde la segunda celda
    if (btnPos2.isPressed()) {
        let whoBtn2 = btnPos2.whoPressed();
        if ((whoBtn2 === btnPos5.whoPressed()) && (whoBtn2 === btnPos8.whoPressed())) {
            //Comprobación columna central
            finalWho = whoBtn2;
        }
    }

    //Opciones ganadoras desde la tercera celda
    if (btnPos3.isPressed()) {
        let whoBtn3 = btnPos3.whoPressed();
        if ((whoBtn3 === btnPos6.whoPressed()) && (whoBtn3 === btnPos9.whoPressed())) {
            //Comprobación columna derecha
            finalWho = whoBtn3;
        } else if ((whoBtn3 === btnPos5.whoPressed()) && (whoBtn3 === btnPos7.whoPressed())) {
            //Comprobación diagonal derecha-izquieda
            finalWho = whoBtn3;
        }
    }

    //Opciones ganadoras desde la cuarta celda
    if (btnPos4.isPressed()) {
        let whoBtn4 = btnPos4.whoPressed();
        if ((whoBtn4 === btnPos5.whoPressed()) && (whoBtn4 === btnPos6.whoPressed())) {
            //Comprobación fila central
            finalWho = whoBtn4;
        }
    }

    //Opciones ganadoras desde la séptima celda
    if (btnPos7.isPressed()) {
        let whoBtn7 = btnPos7.whoPressed();
        if ((whoBtn7 === btnPos8.whoPressed()) && (whoBtn7 === btnPos9.whoPressed())) {
            //Comprobación fila inferiors
            finalWho = whoBtn7;
        }
    }

    return finalWho;
}