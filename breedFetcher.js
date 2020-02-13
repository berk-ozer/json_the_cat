const request = require('request');

const BASE_URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breed = process.argv[2];

request(BASE_URL + breed, (error, response, body) => {
  if (error) {
    console.log('Something went wrong!', error);
    return;
  }

  console.log(JSON.parse(body)[0]);
})