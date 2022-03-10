<template>
  <div id="head">Nookie-动森猜村民</div>
</template>

<script>
import search from './components/search.vue'

export default {
  name: 'App',
  components: {
    search
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
#head{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
}
</style>
