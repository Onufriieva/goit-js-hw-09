import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');

form.addEventListener('submit', (onSubmitForm));

let position = 0;

function onSubmitForm(e){
e.preventDefault();
let delay = delayEl.value ;
const step = stepEl.value;
const amount = amountEl.value;

for (position = 1; position <= amount; position += 1) {

createPromise(position, delay)
.then(({ position, delay }) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
  .catch(({ position, delay }) => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
  delay = (position - 1) * step + +delay;
}
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if(shouldResolve){
    resolve({position, delay})
    } else {
    reject({position, delay})
  }
  }, delay);
});
}

