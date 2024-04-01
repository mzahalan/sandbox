<template>
  <div class="home">Home 
    <p ref="p">My name is: {{ name }} and my age is {{ age }}</p>
    <button ref="b" @click="handleClick">Bold</button>
  </div>
</template>

<script>
import { ref } from 'vue'


export default {
  name: 'Home',
  setup() {
    console.log("Setup")

    const p = ref(null)
    const b = ref(null)

    let name = 'mario'
    let age = 30


    const handleClick = () => {
      if(p.value.classList.contains('test')) {
        p.value.classList.remove('test')
        b.value.textContent = "Bold"
      } else {
        p.value.classList.add('test')
        b.value.textContent = "UnBold"
      }
    }

    return  { name, age, handleClick, p, b }
  }
}
</script>

<style>
.test {
  font-weight: bold;
}
</style>
