// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill'
import BackToTop from 'vue-backtotop'

Vue.use(BackToTop)

Vue.use(Vuetify, { theme: {
  primary: '#060084',
  secondary: '#ffb325',
  accent: '#ffb325',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#0d9900'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
