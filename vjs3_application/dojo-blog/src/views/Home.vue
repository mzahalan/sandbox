<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search Term: {{ search }}</p>
    <div v-for="name in filteredNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'


export default {
  name: 'Home',
  setup() {
    const names = ref(['mario', 'luigi', 'yoshii', 'toad', 'bowser', 'princess', 'koopa'])
    
    const search = ref("")
    
    const filteredNames = computed(() => {

      return names.value.filter((name) => name.includes(search.value))
    })
    
    return {names, search, filteredNames}
  }
}
</script>

<style>

</style>
