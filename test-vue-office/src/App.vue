<template>
  <div id="app">
    <VueOffice/>
  </div>
</template>

<script>
import VueOffice from './components/VueOffice.vue'

export default {
  name: 'App',
  components: {
    VueOffice
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
</style>
