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

console.log(activities);

const nameValidator = () => {
  const nameValue = nameInput.value;
  console.log(nameValue);
  const nameIsValid = /^([a-zA-Z ]){2,30}$/.test(nameValue);
  console.log(
    `Name validation test on "${nameValue}" evaluates to ${nameIsValid}`
  );
  return nameIsValid;
};

const emailValidator = () => {
  const emailValue = email.value;
  const emailIsValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailValue);
  console.log(
    `Email validation test on "${emailValue}" evaluates to ${emailIsValid}`
  );
  return emailIsValid;
};

const registerValidator = () => {
  let activityIsValid = totalCost > 0;
  console.log(`registration validates to ${activityIsValid}`);
  return activityIsValid;

};

const creditCardValidator = () => {
  const creditCardValue = cardNum.value;
  const ccIsValid =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(creditCardValue);
  console.log(
    `cc validation test on "${creditCardValue}" evaluates to ${ccIsValid}`
  );
  return ccIsValid;
};

formElement.addEventListener('submit', (e) => {
  const invalid = e.preventDefault();
  // e.preventDefault();
  if (!nameValidator()) {
    invalid;
  }
  if (!emailValidator()) {
    invalid;
  }
  if (!registerValidator()) {
    invalid;
  }
  if(!creditCardValidator()){
    invalid
  }
//   if(paymentOptions === 'credit-card'){
//     if(!creditCardValidator()) {  
//       invalid;
//   }
// }

  console.log('submit button works');
});

//must contain a validly formatted email address => example: dave@teamtreehouse.com
//A few characters for the username, followed by "@", followed by a few more characters and a ".com" for the domain name. You don’t have to account for other top-level domains, like .org, .net, etc.

//must have at least one activity selected

// If and only if credit card is the selected payment method:
// "Card number" field must contain a 13 - 16 digit credit card number with no dashes or spaces. The value does not need to be a real credit card number.
// The "Zip code" field must contain a 5 digit number.
// The "CVV" field must contain a 3 digit number.
// console.log('submit event listener is firing')

// console.log(formElement)
// }
// formValidation()

/*Pro Tip:A recommended approach is to create helper functions for each of the required fields to be validated. For example, for the "Name" field, a function could check the "Name" field’s value. If it equals an empty string or only blank spaces, the function could log out a helpful statement and return false. Otherwise it would return true. And then in the `submit` event listener, you could call that helper function and check what it returns: if it returns false, you would prevent the form from submitting. Otherwise, you would avoid preventing form submission, and allow the `submit` handler to either submit or move onto checking the next required field. */
