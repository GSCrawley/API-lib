function getWeather(zip, apiKey) {
          
    const units = 'imperial'
    const path = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`
    fetch(path).then((res) => {
      return res.json()
    }).then((json) => {
      console.log(json)
    }).catch((err) => {
      console.log(err.message)
    })
 }
