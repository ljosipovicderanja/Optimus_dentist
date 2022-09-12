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

  margin: 0 0 0 0;
  padding: 0;
  border: 0;
  scroll-margin: 0;
  scroll-padding: 0;
  height: 100vh;
  max-height: 100vh;
}

#app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4a5592;
  margin: 0 0 0 0;
  background-size: auto;
  padding: 0;
  border: 0;
  height: 100vh;
  max-height: 100vh;
}
</style>
