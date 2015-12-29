require("bootstrap-webpack")
var Vue = require('vue')
var VueRouter = require('vue-router')
var VueAsyncData = require('vue-async-data')

// Telling Vue to use the router
Vue.use(VueRouter)
// Telling Vue to use the vue-resource
Vue.use(require('vue-resource'))
// Telling Vuw to use the vue-async-data
Vue.use(require('vue-async-data'))

Vue.component('home', {
    template: '<div>home-template</div>'
});

var app = Vue.extend({
  data: function(){
    return {
      currentView: 'layout1'
    }
  },
  replace: true,
  components: {
    'layout1': function(resolve) {
      require(['./views/layouts/layout1'], resolve)
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