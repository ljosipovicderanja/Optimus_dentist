<template>
  <div class="container" style="margin-top: 30px">
    <h1>Register</h1>
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
          <div class="form-group">
            <label for="formGroupExampleInput2">Another label</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
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
export default {
  name: "UserRegister",
  setup() {},
  data() {
    return {};
  },
  methods: {
    register() {
      router.push("/login");
    },
  },
};
</script>
