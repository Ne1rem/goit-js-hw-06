const categoriesAmount = document.querySelector('ul#categories');
const items = categoriesAmount.children;
console.log(`Number of categories: ${items.length}`);

[...items].forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});