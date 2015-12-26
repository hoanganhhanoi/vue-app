
module.exports = {
  template: require(['../views/users/index.html', '../views/users/new.html']),
  replace: true,
  data: function () {
    return {
      msg: 'This is page A.'
    }
  }
}