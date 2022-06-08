//Use the .focus() method on the <input type="text"> element for the "Name" field.
const name = document.querySelector("#name")
name.focus();

const jobRole = document.querySelector("#other-job-role")
const jobSelect = document.querySelector('#title')
// console.log(jobRole, jobSelect);
jobRole.style.display = 'none'
jobSelect.addEventListener('change', (e)=>{
console.log(designSelect.value)
    if(e.target.value === 'other'){
        jobRole.style.display = 'block'
    } else {
        jobRole.style.display = 'none'
    }
})

const colorSelect = document.querySelector("#color")
const designSelect = document.querySelector("#design")
const options = colorSelect.children
console.log(options);

// console.log(colorSelect)
// console.log(jsPuns)
// console.log(heartJs);
colorSelect.setAttribute('disabled', true)
// console.log(colorSelect);
designSelect.addEventListener('change', (e) => {
//    console.log(designSelect.value)
   colorSelect.removeAttribute('disabled')
   for(let i =0; i < options.length; i++){
       console.log(options[i]);
       const value = e.target.value;
       const dataTheme = options[i].getAttribute('')
       console.log(value);
       console.log(dataTheme);
    //    console.log(colorSelect)
    if( value === dataTheme ){ 
       option[i].setAttribute('disabled', false)
       option[i].setAttribute('selected', true)
        // heartJs[i].setAttribute('disabled', false)
       }

   }
//    if( e.target.value === 'heart js' ){ 
//     jsPuns.setAttribute('disabled', true)
//     heartJs.setAttribute('disabled', false)
//    }
//    if( e.target.value === 'js puns'){
//     jsPuns.setAttribute('disabled', false)
//     heartJs.setAttribute('disabled', true)
//    }
})




