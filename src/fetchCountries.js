function fetchCountries(name) {
  const URL = `https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`;
  return fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
export { fetchCountries };

// async function fetchCountries(name) {
//   const URL = `https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`;
//   const response = await fetch(URL);
//   const data = await response.json();
//   return data;
// }

// export { fetchCountries };
