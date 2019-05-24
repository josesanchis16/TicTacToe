const estrella1 = document.getElementById('star1');
const estrella2 = document.getElementById('star2');
const estrella3 = document.getElementById('star3');
const estrella4 = document.getElementById('star4');
const estrella5 = document.getElementById('star5');

//Estrella 1
estrella1.onmouseover = function () {
    estrella1.classList.add('selectedStar');
}
estrella1.onmouseleave = function () {
    estrella1.classList.remove('selectedStar');
}

//Estrella 2
estrella2.onmouseover = function () {
    estrella1.classList.add('selectedStar');
    estrella2.classList.add('selectedStar');
}
estrella2.onmouseleave = function () {
    estrella1.classList.remove('selectedStar');
    estrella2.classList.remove('selectedStar');
}

//Estrella 3
estrella3.onmouseover = function () {
    estrella1.classList.add('selectedStar');
    estrella2.classList.add('selectedStar');
    estrella3.classList.add('selectedStar');
}
estrella3.onmouseleave = function () {
    estrella1.classList.remove('selectedStar');
    estrella2.classList.remove('selectedStar');
    estrella3.classList.remove('selectedStar');
}

//Estrella 4
estrella4.onmouseover = function () {
    estrella1.classList.add('selectedStar');
    estrella2.classList.add('selectedStar');
    estrella3.classList.add('selectedStar');
    estrella4.classList.add('selectedStar');
}
estrella4.onmouseleave = function () {
    estrella1.classList.remove('selectedStar');
    estrella2.classList.remove('selectedStar');
    estrella3.classList.remove('selectedStar');
    estrella4.classList.remove('selectedStar');
}

//Estrella 5
estrella5.onmouseover = function () {
    estrella1.classList.add('selectedStar');
    estrella2.classList.add('selectedStar');
    estrella3.classList.add('selectedStar');
    estrella4.classList.add('selectedStar');
    estrella5.classList.add('selectedStar');
}
estrella5.onmouseleave = function () {
    estrella1.classList.remove('selectedStar');
    estrella2.classList.remove('selectedStar');
    estrella3.classList.remove('selectedStar');
    estrella4.classList.remove('selectedStar');
    estrella5.classList.remove('selectedStar');
}

estrella5.onclick = function () {
    
}