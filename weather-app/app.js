const request = require('request')

const url = 'https://api.darksky.net/forecast/5e626dd2819db395be4eb5253f8edc51/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!')
  } else if (response.body.error) {
    console.log('Unable to find location')
  } else {
    const { currently: { temperature, precipProbability }, daily,　latitude, longitude } = response.body
    console.log(`
      ${daily.data[0].summary}
      it is currently ${temperature} degrees out.
      there is a ${precipProbability}% chance of rain.
    `)
  }
})

// Geocoding
const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXRuZyIsImEiOiJjazFkczQ3ZnMwYmZzM25tbWtuZTRiZmlqIn0.lF1bn3kHdD3t88vrBhceYQ'

request({ url: geocodingURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location service!')
  } else if (!response.body.features.length) {
    console.log('Unable to find features')
  } else {
    const longitude = response.body.features[0].center[0]
    const latitude　= response.body.features[0].center[1]
    console.log('latitude', latitude, 'longitude', longitude)
  }
})