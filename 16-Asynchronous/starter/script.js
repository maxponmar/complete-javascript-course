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

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// getCountryData('mexico');

// building promises
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN');
    } else {
      reject('You LOSE');
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// promisifying setTimeout
const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(x => console.error(x));
*/

// Async/await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const geolocation = await getPosition();
    console.log(geolocation);
    const { latitude, longitude } = geolocation.coords;

    const resGeo = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    console.log(dataGeo);

    // The old way with .then
    // fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
    //   console.log(res)
    // );

    // Modern way with async/await
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country information');
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    countriesContainer.style.opacity = 1;
  } catch (err) {
    console.log(err.message);
    renderError(`Something went wrong, ${err.message}`);
  }
};

// whereAmI('portugal');
// console.log('FIRST');
btn.addEventListener('click', function () {
  whereAmI();
});
