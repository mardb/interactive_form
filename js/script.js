const jobRole = document.querySelector('#other-job-role');
const jobSelect = document.querySelector('#title');

let nameInput = document.querySelector('#name');
nameInput.focus();

//Job Role
jobRole.style.display = 'none';
jobSelect.addEventListener('change', ({ target: { value } }) => {
  jobRole.style.display = value === 'other' ? 'block' : 'none';
});

//T-shirt info
const colorSelect = document.querySelector('#color');
const designSelect = document.querySelector('#design');
colorSelect.setAttribute('disabled', true);
//------------------------------------------
// designSelect.addEventListener('change', (e) => {
//   colorSelect.removeAttribute('disabled', false);

//   for (let i = 0; i < colorSelect.length; i++) {
//     const targetVal = e.target.value;
//     const dataTheme = colorSelect.children[i].getAttribute('data-theme');

//     targetVal === dataTheme
//       ? (colorSelect[i].hidden = false) && (colorSelect[i].selected = true)
//       : (colorSelect[i].hidden = true) && (colorSelect[i].selected = false);
//   }
// });

//------------------
// colorSelect.setAttribute("disabled", true);

designSelect.addEventListener("change", (e) => {
  colorSelect.removeAttribute("disabled", false);

  for (let i = colorSelect.length -1 ; i >= 0; i--) {
    const targetVal = e.target.value;
    const dataTheme = colorSelect.children[i].getAttribute("data-theme");

    if (targetVal === dataTheme) {
        colorSelect[i].hidden = false;
        colorSelect[i].selected = true;
    }
    if (targetVal != dataTheme) {
        colorSelect[i].hidden = true;
        colorSelect[i].selected = false;
    }
  }
});
//-------------------

//Register for Activities
const activityCost = document.querySelector('.activities-cost');
const fieldset = document.querySelector('.activities');
let checkboxes = document.querySelectorAll('.activities input');
let dayAndTime = document.querySelectorAll(
  '#activities-box input[type=checkbox]'
);
let totalCost = 0;

fieldset.addEventListener('change', ({ target, target: { checked } }) => {
  let cost = parseInt(target.getAttribute('data-cost'));
  activityCost.innerHTML = `Total: $${
    checked ? (totalCost += cost) : (totalCost -= cost)
  }`;

  //greys out if times conflict

  for (let i = 0; i < dayAndTime.length; i++) {
    if (
      target.getAttribute('data-day-and-time') ===
        dayAndTime[i].getAttribute('data-day-and-time') &&
      checked
    ) {
      dayAndTime[i].disabled = true;
      target.removeAttribute('disabled');
    } else if (
      target.getAttribute('data-day-and-time') !==
        dayAndTime[i].getAttribute('data-day-and-time') &&
      !dayAndTime[i].disabled
    ) {
      dayAndTime[i].removeAttribute('disabled');
      target.enabled = true;
    } else if (
      target.getAttribute('data-day-and-time') ===
        dayAndTime[i].getAttribute('data-day-and-time') &&
      !target.checked
    ) {
      dayAndTime[i].disabled = false;
      target.enabled = false;
    }
  }
  //validates fieldset for activities in real time
  if (!totalCost > 0) {
    fieldset.className = 'activities not-valid';
    fieldset.lastElementChild.style.display = 'block';
  } else {
    fieldset.className = 'activities valid';
    fieldset.lastElementChild.style.display = 'none';
  }
});

//accessibility - obvious focus state indicators for activities have when tabbing through the form's inputs.
// checkboxes.forEach((checkbox) => {
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('focus', () => checkboxes[i].parentElement.classList = 'focus');
    checkboxes[i].addEventListener('blur', () => checkboxes[i].parentElement.classList.remove('focus'))
  }
 

//payment info
const payments = document.querySelectorAll('.payment-type');
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
const cardNum = document.querySelector('#cc-num');
const cvvNum = document.querySelector('#cvv');
const email = document.querySelector('#email');
const formElement = document.querySelector('form');
const zip = document.querySelector('#zip');
//function that checks validation. If it passes, errors do not display
const validationPass = (element) => {
  (element.parentElement.className = 'valid') &&
    (element.parentElement.lastElementChild.style.display = 'none');
};
//function that checks validation. If it doesn't pass, errors display
const validationFail = (element) => {
  (element.parentElement.className = 'not-valid') &&
    (element.parentElement.lastElementChild.style.display = 'block');
};
// checks if name is valid. at least 2 chars long with special characters and digits
const nameValidator = () => {
  const nameIsValid = /^([\x00-\xFF]){1,30}$/.test(nameInput.value);
  nameIsValid ? validationPass(nameInput) : validationFail(nameInput);
  return nameIsValid;
};
// checks if emal is validationFail. This tests for a names with @ symbol, string followed by .com .net .co etc.
const emailValidator = () => {
  const emailIsValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value);
  emailIsValid ? validationPass(email) : validationFail(email);
  return emailIsValid;
};
//checks to see if the user has selected a checkbox in activities section.
const registerValidator = () => {
  let activityIsValid = totalCost > 0;
  !totalCost > 0
    ? (fieldset.className = 'activities not-valid') &&
      (fieldset.lastElementChild.style.display = 'block')
    : (fieldset.className = 'activities valid') &&
      (fieldset.lastElementChild.style.display = 'none');
  return activityIsValid;
};
//function that checks for credit card validation using regex.
const creditCardValidator = () => {
  const ccIsValid =
    //regex from stack overflow - validates for Visa cards starting with the number 4 since visa cards start with 4. 13-16 digits long
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
      cardNum.value
    );
  ccIsValid ? validationPass(cardNum) : validationFail(cardNum);
  return ccIsValid;
};
// checks if zip code the shorthand of zip is valid. 5 digits long
const zipValidator = () => {
  const zipIsValid = /(^\d{5}$)/.test(zip.value);
  zipIsValid ? validationPass(zip) : validationFail(zip);
  return zipIsValid;
};
// checks if the cvv number is 3 digits longs
const cvvValidator = () => {
  const cvvIsValid = /(^\d{3}$)/.test(cvvNum.value);
  cvvIsValid ? validationPass(cvvNum) : validationFail(cvvNum);
  return cvvIsValid;
};

//Real-time error message - Provides form validation error indications at the moment they occur to better serve user. When then user interaction occurs,the validation checks for that input.
cardNum.addEventListener('keyup', creditCardValidator);
cvvNum.addEventListener('keyup', cvvValidator);
email.addEventListener('keyup', emailValidator);
nameInput.addEventListener('keyup', nameValidator);
zip.addEventListener('keyup', zipValidator);
//if all fields are filled correctly, list submit handler will allow the page to refresh.
formElement.addEventListener('submit', (e) => {
  !nameValidator() && e.preventDefault();
  !emailValidator() && e.preventDefault();
  !registerValidator() && e.preventDefault();
  //checks if credit card is chosen and it allows the cvv field and zip field to appear, else, hides those fields and allows person to click the register button.
  if (paymentElement.value === 'credit-card') {
    !creditCardValidator() && e.preventDefault();
    !zipValidator() && e.preventDefault();
    !cvvValidator() && e.preventDefault();
  }
});
