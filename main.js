const btnPos1 = {
    document.getElementById('pos1'),
    
}
const btnPos2 = document.getElementById('pos2');
const btnPos3 = document.getElementById('pos3');
const btnPos4 = document.getElementById('pos4');
const btnPos5 = document.getElementById('pos5');
const btnPos6 = document.getElementById('pos6');
const btnPos7 = document.getElementById('pos7');
const btnPos8 = document.getElementById('pos8');
const btnPos9 = document.getElementById('pos9');

btnPos1.onclick = function () {
    dibujarCruz(btnPos1);
}

function dibujarCruz(pos) {
    let element = document.createElement('i');
    element.setAttribute('class', 'fas fa-times fa-4x');
    console.log(element);
    pos.appendChild(element);
    console.log(pos);
}