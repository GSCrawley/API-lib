function getWeather(zip) {
    const apiKey = '52136878ccc16d9cb8faf89b266167b4'
    const units = 'imperial'
    const path = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=&units=${units}`
    fetch(path)
      .then(res => res.json())
      .then(json => handleJson(json))
      .catch(err => console.log(err.message))
    
 }
