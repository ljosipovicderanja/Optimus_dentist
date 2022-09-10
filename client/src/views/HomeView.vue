<template>
  <div class="home">
    <DentistCard />
    <br />
    <button @click="testBaza()">test button</button>

    <div id="items" v-for="item in items" v-bind:key="item._id">
      <p>{{ item._id }}</p>
    </div>
  </div>
</template>

<script>
import DentistCard from "@/components/DentistCard.vue";
import { db } from "@/services/index.js";

export default {
  name: "HomeView",
  components: {
    DentistCard,
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
