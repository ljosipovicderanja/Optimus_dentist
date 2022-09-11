<template>
  <div class="about">
    <h1>This is an Login page</h1>

    <div class="container">
      <div class="row">
        <div class="col-sm">One of three columns</div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Username</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Username" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Password</label>
              <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password" />
            </div>
          </form>
        </div>
        <div class="col-sm">One of three columns</div>
      </div>
    </div>

    <button @click="testBaza()">test button</button>
    <div id="items" v-for="item in items" v-bind:key="item._id">
      <p>{{ item._id }}</p>
    </div>
  </div>
</template>

<script>
import { db } from "@/services/index.js";

export default {
  name: "UserLogin",
  components: {},

  data() {
    return {
      items: [],
    };
  },

  async created() {
    this.items = await db.getAllItemsFromCollectionMDb("test");
  },

  methods: {
    async testBaza() {
      //should use await
      return await db.getAllItemsFromCollectionMDb("test");
    },
  },
};
</script>
