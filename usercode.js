const { fetchWeatherData } = require('./lib/weatherAPI');
const { simplifyWeatherData } = require('./lib/dataProcessor');

module.exports = (data) => {
    return fetchWeatherData(data)
        .then(data => {
            //return simplifyWeatherData(data);
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            data.err = error;
            return data;
        });
};
