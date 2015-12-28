require("bootstrap-webpack")
var Vue = require('vue')
var VueRouter = require('vue-router')

// Telling Vue to use the router
Vue.use(VueRouter)
// Telling Vue to use the vue-resource
Vue.use(require('vue-resource'))

var app = Vue.extend({
  components: {
    'app-header': function(resolve) {
      require(['./views/layouts/header'], resolve)
    },
    'app-footer': function(resolve) {
      require(['./views/layouts/footer'], resolve)
    }
  }
});

// Initializing the router with options
var router = new VueRouter({
  history: false
});

router.map({
  '*': {
    component: {
      template: 
        '<div>' + 
          '<h1>Hello VueJS</h1>' +
          '<a v-link="{ path: \'/signin\' }">Change State</a>' + 
        '</div>'
    }
  },
  '/users': {
    component: require('./views/users')
  },
  '/weather': {
    component: require('./views/weather')
  },
  '/signin': {
    component: require('./views/signin')
  },
  '/signup': {
    component: require('./views/signup')
  }
})

router.start(app,"#app")