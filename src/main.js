// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Video from 'video.js'
import 'video.js/dist/video-js.css'

// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
Vue.prototype.$cdn = $cdn
Vue.prototype.$video = Video

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
// import '@/assets/css/h5.css'
// 移动端适配
import 'lib-flexible/flexible.js'

// filters
import './filters'
Vue.config.productionTip = false

// import { imgsPreloader } from './config/imgpreload.js';
// import imgPreloaderList from './config/imagepreloadlist.js';

// (async () => {
//   await imgsPreloader(imgPreloaderList);
//   //关闭加载弹框
//   document.querySelector('.loading').style.display = 'none';
//   new Vue({
//     router,
//     store,
//     render: h => h(App)
//   }).$mount('#app');
// })();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
