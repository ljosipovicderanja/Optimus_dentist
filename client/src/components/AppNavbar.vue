<template>
  <div id="mainNavbar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand">
        <img src="@/assets/dentist_logo_transparent.png" class="rounded-circle centered" style="max-width: 40px; max-height: 40px" alt="Avatar" />
        DentistFinder
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-if="InternalStorage.userAuth">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item" v-if="!InternalStorage.userAuth">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!InternalStorage.userAuth">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="InternalStorage.userAuth">
            <router-link class="nav-link" to="/findDentist">Find dentist</router-link>
          </li>
          <li class="nav-item" v-if="InternalStorage.userAuth">
            <router-link class="nav-link" to="/addDentist">Add dentist</router-link>
          </li>
          <li class="nav-item" v-if="InternalStorage.userAuth">
            <router-link class="nav-link" to="/" @click="logout()">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import InternalStorage from "@/InternalStorage.js";
export default {
  name: "AppNavbar",
  props: {},

  data() {
    return { InternalStorage };
  },

  methods: {
    logout() {
      console.log("Logout");
      this.InternalStorage.userAuth = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#mainNavbar {
  background-color: #7490ab;
  box-shadow: 2px 10px 25px 1px rgba(0, 0, 0, 0.44);
}
</style>
