/*
 * Напиши скрипт, который изменяет цвета фона элемента `<body>` через инлайн стиль
 * при клике на `button.change-color` и выводит значение цвета в `span.color`.
 *
 * Для генерации случайного цвета используй функцию `getRandomHexColor`.
 */

const changeColorBtn = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
