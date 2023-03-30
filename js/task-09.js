function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColor = document.querySelector('.change-color');
const body = document.querySelector('body');

changeColor.addEventListener('click', onClick);

function onClick() {
    body.style.backgroundColor = getRandomHexColor();
    document.querySelector('.color').textContent = getRandomHexColor();
}