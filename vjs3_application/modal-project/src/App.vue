<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>

  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for half price!</p>
      <template v-slot:links>
        <a href="#">Sign up now!</a>
        <a href="#">More Info</a>
      </template>
    </Modal>
  </teleport>

  <teleport to=".modals" v-if="showModal2">
    <Modal @close="toggleModal2">
      <h1>modal2</h1>
      <p>This is a second modal</p>
      <template v-slot:links>
        <a href="#">New Links!</a>
        <a href="#">More Info</a>
      </template>
    </Modal>
  </teleport>

  <button @click.alt="toggleModal">show modal (alt)</button>
  <button @click="toggleModal2">Show New Modal</button>
</template>

<script>

// challenge - 
// - Create an extra button to open a different modal
// - use the same modal component but pass in a different template (slot)
// - use a different method (toggleTwo) and data (showModalTwo)


import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      title: "My First View App :)",

      showModal: false,
      showModal2: false,
    }
  },
  components: {
    Modal
  },
  methods: {
    toggleModal() {
      this.showModal =!this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app, .modals {
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
