<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{error}}</div>
    <button @click="showPosts=!showPosts">
      <span v-if="showPosts">Hide Posts</span>
      <span v-else>Show Posts</span>
    </button>
    <button @click="posts.pop()">Delete a Post</button>
    <div v-if="posts.length">
      <PostList :posts="posts" v-if="showPosts"/>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '@/components/PostList.vue'

export default {
  name: 'Home',
  components: {PostList},
  setup() {
    const posts = ref([])
    const showPosts = ref(true)
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts")
        if(!data.ok) {
          throw Error("No Data Available")
        } 
        posts.value = await data.json()

      } catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }
    load()
    return { posts, showPosts, error }
  }
}
</script>

<style>

</style>
