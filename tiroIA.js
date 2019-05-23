function tiroIA() {

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

    return tiroRandom();
}