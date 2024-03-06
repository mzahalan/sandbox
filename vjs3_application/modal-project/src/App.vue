<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for half price!</p>
      <template v-slot:links>
        <a href="#">Sign up now!</a>
        <a href="#">More Info</a>
      </template>
    </Modal>
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
