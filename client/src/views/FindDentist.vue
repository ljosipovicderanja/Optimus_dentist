<template>
  <div class="about">
    <h1 style="margin-top: 30px">Find Dentist</h1>

    <h2 style="margin-top: 30px">All dentists</h2>

    <div id="items" v-for="item in items" v-bind:key="item._id">
      <DentistCard
        :viewDetail="true"
        :id="item._id"
        :name="item.name"
        :description="item.description"
        :sex="item.sex"
        :location="item.location"
        :years="item.years"
        :externalLink="item.externalLink != null ? item.externalLink : 'https://www.index.hr/'"
        :comments="item.comments"
        :numOfComments="item.comments != null ? item.comments.length : 0"
      />
    </div>
    <hr class="solid" />

    <br />
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
    console.log(this.items);
  },

  methods: {},
};
</script>

<style>
#items {
  display: inline-block;
}

hr.solid {
  border-top: 1px solid #7490ab;
}
</style>
