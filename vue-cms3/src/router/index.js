import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

// 引入定义好的四个子组件
import Index from '../components/index';
import Second from '../components/secondPage';
import Third from '../components/thirdPage';
import Fourth from '../components/fourthPage';
import NewList from "../components/news/NewList"
import NewsInfo from "../components/news/NewsInfo"
import PhotoList from "../components/photos/PhotoList"
import PhotoInfo from "../components/photos/PhotoInfo"
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }

    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/second',
      component: Second
    },
    {
      path: '/third',
      component: Third
    },
    {
      path: '/fourth',
      component: Fourth
    },
    {
      path: '/home/newslist',
      component: NewList
    },
    {
      path: '/home/NewsInfo',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      component: PhotoInfo
    },
  ]
})
