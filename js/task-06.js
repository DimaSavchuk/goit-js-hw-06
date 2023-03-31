const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (textInput.value.length === Number.parseInt(textInput.dataset.length)) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.add('invalid');
    }
}