<template>
  <v-app>      
    <v-app-bar
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      dark
      prominent
      app
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>Vuetify</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import {useTheme} from 'vuetify'
export default {
  name: 'App',

  setup() {
    const theme = useTheme()

    const toggleTheme = () => {
      theme.global.name.value = theme.global.current.value.dark ? "light" : "dark"
    }
    return { toggleTheme }
  },
}
</script>
