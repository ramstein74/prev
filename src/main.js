var Vue = require('vue');
Vue.config.debug = true;
var App1 = require('./app1.vue');
Vue.use(require('vue-resource'));
new Vue({
  el: 'body',
  components: {
    app1: App1
  }
})
