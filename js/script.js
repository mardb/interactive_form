//Use the .focus() method on the <input type="text"> element for the "Name" field.
const name = document.querySelector("#name");
name.focus();

const jobRole = document.querySelector("#other-job-role");
const jobSelect = document.querySelector("#title");
// console.log(jobRole, jobSelect);
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
// colorSelect.children

// console.log(colorSelect)
// console.log(jsPuns)
// console.log(heartJs);
colorSelect.setAttribute("disabled", true);
designSelect.addEventListener("change", (e) => {
  //    console.log(designSelect.value)
  colorSelect.removeAttribute("disabled", false);
  for (let i = 0; i < colorSelect.length; i++) {
    // console.log(options[i]);
    console.log(colorSelect);
    // const targetVal = e.target.value;
    // const dataTheme = options[i].getAttribute("data-theme");
    //    console.log(targetVal);
    // console.log(dataTheme);
    //children of color select
    if (e.target.value !== colorSelect.children[i].getAttribute("data-theme")) {
      colorSelect.children[i].disabled = true;
    //   colorSelect.children[i].setAttribute("selected", false);
    //   designSelect[i].setAttribute("selected", true);
    } else{
        colorSelect.children[i].disabled = false;
        // colorSelect.children[i].setAttribute("hidden", false);
  
    }
}
 
});
