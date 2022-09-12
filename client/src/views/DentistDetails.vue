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
            :externalLink="InternalStorage.dentistExternalLink"
            :numOfComments="InternalStorage.denitstCommentsNumber"
          />
          <button class="btn btn-primary btn-lg" @click.prevent="goToExternalLink()">Make appointment</button>
        </div>
        <div class="col">
          <div class="form-group" style="margin-top: 10px">
            <label for="exampleFormControlTextarea1">Enter comment</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="comment"></textarea>
            <button class="btn btn-primary btn-lg" @click.prevent="rateComment()" style="margin-top: 10px">Rate</button>

            <hr class="solid" />

            <div id="items" v-for="item in InternalStorage.dentistComments" v-bind:key="item._id">
              <CommentSection :comment="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DentistCard from "@/components/DentistCard.vue";
import InternalStorage from "@/InternalStorage";
import CommentSection from "@/components/CommentSection.vue";
import { db } from "@/services/index.js";
import router from "@/router";
export default {
  name: "UserLogin",
  setup() {},
  data() {
    console.log(InternalStorage.dentistComments);
    return { InternalStorage, comment: "", rate: 5.0, comments: [] };
  },
  created() {
    this.comments = this.InternalStorage.dentistComments;
  },
  methods: {
    goToExternalLink() {
      console.log("Redirecting on: " + this.InternalStorage.dentistExternalLink);
      window.open(this.InternalStorage.dentistExternalLink);
    },
    async rateComment() {
      let serverData = {
        _id: InternalStorage.dentistId,
        comment: this.comment,
      };
      await db.rateCommentDentist("/rateComment", serverData);
      InternalStorage.dentistComments.push(this.comment);
      router.push("/dentistDetails");
    },
  },
  components: { DentistCard, CommentSection },
};
</script>

<style scoped>
#items {
  display: block;
}

hr.solid {
  border-top: 1px solid #d5dde4;
}
</style>
