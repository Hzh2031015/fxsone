import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/assets/css/common.css";
// 引入公共样式
import "@/assets/css/reset.css";
// 引入公共样式
import "@/assets/js/app.js";
// 引入rem布局

import "/public/iconfont/demo.css";
import "/public/iconfont/iconfont.css";
import "/public/iconfont/iconfont.js"
// 引入公共样式
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入element-ui

import Vant from 'vant'
import "vant/lib/index.css"
Vue.use(Vant)
// 引入Vant

import axios from 'axios'
Vue.prototype.$axios=axios
// 引入axios

import http from './http/http'
Vue.prototype.$http=http
// 引入http




//时间，几天前的过滤器 
Vue.filter("filtime", (val) => {
  let lastime = new Date(val);
  let cretime = new Date();
  let newtime = cretime - lastime;
  var str = "";
  if (newtime >= 0 && newtime < 1000 * 60 * 30) {
    str = "30分钟";
  } else if (newtime >= 1000 * 60 * 30 && newtime < 1000 * 60 * 60) {
    str = "1小时";
  } else if (newtime >= 1000 * 60 * 60 && newtime < 1000 * 60 * 60 * 24) {
    str = "1天";
  } else if (
    newtime >= 1000 * 60 * 60 * 24 &&
    newtime < 1000 * 60 * 60 * 24 * 7
  ) {
    str = "7天";
  } else {
    str = "一个月";
  }
  return str + "前";
});

Vue.filter('time',(val)=>{
  return new Date(val*1000).toLocaleString()
})
// 时间换算

import { Lazyload } from "vant";
Vue.use(Lazyload);
//在main.js引入懒加载的指令


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
