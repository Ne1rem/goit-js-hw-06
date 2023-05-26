function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const divBoxes = document.querySelector('.boxes');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const controls = document.querySelector("#controls");
const input = controls.firstElementChild;

buttonCreate.addEventListener("click", createBlockDiv);

function createBlockDiv() {
  const inputValue = input.value;
  for (let i = 0; i < inputValue; i++) {
    const divElement = document.createElement('div');
    let color = getRandomHexColor();
    divElement.textContent = color;
    divElement.style.height = '30px';
    divElement.style.width = '30px';
    divBoxes.appendChild(divElement);
  }
}

buttonDestroy.addEventListener("click", reset);

function reset() {
  divBoxes.innerHTML = "";
}
