//Use the .focus() method on the <input type="text"> element for the "Name" field.
//Name Field
const name = document.querySelector("#name");
name.focus();

//Job Role
const jobRole = document.querySelector("#other-job-role");
const jobSelect = document.querySelector("#title");

jobRole.style.display = "none";
jobSelect.addEventListener("change", (e) => {
  console.log(designSelect.value);
  if (e.target.value === "other") {
    jobRole.style.display = "block";
  } else {
    jobRole.style.display = "none";
  }
});
//T-shirt info
//selects colors of shirts
const colorSelect = document.querySelector("#color");
//selects theme js or puns
const designSelect = document.querySelector("#design");

colorSelect.setAttribute("disabled", true);

designSelect.addEventListener("change", (e) => {
  colorSelect.removeAttribute("disabled", false);

  for (let i = 0; i < colorSelect.length; i++) {
    const targetVal = e.target.value;
    const dataTheme = colorSelect.children[i].getAttribute("data-theme");

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

let checkboxes = document.querySelector(".activities input");
// Total: $
const activityCost = document.querySelector(".activities-cost");
//Register for activities aka fieldset
const fieldset = document.querySelector(".activities");
let totalCost = 0;

fieldset.addEventListener("change", (e) => {
  let dataCost = e.target.getAttribute("data-cost");
  let cost = parseInt(dataCost);

  if (e.target.checked) {
    activityCost.innerHTML = `Total: $${(totalCost += cost)}`;
  } else {
    activityCost.innerHTML = `Total: $${(totalCost -= cost)}`;
  }
});

//Payment info
//selects whole select menu
const payment = document.querySelector("#payment ");
//options below
const credit = document.querySelector("#credit-card");
console.log(credit);
const paypal = document.querySelector("#paypal");
console.log(pp.id);
const btc = document.querySelector("#bitcoin");

paypal.style.display = "none";
btc.style.display = "none";
payment.children[1].setAttribute("selected", true);
payment.addEventListener("change", (e) => {
    // design some conditional logic inside event listener to show or hide content based on what the selection is. Whichever payment option is selected, should be shown, and the other options should be hidden.try turning the display on or off
if(e.target.value) {


}
});

/*"Payment Info" section
The credit card payment option should be selected for the user by default. So when the form first loads, "Credit Card" should be displayed in the "I'm going to pay with" <select> element, and the credit card payment section should be the only payment section displayed in the form’s UI. And when the user selects one of the payment options from the "I'm going to pay with" drop down menu, the form should update to display only the chosen payment method section.

Program the "I'm going to pay with" <select> element to listen for user changes. When a change is detected, hide all payment sections in the form’s UI except the selected one.*/
