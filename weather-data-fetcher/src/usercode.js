const { fetchWeatherData } = require('../lib/weatherAPI');
const { simplifyWeatherData } = require('../lib/dataProcessor');

module.exports = (data) => {
    return fetchWeatherData(data)
        .then(simplifyWeatherData)
        .then(simplifiedData => {
            data.res = simplifiedData;
            return data;
        })
        .catch(error => {
            data.err = error;
            return data;
        });
};
