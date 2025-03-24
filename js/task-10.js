/*
 * Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
 * количество элементов в `input` и нажимает кнопку `Создать`, после чего
 * рендерится коллекция. При нажатии на кнопку `Очистить` коллекция элементов
 * очищается.
 *
 * Создай функцию `createBoxes(amount)`, которая принимает один параметр - число.
 * Функция создаёт столько `<div>`, сколько указано в `amount`, и добавляет их в
 * `div#boxes`.
 *
 * 1. Размеры самого первого `<div>` - 30px на 30px.
 * 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
 * 3. Все элементы должны иметь случайный цвет фона в формате HEX. Используй
 *    готовую функцию `getRandomHexColor` для получения цвета.
 *
 * Создай функцию `destroyBoxes()`, которая очищает содержимое `div#boxes`, тем
 * самым удаляя все созданные элементы.
 */

const refs = {
  numericInputEl: document.querySelector('#controls > input'),
  createBtn: document.querySelector('#controls > [data-create]'),
  destroyBtn: document.querySelector('#controls > [data-destroy]'),
  boxesContainerEl: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');

    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${i * 10 + size}px`;
    boxEl.style.height = `${i * 10 + size}px`;

    boxes.push(boxEl);
  }

  refs.boxesContainerEl.append(...boxes);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  refs.boxesContainerEl.innerHTML = '';
}

function onCreateBtnClick() {
  const amount = Number(refs.numericInputEl.value);
  createBoxes(amount);
}

function onDestroyBtnClick() {
  refs.numericInputEl.value = '';
  destroyBoxes();
}
