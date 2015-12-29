module.exports = {
  template: require('./index.html'),
  replace: true,
  data: function() {
    return {
      data_weather: {}
    }
  },
  asyncData: function(resolve, reject) {
      this.$http
      .get('http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=2de143494c0b295cca9337e1e96b00e0')
        .then(function(response) {
          for(i = 0; i < response.data.weather.length; i++) {
            response.data.weather[i].icon = "http://openweathermap.org/img/w/" + response.data.weather[i].icon + ".png"
            console.log(response.data.weather[i].icon)
          }
          return (this.data_weather = response.data)
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
