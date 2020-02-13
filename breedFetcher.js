const request = require('request');

const BASE_URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback) => {
  request(BASE_URL + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
  
    const jsonResponse = JSON.parse(body);
  
    if (jsonResponse[0] && jsonResponse[0].description) {
      callback(null, jsonResponse[0].description);
    } else {
      callback(null, 'Sorry, breed not found.');
    }
  });
};

module.exports = {fetchBreedDescription};