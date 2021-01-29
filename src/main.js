import Vue from 'vue'
import App from './App.vue'
// import SignalR from './lib/Signalr/signalr'
// const signalR = new SignalR()

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
