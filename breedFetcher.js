const request = require('request');

const BASE_URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const requestedUrl = BASE_URL + process.argv[2];

request(requestedUrl, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.log('Something went wrong while fetching the data!\n', error);
    return;
  }

  const jsonResponse = JSON.parse(body);

  if (jsonResponse[0] && jsonResponse[0].description) {
    console.log(jsonResponse[0].description);
  } else {
    console.log('Sorry, breed not found.');
  }

});