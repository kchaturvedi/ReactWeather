var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=18798b912fca65cb7a731925b5b84d0a&units=metric'

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return {
          temp: res.data.main.temp,
          loc: res.data.name + ', ' + res.data.sys.country
        }
      }
    }, function (res) {
      throw new Error(res.data.message)
    })
  }
};
