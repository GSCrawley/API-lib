class MyWeather {
  constructor(apiKey, units = 'imperial') {
    this.apiKey = '4a3c80e31151dcb42d04a6fac45f5f77'
    this.units = units
  }

  async getWeatherByZip(zip) {
    const {apiKey, units} = this
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    const res = await fetch(path)
    const json = await res.json()
    const { base, clouds, cod, coord, dt, id, main, name, sys, timezone, visibility, weather, wind } = json
    const { temp, pressure, humidity, temp_max, temp_min } = main
    const { description, icon } = weather[0]
    return { temp, pressure, humidity, temp_min, temp_max, clouds, cod, visibility, wind, description, icon }

  }
  async getWeatherByCity(city) {
    const {apiKey, units} = this
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
    const res = await fetch(path)
    const json = await res.json()
    const { base, clouds, cod, coord, dt, id, main, name, sys, timezone, visibility, weather, wind } = json
    const { temp, pressure, humidity, temp_max, temp_min } = main
    const { description, icon } = weather[0]
    return { temp, pressure, humidity, temp_min, temp_max, clouds, cod, visibility, wind, description, icon }
  }

  async getWeatherByCityID(cityId) {
    const {apiKey, units} = this
    const path = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=${units}`
    const res = await fetch(path)
    const json = await res.json()
    const { base, clouds, cod, coord, dt, id, main, name, sys, timezone, visibility, weather, wind } = json
    const { temp, pressure, humidity, temp_max, temp_min } = main
    const { description, icon } = weather[0]
    return { temp, pressure, humidity, temp_min, temp_max, clouds, cod, visibility, wind, description, icon }
  }
  async getWeatherByGeo(lat, lon) {
    const {apiKey, units} = this
    const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
    const res = await fetch(path)
    const json = await res.json()
    const { base, clouds, cod, coord, dt, id, main, name, sys, timezone, visibility, weather, wind } = json
    const { temp, pressure, humidity, temp_max, temp_min } = main
    const { description, icon } = weather[0]
    return { temp, pressure, humidity, temp_min, temp_max, clouds, cod, visibility, wind, description, icon }
  }
}
