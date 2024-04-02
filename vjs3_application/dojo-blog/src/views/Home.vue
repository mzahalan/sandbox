<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search Term: {{ search }}</p>
    <div v-for="name in filteredNames" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'


export default {
  name: 'Home',
  setup() {
    const names = ref(['mario', 'luigi', 'yoshii', 'toad', 'bowser', 'princess', 'koopa'])
    const search = ref("")

    const stopWatch = watch(search, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })
    
    const stopEffect = watchEffect(() => {
      console.log('watch effect ran' + search.value)
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    const filteredNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return {names, search, filteredNames, handleClick}
  }
}
</script>

<style>

</style>
