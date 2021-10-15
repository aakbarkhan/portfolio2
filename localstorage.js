// adds stuffs inside localstorage
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
if (localStorage.getItem('formData') !== null) {
  let getformData = window.localStorage.getItem('formData');
  getformData = JSON.parse(getformData);
  document.querySelector('#name_input').value = getformData.name;
  document.querySelector('#email').value = getformData.email;
  document.querySelector('#in').value = getformData.message;
}