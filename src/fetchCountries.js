function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
  return fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
export { fetchCountries };
