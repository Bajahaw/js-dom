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

const submit = document.getElementsByClassName('btn-submit')[0];
const form = document.getElementsByClassName('form')[0];

function checkFields() {
  // To delete the comment section and add the checkbox
  const fields = Array.from(document.getElementsByClassName('form-control'));
  fields.pop();
  fields.push(document.getElementsByClassName('form-checkbox-control')[0]);

  // eslint-disable-next-line no-restricted-syntax
  for (const field of fields) {
    if (field && field.value === '') {
      submit.disabled = true;
      return;
    }
    if (field && field.type === 'checkbox') {
      if (!field.checked) {
        submit.disabled = true;
        return;
      }
    }
  }
  submit.disabled = false;
}

form.addEventListener('change', checkFields);
submit.disabled = true;

//---------------------------------------------------
// Task 3
const modal = document.getElementById('js-modal');
const close = modal.getElementsByClassName('btn-close')[0];
const confirm = modal.getElementsByClassName('btn-confirm')[0];
const list = modal.getElementsByClassName('modal-list')[0];
const toast = document.getElementById('js-toast');

submit.addEventListener('click', (event) => {
  const fields = Array.from(document.getElementsByClassName('form-control'));
  event.preventDefault();
  modal.style.visibility = 'visible';
  modal.style.opacity = '1';
  modal.getElementsByClassName('modal-content')[0].style.opacity = '1';

  list.innerHTML = `
    <li><strong>First Name:</strong> ${fields[0].value}</li>
    <li><strong>Last Name:</strong> ${fields[1].value}</li>
    <li><strong>Email:</strong> ${fields[2].value}</li>
    <li><strong>Phone:</strong> ${fields[3].value}</li>
    <li><strong>City:</strong> ${fields[4].value}</li>
    <li><strong>Date:</strong> ${fields[5].value}</li>
    <li><strong>Comment:</strong> ${fields[6].value}</li>
  `;
});

close.addEventListener('click', () => {
  modal.style.visibility = 'hidden';
  modal.style.opacity = '0';
  modal.getElementsByClassName('modal-content')[0].style.opacity = '0';
});

confirm.addEventListener('click', () => {
  form.submit();

  //----------------------------------
  // Task 4

  toast.style.opacity = '1';
});
