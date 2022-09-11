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
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <button class="nav-link" data-toggle="modal" data-target="#loginModal" style="background-color: inherit; border: 0px">Login</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" data-toggle="modal" data-target="#registerModal" style="background-color: inherit; border: 0px">Register</button>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/findDentist">Find dentist</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/addDentist">Add dentist</router-link>
          </li>
          <li class="nav-item">
            <router-link @click="logout()" class="nav-link" to="/addDentist">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- LOGIN FORM -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Login form</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group" style="margin-top: 20px">
                <label for="formGroupExampleInput">Username</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Username" />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2">Password</label>
                <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>

    <!-- REGISTER FORM -->
    <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Register form</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group" style="margin-top: 20px">
                <label for="formGroupExampleInput">Username</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Username" />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2">Password</label>
                <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password" />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput">Repeat password</label>
                <input type="password" class="form-control" id="formGroupExampleInput" placeholder="Repeat password" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  props: {},

  methods: {
    logout() {
      console.log("logoutam");
    },
  },
};
</script>

<style lang="scss" scoped>
#mainNavbar {
  background-color: #7490ab;
}
</style>
