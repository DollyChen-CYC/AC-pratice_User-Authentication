const form = document.querySelector('.login-form')

form.addEventListener('submit', function handleFormSubmit(event) {
  form.classList.add('was-validated')
  if (!form.checkValidity()) {
    event.stopPropagation()
    event.preventDefault()
    alert('請填入符合格式的帳號密碼')

  }
})