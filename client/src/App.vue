<template>
  <div id="app">
    <nav>
      <h1>[EVENT]-ing</h1>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 30px
}

nav {
  margin-bottom: 20px;
}
</style>
