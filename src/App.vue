<template>
  <div id="app">
    <h1>Tarkov Ammo</h1>
    <div id="nav">
      <router-link to="/">Compare Ammo</router-link>
      <router-link to="/maps">Maps</router-link>
      <router-link to="/about">About</router-link>
    </div>
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
  margin-top: 60px;
  margin: 60px auto;
  max-width: 1660px;
  min-height: 700px;
}

.grid {
  display: grid;
  grid-template-columns: 50% 50%;
  div {
    height: 40px;
    line-height: 40px;
  }
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
</style>
