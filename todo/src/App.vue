<template>
  <v-app>      
    <v-app-bar
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      dark
      prominent
      app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Vuetify</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
    </v-app-bar>
    <NavDrawer v-model="drawer"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import {ref} from 'vue'
import {useTheme} from 'vuetify'
import NavDrawer from '@/components/NavDrawer'
export default {
  name: 'App',
  components: {NavDrawer},
  setup() {
    const theme = useTheme()
    const drawer = ref(false)
    const toggleTheme = () => {
      theme.global.name.value = theme.global.current.value.dark ? "light" : "dark"
    }
    return { toggleTheme, drawer }
  },
}
</script>
