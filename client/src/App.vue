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
  background-size: auto 100%;
  background-position: center;
  margin: 0 0 0 0;
  padding: 0;
  border: 0;
  scroll-margin: 0;
  scroll-padding: 0;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  size: 100%;
}

#app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b3c3d3;
  margin: 0 0 0 0;
  padding: 0;
  border: 0;
}
</style>
