// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false;

// 引入插件文件并注册
import { NavBar, Tabbar, TabbarItem,Swipe, SwipeItem,Card,Button,Tab, Tabs,Lazyload  } from 'vant';
import axios from 'axios'
Vue.prototype.$http=axios
axios.defaults.baseURL="http://localhost:5000"

import moment from 'moment'
Vue.filter("datefmt", function (date,str="YYYY-MM-DD hh:mm:ss") {
  return moment(date).format(str)
})
const options={
  loading:'https://file.digitaling.com/eImg/uimages/20150907/1441607667921515.gif'
}
Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Card).use(Button).use(Tab).use(Tabs).use(Lazyload,options )

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
