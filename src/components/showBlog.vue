<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search..."> 
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link :to="'/blog/' + blog.id"><h2>{{ blog.title | toUpperCase }}</h2></router-link>
      <p>{{ blog.body | snippet }}</p>
    </div>
  </div>
</template>


<script>
import searchMixin from '@/mixins/searchMixin';
  export default{
    data(){
      return {
        blogs: [],
        search: ''
      }
    },
    methods:{

    },
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(data){
          this.blogs = data.body.slice(0,10);
        })
    },
    computed:{
      
    },
    //register the filter locally
    filters:{
      toUpperCase(value){
        return value.toUpperCase();
      }
    },
    mixins:[searchMixin]
  }
</script>


<style scoped>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}

.single-blog{
  padding: 20px;
  margin: 20px 0px;
  box-sizing: border-box;
  background-color: #eee;
}

input{
  width: 100%;
  height: 20px;
  padding: 5px;
}
</style>
