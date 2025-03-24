/*
 * В HTML есть пустой список `ul#ingredients`.
 *
 * В JavaScript есть массив строк.
 *
 * Напиши скрипт, который для каждого элемента массива `ingredients`:
 *
 * 1. Создаст отдельный элемент `<li>`. Обязательно используй метод
 *    `document.createElement()`.
 * 2. Добавит название ингредиента как его текстовое содержимое.
 * 3. Добавит элементу класс `item`.
 * 4. После чего вставит все `<li>` за одну операцию в список `ul.ingredients`.
 */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

// const items = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemEl = document.createElement('li');

//   itemEl.textContent = ingredients[i];
//   itemEl.classList.add('item');
//   items.push(itemEl);
// }

// const items = ingredients.map(item => {
//   const itemEl = document.createElement('li');

//   itemEl.textContent = item;
//   itemEl.classList.add('item');

//   return itemEl;
// });

const makeIngredientsItems = ingredients => {
  return ingredients.map(item => {
    const itemEl = document.createElement('li');

    itemEl.textContent = item;
    itemEl.classList.add('item');

    return itemEl;
  });
};

const items = makeIngredientsItems(ingredients);

ingredientsEl.append(...items);
