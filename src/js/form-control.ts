import isEmail from 'validator/lib/isEmail';
const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  shouldSendForm(this) && this.submit();
});

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email Inválido');
}

function checkEqualPasswords(
  input: HTMLInputElement,
  input2: HTMLInputElement,
): void {
  if (input.value !== input2.value) {
    showErrorMessage(input2, 'As senhas não conferem');
  }
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (input.value === '') {
      showErrorMessage(input, 'Campo não pode ficar vazio');
    }
  });
}

function shouldSendForm(form: HTMLFormElement): boolean {
  return (
    username.value !== '' &&
    isEmail(email.value) &&
    password.value !== '' &&
    password2.value !== '' &&
    password.value === password2.value
  );
}

showErrorMessage(username, 'MENSAGEM');
hideErrorMessages(form);
