//Use the .focus() method on the <input type="text"> element for the "Name" field.
//Name Field
let nameInput = document.querySelector('#name');
// console.log(nameInput.value)
nameInput.focus();

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

fieldset.addEventListener('change', ({ target, target: { checked } }) => {
  let cost = parseInt(target.getAttribute('data-cost'));
  activityCost.innerHTML = `Total: $${
    checked ? (totalCost += cost) : (totalCost -= cost)
  }`;
  //validates fieldset for activities in real time
  if (!totalCost > 0) {
    fieldset.className = 'activities not-valid';
    fieldset.lastElementChild.hide = false;
  } else {
    fieldset.className = 'activities valid';
    fieldset.lastElementChild.hide = true;
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

// Form Validation
// const formValidation = () => {
const formElement = document.querySelector('form');
// const name = document.querySelector("#name");//declared above
const email = document.querySelector('#email');
const activities = document.querySelector('#activities-box');
// console.log(activities.isChecked)
const cardNum = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

const validationPass = (element) => {
  element.parentElement.className = 'valid';
  element.parentElement.lastElementChild.hide = true;
};

const validationFail = (element) => {
  element.parentElement.className = 'not-valid';
  element.parentElement.lastElementChild.hidden = false;
};

const nameValidator = () => {
  const nameIsValid = /^([a-zA-Z ]){2,30}$/.test(nameInput.value);
  console.log(
    `Name validation test on "${nameInput.value}" evaluates to ${nameIsValid}`
  );
  if (nameIsValid) {
    validationPass(nameInput);
  } else {
    validationFail(nameInput);
  }
  return nameIsValid;
};

const emailValidator = () => {
  const emailIsValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value);
  console.log(
    `Email validation test on "${email.value}" evaluates to ${emailIsValid}`
  );
  if (emailIsValid) {
    validationPass(email);
  } else {
    validationFail(email);
  }
  return emailIsValid;
};

const registerValidator = () => {
  let activityIsValid = totalCost > 0;
  console.log(`registration validates to ${activityIsValid}`);
  return activityIsValid;
};

const creditCardValidator = () => {
  const ccIsValid =
    //regex from stack overflow - validates all cards
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
      cardNum.value
    );
  if (ccIsValid) {
    validationPass(cardNum);
  } else {
    validationFail(cardNum);
  }
  console.log(
    `cc validation test on "${cardNum.value}" evaluates to ${ccIsValid}`
  );
  return ccIsValid;
};

const zipValidator = () => {
  const zipIsValid = /(^\d{5}$)/.test(zip.value);
  console.log(
    `cc validation test on "${zip.value}" evaluates to ${zipIsValid}`
  );
  if (zipIsValid) {
    validationPass(zip);
  } else {
    validationFail(zip);
  }
  return zipIsValid;
};

const cvvValidator = () => {
  const cvvIsValid = /(^\d{3}$)/.test(cvv.value);

  console.log(
    `cc validation test on "${cvv.value}" evaluates to ${cvvIsValid}`
  );
  if (cvvIsValid) {
    validationPass(cvv);
  } else {
    validationFail(cvv);
  }
  return cvvIsValid;
};
// event listener that runs helper functions when key is pressed
cardNum.addEventListener('keyup', creditCardValidator);
cvv.addEventListener('keyup', cvvValidator);
email.addEventListener('keyup', emailValidator);
nameInput.addEventListener('keyup', nameValidator);
zip.addEventListener('keyup', zipValidator);


formElement.addEventListener('submit', (e) => {
  if (!nameValidator()) {
    e.preventDefault();
  }
  if (!emailValidator()) {
    e.preventDefault();
  }
  if (!registerValidator()) {
    e.preventDefault();
  }
  if (paymentOptions === 'credit-card') {
    if (!creditCardValidator()) {
      e.preventDefault();
    }
    if (!zipValidator()) {
      e.preventDefault();
    }
    if (!cvvValidator()) {
      e.preventDefault();
    }
  }

  console.log('submit button works');
});
