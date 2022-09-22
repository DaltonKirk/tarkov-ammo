<template>
  <div id="app">
    <h1>Tarkov Ammo</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data: function() {
    return {
    };
  }
};
</script>

<style lang="scss">
body {
  background: #27272f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 20px auto;
  max-width: 1660px;
  min-height: calc(100vh - 150px);
  font-size: 20px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #e6e6e6;
    margin: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button {
  cursor: pointer;
}
</style>
