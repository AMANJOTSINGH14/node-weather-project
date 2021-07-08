const request = require('request');
const forecast = (latitude, longitude,callback) => {
  const url =
  'http://api.weatherstack.com/current?access_key=c96d8387a7ebb641024e459d9947c0f2&query='+ latitude +','+ longitude
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to weater server", undefined);
    } else if (response.body.error) {
      callback("unable to find location of weather service", undefined);
    } else {
      callback(undefined, 
       'Weather is '+ response.body.current.weather_descriptions[0 ]+ ' . The temperature is: '+response.body.current.temperature+" .But it feels like: "+response.body.current.feelslike
      );
    }
  });
};
module.exports = forecast;
