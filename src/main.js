var Vue = require('vue');
Vue.config.debug = true;
var app = require('./app.vue');
Vue.use(require('vue-resource'))
new Vue({
  el: 'body',
  components: {
    app: app
  }
})
