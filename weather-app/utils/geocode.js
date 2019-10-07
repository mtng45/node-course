const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibXRuZyIsImEiOiJjazFkczQ3ZnMwYmZzM25tbWtuZTRiZmlqIn0.lF1bn3kHdD3t88vrBhceYQ`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (!response.body.features.length) {
      callback('Unable to find features', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1], 
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      })
    }
  })
}

module.exports = geocode