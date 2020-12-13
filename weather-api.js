class getWeather {
  constructor(apiKey, units = 'imperial') {
    this.apiKey = apiKey
    this.units = units
  }

  async getWeatherByZip(zip) {
    const {apiKey, units} = this
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    const res = await fetch(path)
    const json = await res.json()
    const { clouds, cod, main, timezone, visibility, weather, wind } = json
    const { temp, pressure, humidity, temp_max, temp_min } = main
    const { description, icon } = weather[0]
    return { temp, pressure, humidity, temp_min, temp_max, clouds, cod, visibility, wind, description, icon }
  }

  
} 



function getWeather(zip) {
    const apiKey = '4a3c80e31151dcb42d04a6fac45f5f77'
    const units = 'imperial'
    const path = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=&units=${units}`
    

    const { base, clouds, cod, eee}



    fetch(path)
      .then(res => res.json())
      .then(json => handleJson(json))
      .catch(err => console.log(err.message))
    
 }
