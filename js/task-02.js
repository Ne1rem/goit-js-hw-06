const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  ulElement.appendChild(liElement);
  liElement.classList ="item"
  console.log(ingredient)
});