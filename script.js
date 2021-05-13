const form = document.getElementById('form');
const form = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailVal = email.value;

  //check if it is a valid email
  if (!validateEmail(emailVal)) {
    form.classList.add('error');
    form.classList.remove('success');
  } else {
    form.classList.remove('error');
    form.classList.remove('success');
  }
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}











//it will be submited when we click the button, when it is submited, we want to prevent  default, which will be to refresh the page, next take the value of the input and check if it is valid
