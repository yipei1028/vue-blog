import Vue from 'vue'
import Router from 'vue-router'
import addBlog from '@/components/addBlog'
import showBlog from '@/components/showBlog';
import listBlog from '@/components/listBlog';
import header from '@/components/header';
import singleBlog from '@/components/singleBlog';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'show-blog',
      component: showBlog
    },
    {
      path: '/addBlog',
      name: 'add-blog',
      component: addBlog
    },
    {
      path: '/listBlog',
      name: 'list-blog',
      component: listBlog
    },
    {
      path: '/blog/:id',
      name: 'singleBlog',
      component: singleBlog
    }
  ]
})
