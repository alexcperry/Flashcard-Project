const nameInput = document.getElementById('name-input');
const nameFormBtn = document.getElementsByClassName('submit-btn')[0];
const introForm = document.getElementsByClassName('intro-form')[0];
const introDiv = document.getElementsByClassName('intro')[0];

nameFormBtn.addEventListener('click', e => {
  if (nameInput.value.trim() === "") {
    e.preventDefault();

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-div';
    errorDiv.innerHTML = `<p>Please submit a non-empty name</p>`;
    introForm.insertBefore(errorDiv, nameInput);
    introDiv.style.height = "20%";
  }
})