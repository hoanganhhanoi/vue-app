
module.exports = {
  template: require('./index.html'),
  methods: {
    change: function(event) {
      console.log(this.$route.router.go("/signup"));
    }
  }
}