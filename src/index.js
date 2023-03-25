import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

function handleInput(event) {
  event.preventDefault();
  console.log(inputEl.value);
}
inputEl.addEventListener('input', handleInput, fetchCountries);

// import './css/styles.css';
// import { fetchCountries } from './fetchCountries';

// const inputEl = document.querySelector('#search-box');
// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');

// const DEBOUNCE_DELAY = 300;

// function handleInput(event) {
//   event.preventDefault();
//   const searchQuery = inputEl.value.trim();

//   if (searchQuery === '') {
//     return;
//   }

//   fetchCountries(searchQuery)
//     .then(data => {
//       console.log(JSON.stringify(data, null, 2));
//     })
//     .catch(error => console.log(error));
// }

// inputEl.addEventListener('input', handleInput);

// ЗАДАЧА 2
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ
//  https://www.thecocktaildb.com/api.php ,
//  ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА,
// КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР(ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

// const refs = {
//   form: document.querySelector("#form"),
//   input: document.querySelector("#input"),
//   container: document.querySelector(".container"),
// };

// function submitInfo(event) {
//   event.preventDefault();
//   console.log(refs.input.value);

//   fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//     .then((response) => response.json())
//     .then((data) => allCollection(data.drinks))
//     .catch((error) => console.log(error));
// }

// refs.form.addEventListener("submit", submitInfo);

// // idDrink
// // strAlcoholic
// // strDrinkThumb

// function createMarkup({ idDrink, strAlcoholic, strDrinkThumb }) {
//   const card = `<div><span>${idDrink}</span><p>${strAlcoholic}</p><img src="${strDrinkThumb}" alt="${strAlcoholic}"></div>`;
//   refs.container.insertAdjacentHTML("beforeend", card);
// }

// function allCollection(newCollection) {
//   newCollection.forEach((element) => {
//     createMarkup(element);
//   });
// }
