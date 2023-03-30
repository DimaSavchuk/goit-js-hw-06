const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value")


let steck = 0;

incrementBtn.addEventListener('click', incrementClick);
function incrementClick() {
    steck += 1;
    value.textContent = steck;
}

decrementBtn.addEventListener('click', decrementClick);
function decrementClick() {
    steck -= 1;
    value.textContent = steck;
}
