import Vue from 'vue'
import Router from 'vue-router'
import addBlog from '@/components/addBlog'
import showBlog from '@/components/showBlog.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'show-blog',
      component: showBlog
    }
  ]
})
