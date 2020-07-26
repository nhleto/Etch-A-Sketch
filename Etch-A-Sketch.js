let v = 22;
let eachGrid;
let bgColor;
let randomRBG;
let nowOpacity;
const container = document.getElementById('container')
container.style.gridTemplateRows = 'repeat(' + v + ', auto)';
container.style.gridTemplateColumns = 'repeat(' + v + ', auto)';


function colorMeUp() {
    let randomR = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    randomRBG = 'rgb(' + randomR + ' ,' + randomB + ' ,' + randomG + ')';
    return randomRBG;
}

function randomizer() {
    for (i = 0; i < eachGrid.length; i++) {
        eachGrid[i].onmouseover = function () {
            colorMeUp();
            this.style.background = randomRBG
        }
    }
};


let resetbtn = document.getElementById('reset');
resetbtn.addEventListener('click', reset);
resetbtn.addEventListener('click', resize);

let colorbutton = document.getElementById('color');
colorbutton.addEventListener('click', randomizer);

let resetter = document.getElementById('resetter');
resetter.addEventListener('click', reset);

function getNumber() {
    v = prompt('Size of Grid? (2-100)');
    v = Math.floor(v);
    if (v === NaN) {
        return 20;
    }
    return v;
}

function makeGrid() {
    for (i = 0; i < (v * v); i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'sqr');
        container.appendChild(square);
    }
    getGrids();
    hover();
}
makeGrid();

function reset() {
    let grids = document.getElementsByClassName('sqr');
    for (let i = 0; i < grids.length; i++) {
        grids[i].setAttribute('style', 'background-color: white;');
    }
}

function clearContainer() {
    document.getElementById('container').innerHTML = '';
}

function getGrids() {
    eachGrid = document.querySelectorAll('.sqr');
    return eachGrid;
}

function resize() {
    clearContainer();
    getNumber();
    container.style.gridTemplateRows = 'repeat(' + v + ', auto)';
    container.style.gridTemplateColumns = 'repeat(' + v + ', auto)';
    for (i = 0; i < (v * v); i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'sqr');
        container.appendChild(square)

    }
    getGrids();
    hover();
}


function hover() {
    for (i = 0; i < eachGrid.length; i++) {
        eachGrid[i].onmouseover = function () {
            this.style.backgroundColor = 'gray';
        }
    }
}

