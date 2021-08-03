

const form = document.getElementById('form');

function submitForm(e){
  e.preventDefault();
  alert('Your information has been submitted. Thank you for joining!');
}

form.addEventListener('submit', submitForm);
