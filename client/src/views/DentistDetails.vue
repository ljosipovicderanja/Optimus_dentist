<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <DentistCard />
        </div>
        <div class="col-6">
          <div class="jumbotron" style="background-color: transparent">
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur blanditiis nihil iure error rem? Voluptatem dolor nemo quasi sunt, voluptates exercitationem? Cumque nobis sed voluptas dolor et excepturi aliquam consequatur!
            </p>
            <hr class="my-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam dolorum nostrum. Voluptate commodi magnam non blanditiis quod quisquam laboriosam, sequi eum unde perspiciatis fugiat quaerat neque consequuntur et sit!</p>
            <p class="lead">
              <button class="btn btn-primary btn-lg" @click.prevent="">Find dentist!</button>
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
export default {
  name: "UserLogin",
  setup() {},
  data() {
    return {};
  },
  methods: {
    login() {},
  },
  components: { DentistCard },
};
</script>
