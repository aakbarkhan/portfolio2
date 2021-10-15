// adds stuffs inside localstorage
function addStorageArr() {
    const name = document.querySelector('#name_input').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#in').value;
    const storObj = { name, email, message };
    const store = JSON.stringify(storObj);
    localStorage.setItem('formData', store);
    return store;
  }

  let dataa = addStorageArr();