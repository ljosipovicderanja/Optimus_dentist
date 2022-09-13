<template>
  <div class="dentist">
    <div class="container">
      <h1 style="margin-top: 30px; margin-bottom: 10px">Find dentist</h1>
      <input class="form-control mr-sm-2" v-model="search" type="search" placeholder="Search by name" aria-label="Search" />
      <button type="button" class="btn btn-secondary" @click.prevent="filteredDentist()" style="margin-top: 10px">Search by name, location, years</button>
      <div class="row" style="margin-top: 20px">
        <div class="col">
          <DentistCard
            v-for="item in searchResult"
            v-bind:key="item._id"
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
            :viewNumOfComments="true"
          />
        </div>
      </div>
    </div>
    <hr class="solid" />
    <h3 style="margin-top: 30px">All dentist</h3>

    <button type="button" class="btn btn-secondary" @click.prevent="sortTopCommented()" style="margin-top: 10px">Sort top comment</button>
    <button type="button" class="btn btn-secondary" @click.prevent="sortLeastCommented()" style="margin-top: 10px">Sort least comment</button>
    <br />

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
        :viewNumOfComments="true"
      />
    </div>

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
      search: "",
      items: [],
      searchResult: [],
    };
  },

  async created() {
    this.items = await db.getAllItemsFromCollectionMDb("dentist");
    console.log(this.items);
  },

  computed: {},

  methods: {
    filteredDentist() {
      if (this.search != "") {
        this.searchResult = this.items.filter((item) => item.name.includes(this.search) || item.location.includes(this.search) || item.years.includes(this.search));
      } else {
        alert("Enter search parameters!");
        return;
      }
      if (this.searchResult.length === 0) {
        alert("Dentist not found!");
      }
    },
    sortTopCommented() {
      this.items.sort(function (a, b) {
        return parseInt(b.comments.length) - parseInt(a.comments.length);
      });
    },
    sortLeastCommented() {
      this.items.sort(function (a, b) {
        return parseInt(a.comments.length) - parseInt(b.comments.length);
      });
    },
  },
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
