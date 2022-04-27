<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
html {
  height: 100%;
  background-color: white;
}
body {
  width: 100%;
  height: 100%;
  background: url("../public/5848e4a37f5e4fb39f4c4384a9c27523.jpg")
    no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
