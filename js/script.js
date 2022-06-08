//Use the .focus() method on the <input type="text"> element for the "Name" field.
const name = document.querySelector("#name")
name.focus();

const jobRole = document.querySelector("#other-job-role")
const jobSelect = document.querySelector('#title')
// console.log(jobRole, jobSelect);
jobRole.style.display = 'none'
jobSelect.addEventListener('change', (e)=>{

    if(e.target.value === 'other'){
        jobRole.style.display = 'block'
    } else {
        jobRole.style.display = 'none'
    }
})

