import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Message from '../pages/Home/Message/Message.vue'
import News from '../pages/Home/News/News.vue'

Vue.use(Router)


export default new Router({
  routes: [
    { path: '/', component: Home, children:[
        { path: '/', redirect: '/message' },
        { path: '/message', component: Message },
        { path: '/news', component: News }
      ]},
  ]
})
