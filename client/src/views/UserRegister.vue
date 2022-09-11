<template>
  <div class="about">
    <h1>This is an Register page</h1>

    <div class="container">
      <div class="row">
        <div class="col-sm">One of three columns</div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Username</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Password</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput">Repeat password</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
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
  name: "UserRegister",
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
