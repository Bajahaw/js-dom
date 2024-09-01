// Task 1
const menu = document.getElementsByClassName('nav')[0];
const menuToggle = document.getElementsByClassName('menu-toggle')[0];

function showMenu() {
  if (menu.style.top !== '0px') {
    menu.style.top = '0';
  } else menu.style.top = '-100%';
}

menuToggle.addEventListener('click', showMenu);

//-------------------------------------------------------
// Task 2

const button = document.getElementsByClassName('btn-submit')[0];
const form = document.getElementsByClassName('form')[0];

function checkFields() {
  const fields = Array.from(document.getElementsByClassName('form-control'));
  fields.pop();
  fields.push(document.getElementsByClassName('form-checkbox-control')[0]);

  // eslint-disable-next-line no-restricted-syntax
  for (const field of fields) {
    if (field && field.value === '') {
      button.disabled = true;
      return;
    }
    if (field && field.type === 'checkbox') {
      if (!field.checked) {
        button.disabled = true;
        return;
      }
    }
  }
  button.disabled = false;
}

form.addEventListener('change', checkFields);
button.disabled = true;

//---------------------------------------------------
// Task 3
