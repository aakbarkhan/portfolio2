// adds stuffs inside localstorage
if (localStorage.getItem('formData') !== null) {
    let getformData = localStorage.getItem('formData');
    let stringData = JSON.parse(getformData);
    document.getElementById('name_input').value = stringData.name;
    document.getElementById('email').value = stringData.email;
    document.getElementById('in').value = stringData.message;
}
function addStorageArr() {
  let name = document.querySelector('#name_input').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#in').value;
  let storObj = { name, email, message };
  let store = JSON.stringify(storObj);
  localStorage.setItem('formData', store);
}
let formInput = document.querySelectorAll('.input-form');
formInput.forEach((inp) => {
  inp.addEventListener('input', () => {
    addStorageArr();
  });
});