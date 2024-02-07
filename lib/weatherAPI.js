const https = require('https');

exports.fetchWeatherData = (data) => {
    return new Promise((resolve, reject) => {
        // Default coordinates for Chicago, IL
        let lat = '41.8781';
        let lon = '-87.6298';

        // Check if lat and lon are provided in data and are valid
        if (data.lat && !isNaN(data.lat) && data.lon && !isNaN(data.lon)) {
            lat = data.lat;
            lon = data.lon;
        }

        const options = {
            hostname: 'api.weather.gov',
            path: `/points/${lat},${lon}`,
            headers: {
                'User-Agent': 'myweatherapp.com, contact@myweatherapp.com',
                'Accept': 'application/geo+json'
            }
        };

        https.get(options, (resp) => {
            let body = '';
            resp.on('data', (chunk) => {
                body += chunk;
            });
            resp.on('end', () => {
                if (resp.statusCode === 200) {
                    resolve(JSON.parse(body));
                } else {
                    reject(new Error('Failed to fetch weather data'));
                }
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
};
