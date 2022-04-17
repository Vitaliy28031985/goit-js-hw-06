const inputEl = document.querySelector('#validation-input'),
checkInput = inputEl.getAttribute('data-length'); 

const refs = {
input: inputEl,
check: inputEl.getAttribute('data-length'),
};

refs.input.addEventListener('blur', print);

function print (event) {
  
   if (event.currentTarget.value.length <= refs.check) {
      refs.input.classList.add('valid');
      refs.input.classList.remove('invalid');  
   }
   else {
      refs.input.classList.add('invalid');
      refs.input.classList.remove('valid'); 
   }
  }
