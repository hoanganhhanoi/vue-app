var Vue = require('vue')
var VueRouter = require('vue-router')
var router = new VueRouter()

router.map({
  '/users': {
    component: require('./views/users')
  }
})

router.redirect({
  '*': '/users'
})

const App = Vue.extend(require('./views/layouts/app.js'))

router.start(App, '#app')