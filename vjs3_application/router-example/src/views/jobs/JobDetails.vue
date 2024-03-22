<template>
    <div v-if="job != null">
        <h1>{{ job.title }}</h1>
        <p>The job id is {{ job.id }}</p>
        <p>{{ job.details }}</p>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            job: null
        }
    },

    mounted() {
        fetch(`http://localhost:3000/jobs/${this.id}`)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err.message))
    }
    // MDZ: npx json-server --watch data/db.json
}
</script>

<style></style>