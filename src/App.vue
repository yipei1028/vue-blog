<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlog from './components/listBlog.vue';
import header from '@/components/header';
export default {
  components:{
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blog': listBlog,
    'app-header': header
  },
  name: 'App'
}
</script>

<style>
</style>
