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


//Створено елементи списку
const ingredientsPotatoes = document.createElement('li'); 
const ingredientsMushrooms = document.createElement('li'); 
const ingredientsGarlic = document.createElement('li');
const ingredientsTomatos = document.createElement('li');
const ingredientsHerbs = document.createElement('li');
const ingredientsCondiments = document.createElement('li');

//Текстове наповнення елементів списку
ingredientsPotatoes.textContent = ingredients[0];
ingredientsMushrooms.textContent = ingredients[1];
ingredientsGarlic.textContent = ingredients[2];
ingredientsTomatos.textContent = ingredients[3];
ingredientsHerbs.textContent = ingredients[4];
ingredientsCondiments.textContent = ingredients[5];

//Присвоєння класу 'item' елементам списку
ingredientsPotatoes.classList.add('item');
ingredientsMushrooms.classList.add('item');
ingredientsGarlic.classList.add('item');
ingredientsTomatos.classList.add('item');
ingredientsHerbs.classList.add('item');
ingredientsCondiments.classList.add('item');

//Встановлення елементів списку в розмітку HTML.
list.append(ingredientsPotatoes, ingredientsMushrooms, ingredientsGarlic, ingredientsTomatos, ingredientsHerbs, ingredientsCondiments);