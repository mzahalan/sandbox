<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <PostCard :post="post"/>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import PostCard from './PostCard.vue'

export default {
    components: {PostCard},
    props: ['posts'],
    setup (props) {

        onMounted(() => {
            console.log('PostList Mounted')
        })

        onUnmounted(() => {
            console.log('PostList Unmounted')
        })

        onUpdated(() => {
            console.log("compontent updated")
        })

        return {}
    }
}
</script>

<style scoped>
.post-list {
    background: white;
}
</style>