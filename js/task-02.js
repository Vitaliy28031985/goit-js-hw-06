const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Знайдено список в який потрібно вставити елементи
const list = document.querySelector('#ingredients');
const listElements = ingredients.map((ingredients) => `<li class="item">${ingredients}</li>`)
.join('');

list.insertAdjacentHTML('afterbegin', listElements);
