/*
 * Напиши скрипт, который при потере фокуса на инпуте (событие `blur`), проверяет
 * его содержимое на правильное количество введённых символов.
 *
 * - Сколько символов должно быть в инпуте указывается в его атрибуте
 *   `data-length`.
 * - Если введено подходящее количество символов, то `border` инпута становится
 *   зелёным, если неправильное - красным.
 *
 * Для добавления стилей, используй CSS-классы `valid` и `invalid`, которые мы уже
 * добавили в исходные файлы задания.
 */

const validationInputEl = document.querySelector('#validation-input');
const dataLength = Number(validationInputEl.dataset.length);

validationInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.length;

  if (inputLength === dataLength) {
    validationInputEl.classList.replace('invalid', 'valid');
    validationInputEl.classList.add('valid');
  } else {
    validationInputEl.classList.replace('valid', 'invalid');
    validationInputEl.classList.add('invalid');
  }
}
