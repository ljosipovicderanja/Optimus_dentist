<template>
  <div class="container" style="margin-top: 30px">
    <h1>Login</h1>
    <div class="row" style="margin-top: 30px">
      <div class="col"></div>
      <div class="col-8">
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Example label</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Another label</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
          </div>
        </form>
        <button class="btn btn-primary btn-lg" @click.prevent="login()">Login</button>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import InternalStorage from "@/InternalStorage";
import router from "@/router";
export default {
  name: "UserLogin",
  setup() {},
  data() {
    return { InternalStorage };
  },
  methods: {
    login() {
      this.InternalStorage.userAuth = true;
      router.push("/findDentist");
    },
  },
};
</script>
