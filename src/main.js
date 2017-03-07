import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueCordova from 'vue-cordova'
import VueTap from 'v-tap'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueTap)
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

import 'mint-ui/lib/style.css'

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

import home from './home'
import data from './data'
import account from './account'
/**
 *
 */
const routes = [
  { name: 'home', path: '/home', component: home },
  { name: 'data', path: '/data', component: data },
  { name: 'account', path: '/account', component: account }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router,
  data: function () {
    return {
      cordova: Vue.cordova
    }
  },
  created: function () {
    this.$router.push('/index')
  }
})
