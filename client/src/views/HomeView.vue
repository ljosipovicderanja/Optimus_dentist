<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="testBaza()">test button</button>
    <div id="items" v-for="item in items" v-bind:key="item._id">
      <p>{{ item._id }}</p>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { db } from "@/services/index.js";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },

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
