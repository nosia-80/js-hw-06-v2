/*
 * Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
 * (событие `input`) и изменяет инлайн-стиль `span#text` обновляя свойство
 * `font-size`. В результате при перетаскивании ползунка будет меняться размер
 * текста.
 */

const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rangeEl.addEventListener('input', event => {
  textEl.style.fontSize = event.currentTarget.value + 'px';
});
