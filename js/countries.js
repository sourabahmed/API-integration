const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
};
loadCountries()
const displayCountries = countries => {
    const countryDiv = document.getElementById('country');
    // for(country of countries){
    //     console.log(country);
    // }
    countries.forEach(country => {
        console.log(country.name);
        const div = document.createElement('div');
        div.classList.add('count')
        div.innerHTML = `
            <h2>Name: ${country.name}</h2>
            <p>Capital: ${country.capital}<p>
            <button onclick="loadCoutryByName('${country.name}')">Show details</button>
        `
        countryDiv.appendChild(div);
        // const h2 = document.createElement('h2');
        // h2.innerText = country.name;
        // div.appendChild(h2);
        // const p = document.createElement('p');
        // p.innerText = country.capita;
        // div.appendChild(p);
        // countryDiv.appendChild(div);
    });
};
const loadCoutryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
};
const displayCountryDetail = detail => {
    console.log(detail);
    const div = document.getElementById('country-detial');
    div.innerHTML =`
        <h4>Name: ${detail.name}</h4>
        <p>Population: ${detail.population}<p>
        <img width="150px" src="${detail.flag}">
    `
};