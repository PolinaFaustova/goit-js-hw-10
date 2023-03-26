import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

function render(countries) {
  if (countries.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  } else if (countries.length === 1) {
    renderCountryInfo(countries[0]);
    return;
  } else if (countries.length >= 2 && countries.length <= 10) {
    return renderCountryList(countries);
  } else {
    Notiflix.Notify.failure('Oops, something went wrong');
  }
}

function createCountryInfo(country) {
  const { name, flags, population, capital } = country;
  const languages = Object.values(country.languages).join(', ');
  return `<li><div class="flag-wrapper"><img src="${flags.svg}" alt="flags" width="55">
    <h2 class="title-country">${name.official}</h2></div>
    <p>Population: ${population}</p>
    <p>Capital: ${capital}</p>
    <p>Language: ${languages}</p>
    </li>`;
}

function createCountryList(country) {
  const { name, flags } = country;
  return `
  <li>
    <div class="flag-wrapper">
      <img src="${flags.svg}" alt="flags" width="55">
      <h2 class="title-country">${name.official}</h2>
    </div>
  </li>
`;
}

function renderCountryList(countries) {
  const countriesMarkup = countries.map(createCountryList).join('');
  countryList.innerHTML = `<ul>${countriesMarkup}</ul>`;
}

function renderCountryInfo(country) {
  const countryMarkup = createCountryInfo(country);
  countryInfo.innerHTML = `<div>${countryMarkup}<div>`;
  countryList.innerHTML = '';
}

function clearInput() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

function handleInput(event) {
  event.preventDefault();
  const searchQuery = inputEl.value.trim();

  if (!searchQuery) {
    clearInput();
    return;
  }

  fetchCountries(searchQuery)
    .then(render)
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
      console.log(error);
    });
}

inputEl.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));
