<template>
  <div class="app">
    <div class="app-container">
      <div class="nav-bar">
        <router-link to="/">Home</router-link> |
        <router-link to="/login">Sign in</router-link> |
        <router-link to="/register">Sign up</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.nav-bar {
  margin-bottom: 20px;
}
</style>
