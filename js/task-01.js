
//Знайдені потрібні DOM елементи
const listCategories = document.querySelector('#categories');
const categories = document.querySelectorAll('.item');



const numberCategories = listCategories.children.length;
console.log(`Number of categories: ${numberCategories}`);

const categoriesArray = [...categories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);

//Виведено в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в категорію "Аnimals")
// const animalsCategories = listCategories.firstElementChild;
// const titleAnimals = animalsCategories.firstElementChild.textContent;
// const listAnimalsCategories = animalsCategories.lastElementChild;
// const numberAnimalsCategories = listAnimalsCategories.children.length;

// console.log(`Category: ${titleAnimals} Elements: ${numberAnimalsCategories}`);


//Виведено в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в категорію "Products")

//Виведено в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в категорію "Technologies")
// const titlTechnologies = categories[2].firstElementChild.textContent;
// const listTechnologiesCategories = categories[2].lastElementChild;
// const numberTechnologiesCategories = listTechnologiesCategories.children.length;

// console.log(`Category: ${titlTechnologies} Elements: ${numberTechnologiesCategories}`)