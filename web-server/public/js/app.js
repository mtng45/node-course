console.log('client side javascript file is loaded!')

const fetchForecast = location => {
  fetch('http://localhost:3000/weather?address=' +　location).then((responce) => {
    responce.json().then(data => {
      if (data.error) {
        console.log(data.error)
      } else {
        console.log(data.location)
        console.log(data.forecast)
      }
    })
  })
}

const weatherForm = document.querySelector('form')
const search =  document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value
  fetchForecast(location)
})