/*
 * Счётчик состоит из спана и кнопок, которые при клике должны увеличивать и
 * уменьшать его значение на единицу.
 *
 * - Создай переменную `counterValue`, в которой будет храниться текущее значение
 *   счётчика, и инициализируй её значением `0`.
 * - Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
 *   значение счётчика.
 * - Обновляй интерфейс новым значением переменной `counterValue`.
 */

const refs = {
  incrementBtn: document.querySelector('#counter > [data-action="increment"]'),
  decrementBtn: document.querySelector('#counter > [data-action="decrement"]'),
  valueEl: document.querySelector('#counter > #value'),
};

let counterValue = 0;

refs.incrementBtn.addEventListener('click', () => {
  refs.valueEl.textContent = increment();
});

refs.decrementBtn.addEventListener('click', () => {
  refs.valueEl.textContent = decrement();
});

function increment() {
  return (counterValue += 1);
}

function decrement() {
  return (counterValue -= 1);
}
