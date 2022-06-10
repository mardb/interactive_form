//Use the .focus() method on the <input type="text"> element for the "Name" field.
//Name Field
const name = document.querySelector('#name');
name.focus();

//Job Role
const jobRole = document.querySelector('#other-job-role');
const jobSelect = document.querySelector('#title');

jobRole.style.display = 'none';
jobSelect.addEventListener('change', (e) => {
  console.log(designSelect.value);
  if (e.target.value === 'other') {
    jobRole.style.display = 'block';
  } else {
    jobRole.style.display = 'none';
  }
});
//T-shirt info
//selects colors of shirts
const colorSelect = document.querySelector('#color');
//selects theme js or puns
const designSelect = document.querySelector('#design');

colorSelect.setAttribute('disabled', true);

designSelect.addEventListener('change', (e) => {
  colorSelect.removeAttribute('disabled', false);

  for (let i = 0; i < colorSelect.length; i++) {
    const targetVal = e.target.value;
    const dataTheme = colorSelect.children[i].getAttribute('data-theme');

    if (targetVal === dataTheme) {
      colorSelect[i].hidden = false;
      colorSelect[i].select = true;
    }
    if (targetVal != dataTheme) {
      colorSelect[i].hidden = true;
      colorSelect[i].select = false;
    }
  }
});

//Register for Activities
let checkboxes = document.querySelector('.activities input');
// Total: $
const activityCost = document.querySelector('.activities-cost');
//Register for activities aka fieldset
const fieldset = document.querySelector('.activities');
let totalCost = 0;

fieldset.addEventListener('change', ({target, target: {checked}}) => {
  let cost = parseInt(target.getAttribute("data-cost"));
    activityCost.innerHTML = `Total: $${checked ? (totalCost += cost) : (totalCost -= cost)}`;
});

//payment info
const payments = document.querySelectorAll('.payment-type');
const paymentType = document.getElementsByTagName('div');
const paymentElement = document.getElementById('payment');
let paymentOptions = payments;

for (let i = 0; i < paymentOptions.length; i++) {
  payments[i].hidden = i !== 0;
  const paymentOptionValue = paymentElement.children[i].getAttribute('value');
  if (paymentOptionValue === 'credit-card') {
    payment[i].setAttribute('selected', true);
  }
}

payment.addEventListener('change', ({ target: { value } }) => {
  for (let i = 0; i < paymentOptions.length; i++) {
    paymentOptions[i].hidden = value !== paymentOptions[i].id;
  }
});

// Form Validation
