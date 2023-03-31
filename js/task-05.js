const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener('input', onInput);

function onInput(event) {
    if (textInput.value === "") {
        textOutput.textContent = "Anonymus";
    } else {
        textOutput.textContent = event.currentTarget.value;
    }

}