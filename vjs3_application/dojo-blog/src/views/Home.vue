<template>
  <div class="home">Home 
    <h2>Refs</h2>
    <p>My name is: {{ human.name }} and my age is {{ human.age }}</p>
    <button @click="handleClick">More Bob</button>
    <input type="text" v-model="human.name">
    <button @click="human.age++">Age++</button>
  </div>
  <div>
    <h2>reactive</h2>
    <p>My name is: {{ human2.name }} and my age is {{ human2.age }}</p>
    <input type="text" v-model="human2.name">
    <button @click="handleClick2">More Obo</button>
    <button @click="human2.age++">Age++</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'


export default {
  name: 'Home',
  setup() {
    console.log("Setup")

    // refs work better with external reactive components
    const human = ref({name: 'mario', age: 30})

    // Note reactive variables can't be of primative type (they won't update)
    const human2 = reactive({name: 'luigi', age:21})

    const handleClick = () => {
      human.value.name = human.value.name + ' bob'
      human.value.age = human.value.age + 1
    }

    const handleClick2 = () => {
      human2.name = human2.name + ' obo'
      human2.age = human2.age + 1
    }

    return  { human, human2, handleClick, handleClick2 }
  }
}
</script>

<style>
.test {
  font-weight: bold;
}
</style>
