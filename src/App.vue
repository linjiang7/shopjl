<template>
  <div id="app">
    <img src="https://firebasestorage.googleapis.com/v0/b/firstbot-505d6.appspot.com/o/logo.png?alt=media&token=c81205dd-f3d1-4ef9-b490-beddb669ee78">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
