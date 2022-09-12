<template>
  <div id="dentistCard">
    <div class="card" style="width: 18rem; background-color: transparent">
      <img src="@/assets/male_avatar.png" class="rounded-circle centered" style="width: 150px" alt="Avatar" />
      <!--<img class="card-img-top" alt="Card image cap" />-->
      <div class="card-body">
        <h5 class="card-title">Name: {{ name }}</h5>
        <p class="card-text">Years: {{ years }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Description: {{ description }}</li>
        <li class="list-group-item">Location: {{ location }}</li>
        <li class="list-group-item">Rate: {{ rating }}</li>
      </ul>
      <div class="card-body" v-if="viewDetail">
        <button class="btn btn-primary btn-lg" @click.prevent="viewDetails()">View details</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import InternalStorage from "@/InternalStorage";

export default {
  name: "DentistCard",
  props: {
    id: String,
    name: String,
    description: String,
    years: String,
    location: String,
    externalLink: String,
    sex: String,
    rating: Number,
    viewDetail: Boolean,
  },
  data() {
    return {};
  },
  setup() {},
  methods: {
    viewDetails() {
      InternalStorage.dentistName = this.name;
      InternalStorage.dentistYears = this.years;
      InternalStorage.dentistDescription = this.description;
      InternalStorage.dentistLocation = this.location;
      InternalStorage.dentistExternalLink = this.externalLink;
      InternalStorage.dentistSex = this.sex;
      InternalStorage.dentistRating = this.rating;
      router.push("/dentistDetails");
    },
  },
};
</script>
<style scoped>
.centered {
  background-position: center;
  margin: auto;
}
#dentistCard {
  position: relative;
  display: inline-block;
  margin: 20px;
}

.list-group-item {
  background-color: transparent;
}
</style>
