<template>
  <div id="app">
    <nav class="level">
      <h4 class="title level-left">[EVENT]-ing</h4>
      <div class="level-right">
        <button class="logoutButton" @click="logout">
          <i class="fa fa-power-off" aria-hidden="true"></i>
        </button>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import auth from './api'

export default {
  name: 'app',
  created() {
    // Try to load the user when the app is loaded
    // This happens only once
    auth.loadUser(this)
  },
  methods: {
    logout() {
      auth.logout(this)
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  margin-bottom: 20px;
  position: fixed;
  width: 100%;
  background-color: #dcdcdc;
  Z-index: 5;
}

.logoutButton {
  border: none;
  background: none;
  margin-right: 10px;
}

.fa-power-off {
  font-size: 35px
}

h4 {
  font-size: 40px;
  margin: 10px 0px 10px 10px
}

h2 {
  font-size: 30px
}


label:hover {
  cursor: pointer
}
</style>
