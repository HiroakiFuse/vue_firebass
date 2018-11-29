// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'
import {config} from './firebase/firebase_config'
Vue.use(VueFire)
Vue.use(Vuetify)
Vue.config.productionTip = false


export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
