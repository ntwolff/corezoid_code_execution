const usercode = require('./usercode.js');

const data = {
  lat: '40.7128', // latitude for New York, NY
  lon: '-74.006' // longitude for New York, NY
};

usercode(data)
  .then(result => console.log(result))
  .catch(error => console.error(error));