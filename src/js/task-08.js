const formInput = document.querySelector(".login-form");
console.dir(formInput);

formInput.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (!email.value || !password.value) {
        alert("Усі поля мають бути заповнені!");
    } else {
        console.log({ email: email.value, password: password.value });
        event.currentTarget.reset();
    }

}