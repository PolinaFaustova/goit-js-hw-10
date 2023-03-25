import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

function fillCountryList(countries) {
  if (countries.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }

  if (countries.length >= 2 && countries.length <= 10) {
    const countryItems = countries
      .map(country => {
        return `
            <li>
              <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="30" height="20">
              ${country.name.common}
            </li>
          `;
      })
      .join('');

    countryList.innerHTML = countryItems;
    countryInfo.innerHTML = '';
    return;
  }
  if (countries.length === 1) {
    const country = countries[0];
    const languages = Object.values(country.languages).join(', ');

    const countryInfoMarkup = `
      <h2>${country.name.official}</h2>
      <p><b>Capital:</b> ${country.capital[0]}</p>
      <p><b>Population:</b> ${country.population}</p>
      <p><b>Languages:</b> ${languages}</p>
      <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="300">`;

    countryInfo.innerHTML = countryInfoMarkup;
    countryList.innerHTML = '';
    return;
  }
}

function clearInput() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

function handleInput() {
  const searchValue = inputEl.value.trim();

  if (!searchValue) {
    clearInput();
    return;
  }

  fetchCountries(searchValue)
    .then(countries => {
      fillCountryList(countries);
    })
    .catch(error => {
      console.log(error);
    });
}

inputEl.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));
