<template>
  <div class="container" style="margin-top: 30px">
    <h1>Login</h1>
    <div class="row" style="margin-top: 30px">
      <div class="col"></div>
      <div class="col-8">
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Username</label>
            <input type="text" class="form-control" v-model="username" id="formGroupExampleInput" placeholder="Username" />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Password</label>
            <input type="password" class="form-control" v-model="password" id="formGroupExampleInput2" placeholder="Password" />
          </div>
        </form>
        <button class="btn btn-primary btn-lg" @click.prevent="login()">Login</button>
        <br />
        <p>or register if you dont have account already</p>
        <button class="btn btn-primary btn-lg" @click.prevent="navigateToRegister()">Register</button>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import InternalStorage from "@/InternalStorage";
import router from "@/router";
import { db } from "@/services/index.js";
export default {
  name: "UserLogin",
  setup() {},
  data() {
    let username, password;
    return { username, password, InternalStorage };
  },
  methods: {
    async login() {
      let userData = {
        username: this.username,
        password: this.password,
      };
      let result = await db.loginUser("auth", userData);
      if (result.status != 200 || !result.data) {
        alert("Loign failed!");
        return;
      } else {
        this.InternalStorage.userAuth = true;
        this.InternalStorage.currentUser = result.data;
        router.push("/");
      }
    },
    navigateToRegister() {
      router.push("/register");
    },
  },
};
</script>

<style>
.btn {
  margin: 20px;
}
</style>
