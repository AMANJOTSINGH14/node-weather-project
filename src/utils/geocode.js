const request = require('request');
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiYW1hbmpzaW5naCIsImEiOiJja3FwMXBkNHowMTVjMnJwbjkyZzVnZzNxIn0.qmusK1v6I_Nag1G3p769hA&limit=1";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to server", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find location or server", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location:response.body.features[0].place_name,
      });
    }
  });
};
module.exports = geocode;
