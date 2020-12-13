class getWeather {
  constructor(apiKey, units = 'imperial') {
    this.apiKey = apiKey
    this.units = units
  }

  async getWeatherByZip
}



function getWeather(zip) {
    const apiKey = '4a3c80e31151dcb42d04a6fac45f5f77'
    const units = 'imperial'
    const path = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=&units=${units}`
    fetch(path)
      .then(res => res.json())
      .then(json => handleJson(json))
      .catch(err => console.log(err.message))
    
 }
