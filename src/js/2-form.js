const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const formData = {
    email: "",
    message: ""
}

const savedState = localStorage.getItem("feedback-form-state");

if (savedState) {
    const state = JSON.parse(savedState);
    emailInput.value = state.email;
    messageInput.value = state.message;
    formData.email = emailInput.value;
    formData.message = messageInput.value;
}

form.addEventListener('input', (event) => {
    formData.email = emailInput.value;
    formData.message = messageInput.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert("Fill please all fields");
        return;   
    }
    
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    form.reset();
    formData.email = "";
    formData.message = "";
});