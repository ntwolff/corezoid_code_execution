const usercode = require('./usercode.js');

const data = {
  lat: '41.8775', // latitude for Glen Ellyn, IL
  lon: '-88.067' // longitude for Glen Ellyn, IL
};

usercode(data)
  .then(result => console.log(JSON.stringify(result, null, 2)))
  .catch(error => console.error(error));