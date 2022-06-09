//Use the .focus() method on the <input type="text"> element for the "Name" field.
const name = document.querySelector("#name");
name.focus();

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
