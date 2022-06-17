//Use the .focus() method on the <input type="text"> element for the "Name" field.
//Name Field
let nameInput = document.querySelector('#name');
const jobRole = document.querySelector('#other-job-role');
const jobSelect = document.querySelector('#title');
const colorSelect = document.querySelector('#color');
const designSelect = document.querySelector('#design');

nameInput.focus();

//Job Role
jobRole.style.display = 'none';
jobSelect.addEventListener('change', ({ target: { value } }) => {
  jobRole.style.display = value === 'other' ? 'block' : 'none';
});

//T-shirt info
colorSelect.setAttribute('disabled', true);

designSelect.addEventListener('change', (e) => {
  colorSelect.removeAttribute('disabled', false);

  for (let i = 0; i < colorSelect.length; i++) {
    const targetVal = e.target.value;
    const dataTheme = colorSelect.children[i].getAttribute('data-theme');

    targetVal === dataTheme
      ? (colorSelect[i].hidden = false) && (colorSelect[i].select = true)
      : (colorSelect[i].hidden = true) && (colorSelect[i].select = false);
  }
});

//Register for Activities
let checkboxes = document.querySelector('.activities input');
// Total: $
const activityCost = document.querySelector('.activities-cost');
//Register for activities aka fieldset
const fieldset = document.querySelector('.activities');
let totalCost = 0;

fieldset.addEventListener('change', ({ target, target: { checked } }) => {
  let cost = parseInt(target.getAttribute('data-cost'));
  activityCost.innerHTML = `Total: $${
    checked ? (totalCost += cost) : (totalCost -= cost)
  }`;

  // console.log(activities.getAttribute('data-day-and-time'))
  //greys out if times conflict
  for (let i = 0; i < activities.length; i++) {
    console.log(activities[i]);
    // .getAttribute('data-day-and-time'))
  }
  //validates fieldset for activities in real time
  if (!totalCost > 0) {
    fieldset.className = 'activities not-valid';
    fieldset.lastElementChild.style.display = 'block';
  } else {
    fieldset.className = 'activities valid';
    fieldset.lastElementChild.style.display = 'none';
    // console.log(fieldset.lastElementChild);
  }
});

//payment info
const payments = document.querySelectorAll('.payment-type');
//important payment
const paymentElement = document.getElementById('payment');
let paymentOptions = payments;
//hides credit card
for (let i = 0; i < paymentOptions.length; i++) {
  payments[i].hidden = i !== 0;
  const paymentOptionValue = paymentElement.children[i].getAttribute('value');
  if (paymentOptionValue === 'credit-card') {
    paymentElement[i].setAttribute('selected', true);
  }
}
//hides btc, paypal and credit card options
paymentElement.addEventListener('change', ({ target: { value } }) => {
  for (let i = 0; i < paymentOptions.length; i++) {
    paymentOptions[i].hidden = value !== paymentOptions[i].id;
  }
});

const activities = document.querySelector('#activities-box');
// console.log(activities.isChecked)
const cardNum = document.querySelector('#cc-num');
const cvv = document.querySelector('#cvv');
const email = document.querySelector('#email');
const formElement = document.querySelector('form');
// const name = document.querySelector("#name");//declared above
const zip = document.querySelector('#zip');

const validationPass = (element) => {
  (element.parentElement.className = 'valid') &&
    (element.parentElement.lastElementChild.style.display = 'none');
};

const validationFail = (element) => {
  (element.parentElement.className = 'not-valid') &&
    (element.parentElement.lastElementChild.style.display = 'block');
};

const nameValidator = () => {
  const nameIsValid = /^([a-zA-Z ]){2,30}$/.test(nameInput.value);
  nameIsValid ? validationPass(nameInput) : validationFail(nameInput);
  return nameIsValid;
};

const emailValidator = () => {
  const emailIsValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value);
  emailIsValid ? validationPass(email) : validationFail(email);
  return emailIsValid;
};

const registerValidator = () => {
  let activityIsValid = totalCost > 0;
  !totalCost > 0
    ? (fieldset.className = 'activities not-valid') &&
      (fieldset.lastElementChild.style.display = 'block')
    : (fieldset.className = 'activities valid') &&
      (fieldset.lastElementChild.style.display = 'none');
  return activityIsValid;
};

const creditCardValidator = () => {
  const ccIsValid =
    //regex from stack overflow - validates all cards
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
      cardNum.value
    );
  ccIsValid ? validationPass(cardNum) : validationFail(cardNum);
  return ccIsValid;
};

const zipValidator = () => {
  const zipIsValid = /(^\d{5}$)/.test(zip.value);
  zipIsValid ? validationPass(zip) : validationFail(zip);
  return zipIsValid;
};

const cvvValidator = () => {
  const cvvIsValid = /(^\d{3}$)/.test(cvv.value);
  cvvIsValid ? validationPass(cvv) : validationFail(cvv);
  return cvvIsValid;
};

// activities.addEventListener('change', registerValidator)
cardNum.addEventListener('keyup', creditCardValidator);
cvv.addEventListener('keyup', cvvValidator);
email.addEventListener('keyup', emailValidator);
nameInput.addEventListener('keyup', nameValidator);
zip.addEventListener('keyup', zipValidator);

formElement.addEventListener('submit', (e) => {
  !nameValidator() && e.preventDefault();
  !emailValidator() && e.preventDefault();
  !registerValidator() && e.preventDefault();

  if (paymentElement.value === 'credit-card') {
    !creditCardValidator() && e.preventDefault();
    !zipValidator() && e.preventDefault();
    !cvvValidator() && e.preventDefault();
  }

  console.log('submit button works');
});
