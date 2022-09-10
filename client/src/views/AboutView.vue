<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="testBaza()">test button</button>
    <div id="items" v-for="item in items" v-bind:key="item._id">
      <p>{{ item._id }}</p>
    </div>
  </div>
</template>

<script>
import { db } from "@/services/index.js";

export default {
  name: "AboutView",
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
