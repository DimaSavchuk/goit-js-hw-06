const textInput = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

textInput.addEventListener('input', onInput);
function onInput(event){
    const fontSize = event.currentTarget.value + 'px';
    textSpan.style.fontSize = fontSize;
}


console.dir(textInput);
console.dir(textSpan);