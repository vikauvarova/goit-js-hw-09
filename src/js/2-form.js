const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const formData = {
    email: "",
    message: ""
}

if (savedState) {
  try {
    const state = JSON.parse(savedState);
    formData.email = state.email ?? '';
    formData.message = state.message ?? '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch (error) {
    console.error('Invalid data in localStorage', error);
  }
}

form.addEventListener('input', (event) => {
    formData.email = emailInput.value.trim();
    formData.message = messageInput.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem("feedback-form-state");
  form.reset();
  formData.email = '';
  formData.message = '';
});

