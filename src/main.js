var Vue = require('vue');
Vue.config.debug = true;
var App = require('./app.vue');
Vue.use(require('vue-resource'));
new Vue({
  el: 'body',
  components: {
    app: App
  }
})
