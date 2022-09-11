<template>
  <div id="main">
    <AppNavbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
export default {
  name: "App",
  props: {},
  components: { AppNavbar },
  data() {
    return {};
  },
  methods: {},
  computed() {},
};
</script>

<style lang="scss">
#main {
  position: relative;
  //background-image: url("images/background2.JPG");
  background-image: linear-gradient(#2c3e50, #7490ab);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  scroll-margin: 0;
  scroll-padding: 0;
  width: 100%;
  height: 100vh;
  size: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b3c3d3;
}
</style>
