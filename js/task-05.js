/*
 * Напиши скрипт, который при наборе текста в инпуте `input#name-input` (событие
 * `input`), подставляет его текущее значение в `span#name-output`. Если инпут
 * пустой, в спане должна отображаться строка `"Anonymous"`.
 */

const nameInputEl = document.querySelector('#name-input');
const nameLabelEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onInputName);

function onInputName(event) {
  const name = event.currentTarget.value;

  name === ''
    ? (nameLabelEl.textContent = 'Anonymous')
    : (nameLabelEl.textContent = name);
}
