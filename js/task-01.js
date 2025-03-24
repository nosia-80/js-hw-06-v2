/*
 * В HTML есть список категорий `ul#categories`.
 *
 * Напиши скрипт, который:
 *
 * 1. Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
 *    элементов `li.item`.
 * 2. Для каждого элемента `li.item` в списке `ul#categories`, найдёт и выведет в
 *    консоль текст заголовка элемента (тега `<h2>`) и количество элементов в
 *    категории (всех вложенных в него `<li>`).
 *
 * Для выполнения этой задачи нужно использовать метод forEach() и свойства
 * навигации по DOM.
 *
 * В результате в консоли будут выведены такие сообщения.
 */

const categoriesItemsEl = document.querySelectorAll('#categories > .item');

console.log('Number of categories: ', categoriesItemsEl.length);

categoriesItemsEl.forEach(item => {
  const categoryTitleEl = item.firstElementChild;
  const categoryListElementsEl = item.lastElementChild.children;

  console.log('Category: ', categoryTitleEl.textContent);
  console.log('Elements: ', categoryListElementsEl.length);
});
