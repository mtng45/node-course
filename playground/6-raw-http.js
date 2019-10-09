/**
 * HTTPS
 * https://nodejs.org/dist/latest-v10.x/docs/api/https.html#https_https
 * HTTPS is the HTTP protocol over TLS/SSL. In Node.js this is implemented as a separate module.
 */
const https = require('https')
const url = 'https://api.darksky.net/forecast/5e626dd2819db395be4eb5253f8edc51/40,-75'

const request = https.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('An error', error)
})

request.end()
