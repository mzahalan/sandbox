<template>
    <div class="results">
        <p>Results {{ score }}ms</p>
        <p class="rank">{{ rank }}</p>
    </div>
</template>


<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 250){
            this.rank = 'Ninja Fingers'
        } else if (this.score < 400) {
            this.rank = 'Rapid Reflexes'
        } else {
            this.rank = 'Snail Pace...'
        }
    }
}</script>


<style>
.results { 
    font-size: 1.5em;
    color: #333;
    text-align: center;
    padding: 20px 0;
    font-weight: bold;
}
.rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
}
</style>