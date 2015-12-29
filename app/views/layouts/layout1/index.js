module.exports = {
  template: require('./index.html'),
  replace: true,
  components: {
    'app-header': function(resolve) {
      require(['./header'], resolve)
    },
    'app-footer': function(resolve) {
      require(['./footer'], resolve)
    }
  }
}