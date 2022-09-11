<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-8">
          <div class="jumbotron" style="background-color: transparent">
            <h1 class="display-4">Welcome to DentistFinder</h1>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur blanditiis nihil iure error rem? Voluptatem dolor nemo quasi sunt, voluptates exercitationem? Cumque nobis sed voluptas dolor et excepturi aliquam consequatur!
            </p>
            <hr class="my-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam dolorum nostrum. Voluptate commodi magnam non blanditiis quod quisquam laboriosam, sequi eum unde perspiciatis fugiat quaerat neque consequuntur et sit!</p>
            <p class="lead">
              <button class="btn btn-primary btn-lg" @click.prevent="navigateFindDentist()">Find dentist!</button>
            </p>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>

    <div id="items" v-for="item in items" v-bind:key="item._id">
      <p>{{ item._id }}</p>
    </div>
  </div>
</template>

<script>
import { db } from "@/services/index.js";
import router from "@/router";

export default {
  name: "HomeView",
  components: {},

  data() {
    return {
      items: [],
    };
  },

  async created() {
    this.items = await db.getAllItemsFromCollectionMDb("dentist");
  },

  methods: {
    navigateFindDentist() {
      router.push("/findDentist");
    },
    async testBaza() {
      //should use await
      return await db.getAllItemsFromCollectionMDb("dentist");
    },
  },
};
</script>
