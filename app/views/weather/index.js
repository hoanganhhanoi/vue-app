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
      .get('http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=2de143494c0b295cca9337e1e96b00e0')
        .then(function(response) {
          this.data_weather = response.data
          for(i = 0; i < this.data_weather.weather.length; i++) {
            this.data_weather.weather[i].icon = "http://openweathermap.org/img/w/" + response.data.weather[i].icon + ".png"
            console.log(this.data_weather.weather[i].icon)
          }
        })
  },
  filters: {
    img_filter: function(value) {
      if(value == undefined)
        return ""
      return value
    }
  }
}
