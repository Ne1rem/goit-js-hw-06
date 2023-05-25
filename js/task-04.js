const counterValueElement = document.querySelector('#value');
const buttonDecrement = document.querySelector(`[data-action="decrement"]`);
const buttonIncrement = document.querySelector(`[data-action="increment"]`);

let counterValue = 0;

buttonDecrement.addEventListener("click", decrementKeypressCounter);

function decrementKeypressCounter() {
  counterValue -= 1;
  counterValueElement.textContent = counterValue;
}

buttonIncrement.addEventListener("click", incrementKeypressCounter);

function incrementKeypressCounter() {
  counterValue += 1;
  counterValueElement.textContent = counterValue;
} 