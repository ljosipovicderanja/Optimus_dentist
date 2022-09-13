<template>
  <div class="container" style="margin-top: 30px">
    <h1>Register</h1>
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
          <div class="form-group">
            <label for="formGroupExampleInput2">Repeat password</label>
            <input type="password" class="form-control" v-model="repeatedPassword" id="formGroupExampleInput2" placeholder="Repeated password" />
          </div>
        </form>
        <button class="btn btn-primary btn-lg" @click.prevent="register()">Register</button>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { db } from "@/services/index.js";
export default {
  name: "UserRegister",
  setup() {},
  data() {
    let username, password, repeatedPassword;
    return { username, password, repeatedPassword };
  },
  methods: {
    async register() {
      let result;
      if (this.password != this.repeatedPassword) {
        alert("Password not match!");
        return;
      } else {
        let userData = {
          username: this.username,
          password: this.password,
        };
        result = await db.registerUser("users", userData);
        if (result && result.status === 201) {
          router.push("/login");
        } else {
          return;
        }
      }
    },
  },
};
</script>
