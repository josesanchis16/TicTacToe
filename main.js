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
const board = document.getElementById('board');

let btnPos1;
let btnPos2;
let btnPos3;
let btnPos4;
let btnPos5;
let btnPos6;
let btnPos7;
let btnPos8;
let btnPos9;

const turnoText = document.getElementById('turnoText');

const btnReiniciar = document.getElementById('btnRestart');

//######### Variables ############
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
crearBotones();

whoShot();

btnReiniciar.onclick = function () {
    clearBoard();
    resetTurno();
    partidaTerminada = 0;
}

//Celdas
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
    dibujarCirculo(tiroIA());
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

function tiroRandom() {
    let tiro = Math.round(Math.random() * (arrCeldasDisponibles.length - 1));
    return arrCeldasDisponibles[tiro];
}


export function tiroIA() {

    let res;
    res = defensaIA(1); //Defiende del jugador
    //ataqueIA(2); //Ataca si tiene una posición libre

    if (typeof res === 'number') {
        console.log('No habia nada que defender, me toca atacar');
        return tiroRandom();
    } else {
        console.log('He tenido que defender');
        return res;
    }

    function defensaIA(player) {
        //################################### PRIMERA FILA ################################
        //Controlamos de la primera fila, la tercera posición
        if ((btnPos1.whoPressed() === 1) && (btnPos2.whoPressed() === 1)) {
            //Controlamos que la posición 1 y 2 ya haya tirado el jugador
            if (!btnPos3.isPressed()) {
                //Controlamos que en la 3ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 3) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 3ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la fila 1');
        }

        //Controlamos de la primera fila, la segunda posición
        if ((btnPos1.whoPressed() === 1) && (btnPos3.whoPressed() === 1)) {
            //Controlamos que la posición 1 y 3 ya haya tirado el jugador
            if (!btnPos2.isPressed()) {
                //Controlamos que en la 2ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 2) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 2ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la fila 1');
        }

        //Controlamos de la primera fila, la primera posición
        if ((btnPos2.whoPressed() === 1) && (btnPos3.whoPressed() === 1)) {
            //Controlamos que la posición 2 y 3 ya haya tirado el jugador
            if (!btnPos1.isPressed()) {
                //Controlamos que en la 1ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 1) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 1ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la fila 1');
        }

        //################################### SEGUNDA FILA ################################
        //Controlamos de la sgunda fila, la tercera posición
        if ((btnPos4.whoPressed() === 1) && (btnPos5.whoPressed() === 1)) {
            //Controlamos que la posición 4 y 5 ya haya tirado el jugador
            if (!btnPos6.isPressed()) {
                //Controlamos que en la 6ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 6) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 6ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la fila 2');
        }

        //Controlamos de la primera fila, la segunda posición
        if ((btnPos4.whoPressed() === 1) && (btnPos6.whoPressed() === 1)) {
            //Controlamos que la posición 4 y 6 ya haya tirado el jugador
            if (!btnPos5.isPressed()) {
                //Controlamos que en la 5ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 5) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 5ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la fila 2');
        }

        //Controlamos de la primera fila, la primera posición
        if ((btnPos5.whoPressed() === 1) && (btnPos6.whoPressed() === 1)) {
            //Controlamos que la posición 5 y 6 ya haya tirado el jugador
            if (!btnPos4.isPressed()) {
                //Controlamos que en la 4rta celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 4) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 4ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la fila 2');
        }

        //################################### TERCERA FILA ################################
        //Controlamos de la sgunda fila, la tercera posición
        if ((btnPos7.whoPressed() === 1) && (btnPos8.whoPressed() === 1)) {
            //Controlamos que la posición 7 y 8 ya haya tirado el jugador
            if (!btnPos9.isPressed()) {
                //Controlamos que en la 9ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 9) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 9ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la fila 3');
        }

        //Controlamos de la primera fila, la segunda posición
        if ((btnPos7.whoPressed() === 1) && (btnPos9.whoPressed() === 1)) {
            //Controlamos que la posición 7 y 9 ya haya tirado el jugador
            if (!btnPos8.isPressed()) {
                //Controlamos que en la 8ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 8) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 8ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la fila 3');
        }

        //Controlamos de la primera fila, la primera posición
        if ((btnPos8.whoPressed() === 1) && (btnPos9.whoPressed() === 1)) {
            //Controlamos que la posición 8 y 9 ya haya tirado el jugador
            if (!btnPos7.isPressed()) {
                //Controlamos que en la 7rta celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 7) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 7ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la fila 3');
        }

        //################################### PRIMERA COLUMNA ################################
        //Controlamos de la primera columna, la tercera posición
        if ((btnPos1.whoPressed() === 1) && (btnPos4.whoPressed() === 1)) {
            //Controlamos que la posición 1 y 4 ya haya tirado el jugador
            if (!btnPos7.isPressed()) {
                //Controlamos que en la 7ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 7) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 7ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la columna 1');
        }

        //Controlamos de la primera columna, la tercera posición
        if ((btnPos1.whoPressed() === 1) && (btnPos7.whoPressed() === 1)) {
            //Controlamos que la posición 1 y 7 ya haya tirado el jugador
            if (!btnPos4.isPressed()) {
                //Controlamos que en la 4ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 4) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 4a posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la columna 1');
        }

        //Controlamos de la primera columna, la tercera posición
        if ((btnPos4.whoPressed() === 1) && (btnPos7.whoPressed() === 1)) {
            //Controlamos que la posición 4 y 7 ya haya tirado el jugador
            if (!btnPos1.isPressed()) {
                //Controlamos que en la 1ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 1) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 1ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la columna 1');
        }

        //################################### SEGUNDA COLUMNA ################################
        //Controlamos de la segunda columna, la tercera posición
        if ((btnPos2.whoPressed() === 1) && (btnPos5.whoPressed() === 1)) {
            //Controlamos que la posición 2 y 5 ya haya tirado el jugador
            if (!btnPos8.isPressed()) {
                //Controlamos que en la 8ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 8) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 8ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la columna 2');
        }

        //Controlamos de la segunda columna, la tercera posición
        if ((btnPos2.whoPressed() === 1) && (btnPos8.whoPressed() === 1)) {
            //Controlamos que la posición 2 y 8 ya haya tirado el jugador
            if (!btnPos5.isPressed()) {
                //Controlamos que en la 5ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 5) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 5ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la columna 2');
        }

        //Controlamos de la segunda columna, la tercera posición
        if ((btnPos5.whoPressed() === 1) && (btnPos8.whoPressed() === 1)) {
            //Controlamos que la posición 5 y 8 ya haya tirado el jugador
            if (!btnPos2.isPressed()) {
                //Controlamos que en la 8ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 2) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 2ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la columna 2');
        }

        //################################### TERCERA COLUMNA ################################
        //Controlamos de la tercera columna, la tercera posición
        if ((btnPos3.whoPressed() === 1) && (btnPos6.whoPressed() === 1)) {
            //Controlamos que la posición 3 y 6 ya haya tirado el jugador
            if (!btnPos9.isPressed()) {
                //Controlamos que en la 9ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 9) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 9ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la columna 3');
        }

        //Controlamos de la tercera columna, la tercera posición
        if ((btnPos3.whoPressed() === 1) && (btnPos9.whoPressed() === 1)) {
            //Controlamos que la posición 3 y 9 ya haya tirado el jugador
            if (!btnPos6.isPressed()) {
                //Controlamos que en la 6ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 6) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 6ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la columna 3');
        }

        //Controlamos de la tercera columna, la tercera posición
        if ((btnPos6.whoPressed() === 1) && (btnPos9.whoPressed() === 1)) {
            //Controlamos que la posición 6 y 9 ya haya tirado el jugador
            if (!btnPos3.isPressed()) {
                //Controlamos que en la 3ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 3) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 3ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la columna 3');
        }

        //################################### DIAGONAL IZQUIERDA-DERECHA ################################
        //Controlamos de la diagonal izquierda-derecha
        if ((btnPos1.whoPressed() === 1) && (btnPos5.whoPressed() === 1)) {
            //Controlamos que la posición 1 y 5 ya haya tirado el jugador
            if (!btnPos9.isPressed()) {
                //Controlamos que en la 9ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 9) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 9ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la diagonal');
        }

        //Controlamos de la diagonal izquierda-derecha
        if ((btnPos1.whoPressed() === 1) && (btnPos9.whoPressed() === 1)) {
            //Controlamos que la posición 1 y 9 ya haya tirado el jugador
            if (!btnPos5.isPressed()) {
                //Controlamos que en la 5ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 5) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 5ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la diagonal');
        }

        //Controlamos de la diagonal izquierda-derecha
        if ((btnPos5.whoPressed() === 1) && (btnPos9.whoPressed() === 1)) {
            //Controlamos que la posición 5 y 9 ya haya tirado el jugador
            if (!btnPos1.isPressed()) {
                //Controlamos que en la 9ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 1) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 1ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la diagonal');
        }

        //################################### DIAGONAL DERECHA-IZQUIERDA ################################
        //Controlamos de la diagonal derecha-izquierda
        if ((btnPos3.whoPressed() === 1) && (btnPos5.whoPressed() === 1)) {
            //Controlamos que la posición 3 y 5 ya haya tirado el jugador
            if (!btnPos7.isPressed()) {
                //Controlamos que en la 7ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 7) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 7ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la diagonal');
        }

        //Controlamos de la diagonal derecha-izquierda
        if ((btnPos3.whoPressed() === 1) && (btnPos7.whoPressed() === 1)) {
            //Controlamos que la posición 3 y 7 ya haya tirado el jugador
            if (!btnPos5.isPressed()) {
                //Controlamos que en la 5ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 5) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 5ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la diagonal');
        }

        //Controlamos de la diagonal derecha-izquierda
        if ((btnPos5.whoPressed() === 1) && (btnPos7.whoPressed() === 1)) {
            //Controlamos que la posición 5 y 7 ya haya tirado el jugador
            if (!btnPos3.isPressed()) {
                //Controlamos que en la 3ra celda no haya ficha ya
                for (let pos of arrCeldasDisponibles) {
                    if (pos.pos === 3) {
                        console.log('He evitado una jugada ganadora');
                        return pos;
                    }
                }
            } else {
                //Si ya se ha tirado en esa posición elegimos otra random
                console.log('la 3ra posición esta ocupada');
            }
        } else {
            //No hay peligro en esta posición
            console.log('No hay ninguna jugada que evitar en la diagonal');
        }

        return 0;
    }
}

//###############   Funciones generales   ###############\\

function whoShot() {
    if (turno === 1) {
        console.log('--- Turno del Jugador ---');
        turnoText.innerText = "Turno del Jugador";
    } else {
        console.log('--- Turno de la IA ---');
        turnoText.innerText = "Turno de la IA";
        turnoIA();
    }
}

function resetTurno() {
    turno = Math.round(Math.random() * 1 + 1);
    console.log(turno);
    whoShot();
}

function clearBoard() {
    if (btnPos1.getBtn().firstChild) btnPos1.getBtn().removeChild(btnPos1.getBtn().firstChild);
    if (btnPos2.getBtn().firstChild) btnPos2.getBtn().removeChild(btnPos2.getBtn().firstChild);
    if (btnPos3.getBtn().firstChild) btnPos3.getBtn().removeChild(btnPos3.getBtn().firstChild);
    if (btnPos4.getBtn().firstChild) btnPos4.getBtn().removeChild(btnPos4.getBtn().firstChild);
    if (btnPos5.getBtn().firstChild) btnPos5.getBtn().removeChild(btnPos5.getBtn().firstChild);
    if (btnPos6.getBtn().firstChild) btnPos6.getBtn().removeChild(btnPos6.getBtn().firstChild);
    if (btnPos7.getBtn().firstChild) btnPos7.getBtn().removeChild(btnPos7.getBtn().firstChild);
    if (btnPos8.getBtn().firstChild) btnPos8.getBtn().removeChild(btnPos8.getBtn().firstChild);
    if (btnPos9.getBtn().firstChild) btnPos9.getBtn().removeChild(btnPos9.getBtn().firstChild);
    clearButtonsObj();
}

function clearButtonsObj() {
    btnPos1 = undefined;
    btnPos2 = undefined;
    btnPos3 = undefined;
    btnPos4 = undefined;
    btnPos5 = undefined;
    btnPos6 = undefined;
    btnPos7 = undefined;
    btnPos8 = undefined;
    btnPos9 = undefined;
    crearBotones();
}

function crearBotones() {
    btnPos1 = new Boton(document.getElementById('pos1'), 1);
    btnPos2 = new Boton(document.getElementById('pos2'), 2);
    btnPos3 = new Boton(document.getElementById('pos3'), 3);
    btnPos4 = new Boton(document.getElementById('pos4'), 4);
    btnPos5 = new Boton(document.getElementById('pos5'), 5);
    btnPos6 = new Boton(document.getElementById('pos6'), 6);
    btnPos7 = new Boton(document.getElementById('pos7'), 7);
    btnPos8 = new Boton(document.getElementById('pos8'), 8);
    btnPos9 = new Boton(document.getElementById('pos9'), 9);

    arrCeldasDisponibles = [];
    arrCeldasDisponibles.push(btnPos1);
    arrCeldasDisponibles.push(btnPos2);
    arrCeldasDisponibles.push(btnPos3);
    arrCeldasDisponibles.push(btnPos4);
    arrCeldasDisponibles.push(btnPos5);
    arrCeldasDisponibles.push(btnPos6);
    arrCeldasDisponibles.push(btnPos7);
    arrCeldasDisponibles.push(btnPos8);
    arrCeldasDisponibles.push(btnPos9);
}

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

    if (finalWho === 0) {
        let empate = controlarEmpate();
        if (empate === true) finalWho = 3;
    }

    return finalWho;
}

function controlarEmpate() {
    let fichasTiradas = 0;
    let empate = false;
    if (arrCeldasDisponibles.length === 0) {
        //Opciones empate desde la primera celda
        if (btnPos1.isPressed()) {
            let whoBtn1 = btnPos1.whoPressed();

            //Comprobación fila superior
            if (whoBtn1 !== btnPos2.whoPressed()) {
                empate = true;
            } else if (btnPos2.whoPressed() !== btnPos3.whoPressed()) {
                empate = true;
            } else empate = false;

            //Comprobación columna izquierda
            if ((whoBtn1 !== btnPos4.whoPressed())) {
                empate = true;
            } else if (btnPos4.whoPressed() !== btnPos7.whoPressed()) {
                empate = true;
            } else empate = false;

            //Comprobación diagonal izquierda-derecha
            if ((whoBtn1 !== btnPos5.whoPressed())) {
                empate = true;
            } else if (btnPos5.whoPressed() !== btnPos9.whoPressed()) {
                empate = true;
            } else empate = false;
        }

        //Opciones ganadoras desde la segunda celda
        if (btnPos2.isPressed()) {
            let whoBtn2 = btnPos2.whoPressed();
            if (whoBtn2 !== btnPos5.whoPressed()) {
                //Comprobación columna central
                empate = true;
            } else if (btnPos5.whoPressed() !== btnPos8.whoPressed()) {
                empate = true;
            } else empate = false;
        }

        //Opciones ganadoras desde la tercera celda
        if (btnPos3.isPressed()) {
            let whoBtn3 = btnPos3.whoPressed();
            //Comprobación columna derecha
            if (whoBtn3 !== btnPos6.whoPressed()) {
                empate = true;
            } else if (btnPos6.whoPressed() !== btnPos9.whoPressed()) {
                empate = true;
            } else empate = false;

            //Comprobación diagonal derecha-izquierda
            if (whoBtn3 !== btnPos5.whoPressed()) {
                empate = true;
            } else if (btnPos5.whoPressed() !== btnPos7.whoPressed()) {
                empate = true;
            } else empate = false;
        }

        //Opciones ganadoras desde la cuarta celda
        if (btnPos4.isPressed()) {
            let whoBtn4 = btnPos4.whoPressed();
            if (whoBtn4 !== btnPos5.whoPressed()) {
                empate = true;
            } else if (btnPos5.whoPressed() !== btnPos6.whoPressed()) {
                empate = true;
            } else empate = false;
        }

        //Opciones ganadoras desde la séptima celda
        if (btnPos7.isPressed()) {
            let whoBtn7 = btnPos7.whoPressed();
            if (whoBtn7 !== btnPos8.whoPressed()) {
                empate = true;
            } else if (btnPos8.whoPressed() !== btnPos9.whoPressed()) {
                empate = true;
            } else empate = false;
        }
    }

    return empate;
}