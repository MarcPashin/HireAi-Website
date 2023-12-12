const scriptURL = 'https://script.google.com/macros/s/AKfycbyP9eyLkrvo-SvHWiOejmqP_wWLwe-ESg9uPvw21ydzjWOoho3aooNRgsb3tlpAUyWJ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


document.querySelector(".banner__close").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
});
