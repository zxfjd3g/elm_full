import Vue from 'vue'
import FastClick from 'fastclick'

import App from './App'
import router from './router'
import store from './store'
import './config/rem'

// 处理移动端点击延迟300ms的问题
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
