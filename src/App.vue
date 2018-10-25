<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
export default {
  components:{
    'add-blog': addBlog,
    'show-blog': showBlog
  },
  name: 'App'
}
</script>

<style>
</style>
