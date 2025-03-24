/*
 * Напиши скрипт управления формой логина.
 *
 * 1. Обработка отправки формы `form.login-form` должна быть по событию `submit`.
 * 2. При отправке формы страница не должна перезагружаться.
 * 3. Если в форме есть незаполненные поля, выводи `alert` с предупреждением о том,
 *    что все поля должны быть заполнены.
 * 4. Если пользователь заполнил все поля и отправил форму, собери значения полей в
 *    объект, где имя поля будет именем свойства, а значение поля - значением
 *    свойства. Для доступа к элементам формы используй свойство `elements`.
 * 5. Выведи объект с введёнными данными в консоль и очисти значения полей формы
 *    методом `reset`.
 */

const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === '' || password === '') {
    return alert('Please fill in all fields!');
  }

  const formData = {
    mail,
    password,
  };

  event.currentTarget.reset();
  console.log(formData);
}
