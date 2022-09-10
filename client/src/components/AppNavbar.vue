<template>
  <div id="mainNavbar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand">DentistFinder</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Add dentist</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  props: {},
};
</script>

<style lang="scss" scoped>
#mainNavbar {
  background-color: #7490ab;
}
</style>
