'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const url = 'https://restcountries.com/v2/';

/*
const getCountryData = function (country) {
  country = country.toLowerCase();
  const request = new XMLHttpRequest();
  request.open('GET', `${url}/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `<article class="country">
          <img class="country__img" src=${data.flag} />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</spn>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};



const getCountryAndNeighbour = function (country) {
  country = country.toLowerCase();
  const request = new XMLHttpRequest();
  request.open('GET', `${url}/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    const neighbours = data.borders;
    if (!neighbours) return;
    neighbours.forEach(neighbour => {
      const request2 = new XMLHttpRequest();
      request2.open('GET', `${url}/alpha/${neighbour}`);
      request2.send();
      request2.addEventListener('load', function () {
        const data2 = JSON.parse(this.responseText);
        renderCountry(data2, 'neighbour');
      });
    });
  });
};

*/
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
          <img class="country__img" src=${data.flag} />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</spn>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// const request = fetch(`${url}/name/mexico`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbours = data[0]?.borders;
//       if (!neighbours) return;
//       // neighbours.forEach(neighbour => {
//       //   fetch(`https://restcountries.com/v2/alpha/${neighbour}`).then(
//       //     response =>
//       //       response.json().then(data => renderCountry(data, 'neighbour'))
//       //   );
//       // });
//       return neighbours.map(neighbour =>
//         fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//       );
//     })
//     .then(responses =>
//       responses.map(response => response.then(res => res.json()))
//     )
//     .then(dataArray =>
//       dataArray.forEach(data =>
//         data.then(dat => renderCountry(dat, 'neighbour'))
//       )
//     )
//     .catch(err =>
//       renderError(`Something went wrong, ${err.message}. Try Again!`)
//     )
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbours = data[0]?.borders;
      if (!neighbours) throw new Error('No neighbours found!');
      return neighbours.map(neighbour =>
        getJSON(
          `https://restcountries.com/v2/alpha/${neighbour}`,
          'Country not found'
        )
      );
    })
    .then(dataArray =>
      dataArray.forEach(data =>
        data.then(dat => renderCountry(dat, 'neighbour'))
      )
    )
    .catch(err =>
      renderError(`Something went wrong, ${err.message}. Try Again!`)
    )
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});

// getCountryData('mexico');
