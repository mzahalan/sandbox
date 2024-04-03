<template>
    <div>
        <div v-if="error">{{ error }}</div>
        <div class="post" v-else-if="post">
            <h3>{{ post.title }}</h3>
            <div><span v-for="tag in post.tags" :key="tag"># {{ tag }}</span></div>
            <p class="pre">{{ post.body }}</p>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script>
import getPost from '@/composables/getPost'
export default {
    props: ['id'],
    setup (props) {
        const {post, error, load} = getPost(props.id)
        load()
        return {post, error}
    }
}
</script>

<style scoped>
.post {
    max-width: 1200px;
    margin: 0 auto;
}
.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}
.pre {
    white-space: pre-wrap;
}
</style>