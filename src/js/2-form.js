const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const formState = {
    email: "",
    message: ""
}

const savedState = localStorage.getItem("feedback-form-state");
if (savedState) {
    const state = JSON.parse(savedState);
    emailInput.value = state.email;
    messageInput.value = state.message;
}

form.addEventListener('input', (event) => {
    formState.email = emailInput.value;
    formState.message = messageInput.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formState));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(formState);
    localStorage.removeItem("feedback-form-state");
    form.reset();
});