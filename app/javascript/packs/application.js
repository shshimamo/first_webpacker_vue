// <%= javascript_pack_tag 'application' %>の参照先
// この中でVueのインスタンスを生成してerb中のElementである'#app'にバインドする

// imageの取り込みがうまくいかないためコメントアウト...
// const images = require.context('../images', true);
// const imagePath = (name) => images(name, true);

// import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import App from '../app.vue'
import store from '../store.js'
import router from '../router.js'

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false;

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    store: store,
    router: router,
    render: (h) => h(App)
  })
});

