<template>
  <div class="about">
    <h1 style="margin-top: 30px">Find Dentist</h1>

    <h2 style="margin-top: 30px">Top rated dentists</h2>

    <div id="items" v-for="item in items" v-bind:key="item._id">
      <DentistCard viewDetail="true" />
    </div>

    <hr class="solid" />

    <div id="items" v-for="item in items" v-bind:key="item._id">
      <DentistCard />
    </div>

    <br />
    <button @click="testBaza()">test button</button>
  </div>
</template>

<script>
import { db } from "@/services/index.js";
import DentistCard from "@/components/DentistCard.vue";

export default {
  name: "FindDentist",
  components: { DentistCard },

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

<style>
#items {
  display: inline-block;
}

hr.solid {
  border-top: 3px solid #7490ab;
}
</style>
