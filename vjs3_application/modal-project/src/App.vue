<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal  :header="header" :text="text" theme="sale" @close="toggleModal"/>
  </div>
  <button @click.alt="toggleModal">show modal (alt)</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      title: "My First View App :)",
      header: "sign up for the Giveaway!",
      text: "Grab your ...",
      showModal: false
    }
  },
  components: {
    Modal
  },
  methods: {
    toggleModal() {
      this.showModal =!this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
