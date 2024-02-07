exports.simplifyWeatherData = (verboseData) => {
    return new Promise((resolve, reject) => {
        try {
            const simplifiedData = {
                location: {
                    type: verboseData.geometry.type,
                    coordinates: verboseData.geometry.coordinates,
                },
                forecastSummary: {
                    lastUpdated: verboseData.properties.updated,
                    forecastGenerator: verboseData.properties.forecastGenerator,
                    generatedAt: verboseData.properties.generatedAt,
                    validTimes: verboseData.properties.validTimes,
                },
                weatherConditions: verboseData.properties.periods.map(period => ({
                    period: period.name,
                    startTime: period.startTime,
                    endTime: period.endTime,
                    isDaytime: period.isDaytime,
                    temperature: period.temperature,
                    temperatureUnit: period.temperatureUnit,
                    shortForecast: period.shortForecast,
                    detailedForecast: period.detailedForecast,
                    windSpeed: period.windSpeed,
                    windDirection: period.windDirection,
                }))
            };
            resolve(simplifiedData);
        } catch (error) {
            reject(error);
        }
    });
};
