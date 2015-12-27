module.exports = {
  template: require('./index.html'),
  replace: true,
  data: function() {
    return {
      data_weather: Object
    }
  },
  ready: function() {
      this.$http
      .get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0')
        .then(function(response) {
          this.data_weather = response.data
          this.data_weather.weather[1].icon = "http://openweathermap.org/img/w/" + response.data.weather[1].icon + ".png"
          console.log(response.data)
        })
  }
}
