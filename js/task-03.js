/*
 * Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть
 * список `ul.gallery`.
 *
 * Используй массив объектов `images` для создания элементов `<img>`, вложенных в
 * `<li>`. Для создания разметки используй шаблонные строки и метод
 * `insertAdjacentHTML()`.
 *
 * - Все элементы галереи должны добавляться в DOM за одну операцию вставки.
 * - Добавь минимальное оформление галереи флексбоксами или гридами через CSS
 *   классы.
 */

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeGalleryImageItem = ({ url, alt }) => {
  return `
  <li class="gallery__item">
    <img src="${url}" alt="${alt}" height="200">
  </li>
  `;
};

const galleryEl = document.querySelector('.gallery');
const galleryImageItemsMarkup = images.map(makeGalleryImageItem).join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryImageItemsMarkup);

console.log(galleryImageItemsMarkup);
