<template>
  <div class="app">
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeName('zelda')">change name</button>
    <button @click="changeAge('30')">change age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const name = ref('Link');
    const age = ref<number|string>(25);
    return { name, age }
  },
  methods: {
    changeName(name: string) {
      this.name = name;
      return name;
    },
    changeAge(age: string|number) {
      this.age = age
      return age;
    }
  }
});
</script>

<style></style>
