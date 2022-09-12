<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <DentistCard
            :name="InternalStorage.dentistName"
            :description="InternalStorage.dentistDescription"
            :sex="InternalStorage.dentistSex"
            :location="InternalStorage.dentistLocation"
            :years="InternalStorage.dentistYears"
            :rating="InternalStorage.dentistRating"
            :externalLink="InternalStorage.dentistExternalLink"
          />
        </div>
        <div class="col-6">
          <div class="jumbotron" style="background-color: transparent">
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur blanditiis nihil iure error rem? Voluptatem dolor nemo quasi sunt, voluptates exercitationem? Cumque nobis sed voluptas dolor et excepturi aliquam consequatur!
            </p>
            <hr class="my-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam dolorum nostrum. Voluptate commodi magnam non blanditiis quod quisquam laboriosam, sequi eum unde perspiciatis fugiat quaerat neque consequuntur et sit!</p>
            <p class="lead">
              <button class="btn btn-primary btn-lg" @click.prevent="goToExternalLink()">Find dentist!</button>
            </p>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import DentistCard from "@/components/DentistCard.vue";
import InternalStorage from "@/InternalStorage";
export default {
  name: "UserLogin",
  setup() {},
  data() {
    return { InternalStorage };
  },
  methods: {
    goToExternalLink() {
      console.log("Redirecting on: " + this.InternalStorage.dentistExternalLink);
      window.open(this.InternalStorage.dentistExternalLink);
    },
  },
  components: { DentistCard },
};
</script>
