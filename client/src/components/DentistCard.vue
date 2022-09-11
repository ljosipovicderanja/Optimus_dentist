<template>
  <div id="dentistCard">
    <div class="card" style="width: 18rem; background-color: transparent">
      <img src="@/assets/male_avatar.png" class="rounded-circle centered" style="width: 150px" alt="Avatar" />
      <!--<img class="card-img-top" alt="Card image cap" />-->
      <div class="card-body">
        <h5 class="card-title">name: {{ name }}</h5>
        <p class="card-text">description: {{ description }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-body" v-if="viewDetail">
        <button class="btn btn-primary btn-lg" @click.prevent="viewDetails()">View details</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "DentistCard",
  props: { name: String, description: String, viewDetail: Boolean },
  data() {
    return {};
  },
  setup() {},
  methods: {
    viewDetails() {
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
