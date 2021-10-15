// adds stuffs inside localstorage
if (localStorage.getItem('formData') !== null) {
  let getformData = localStorage.getItem('formData');
  let stringData = JSON.parse(getformData);
  document.getElementById('name_input').value = stringData.name;
  document.getElementById('email').value = stringData.email;
  document.getElementById('in').value = stringData.message;
}
function addStorageArr() {
  const name = document.querySelector('#name_input').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#in').value;
  const storObj = { name, email, message };
  const store = JSON.stringify(storObj);
  localStorage.setItem('formData', store);
}
const formInput = document.querySelectorAll('.input-form');
formInput.forEach((inp) => {
  inp.addEventListener('input', () => {
    addStorageArr();
  });
});