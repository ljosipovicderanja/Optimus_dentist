<template>
  <div class="about">
    <h1>This is an Add dentist page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm">One of three columns</div>
        <div class="col-6">
          <form>
            <div class="form-group" style="margin-top: 20px">
              <label for="formGroupExampleInput">Dentist name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Dentist name" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Years</label>
              <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Years" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Description</label>
              <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Description" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput">Location</label>
              <input type="password" class="form-control" id="formGroupExampleInput" placeholder="Location" />
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
  name: "AddDentist",
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
    async testBaza() {
      //should use await
      return await db.getAllItemsFromCollectionMDb("dentist");
    },
  },
};
</script>
