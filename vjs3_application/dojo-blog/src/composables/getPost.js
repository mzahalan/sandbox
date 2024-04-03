import {ref} from "vue"

const getPost = (postId) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            console.log(`getPost: ${postId}`)
            let data = await fetch(`http://localhost:3000/posts/${postId}`)

            if(!data.ok) {
                throw Error("Invalid Post")
            }
            post.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {post, error, load}
}

export default getPost