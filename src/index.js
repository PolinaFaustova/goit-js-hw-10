import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

// function inputInfo(event) {
//   event.preventDefault();
//   console.log(inputEl.value);

//   fetch('https://restcountries.com/v3.1/name/{name}')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }

// function fetchCountries(name) {

// }

// inputEl.addEventListener('input', inputInfo);

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
