const { fetchWeatherData } = require('./lib/weatherAPI');
const { simplifyWeatherData } = require('./lib/dataProcessor');

module.exports = (data) => {
    return fetchWeatherData(data)
        .catch(error => {
            data.err = error;
            return data;
        });
};
