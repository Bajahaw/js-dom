// THE FINAL SOLUTION IS NOT YET IMPLEMENTED, WAIT FOR THE NEXT COMMITS
const menu = document.getElementsByClassName('nav')[0];
const menuToggle = document.getElementsByClassName('menu-toggle')[0];
const button = document.getElementsByClassName('btn-submit')[0];

function showMenu() {
  if (menu.style.top !== '0px') {
    menu.style.top = '0';
  } else menu.style.top = '-100%';
}

console.log('hello world');

function checkfields() {
  const fields = [
    document.getElementById('name'),
    document.getElementById('surname'),
    document.getElementById('email'),
    document.getElementById('dropdown'),
    document.getElementById('date'),
    document.getElementById('phone'),
    document.getElementByClassName('form-checkbox-checkmark')[0]
  ];
  let condition = false;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 8; i++) {
    console.log(fields[i]);
    if (fields[i].value === '') {
      condition = true;
      break;
    }
  }
  if (condition) {
    button.disabled = false;
  }
}

button.addEventListener('keyup', () => checkfields());
button.disabled = true;
menuToggle.addEventListener('click', showMenu);
