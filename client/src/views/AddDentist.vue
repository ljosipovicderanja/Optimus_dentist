<template>
  <div class="about">
    <h1>This is an Add dentist page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm">sdfds</div>
        <div class="col-6">
          <form>
            <div class="form-group" style="margin-top: 20px">
              <label for="formGroupExampleInput1">Dentist name</label>
              <input type="text" class="form-control" v-model="dentistName" id="formGroupExampleInput" placeholder="Dentist name" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Years</label>
              <input type="text" class="form-control" v-model="dentistYears" id="formGroupExampleInput2" placeholder="Years" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput3">Description</label>
              <input type="text" class="form-control" v-model="dentistDescription" id="formGroupExampleInput2" placeholder="Description" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput4">Location</label>
              <input type="text" class="form-control" v-model="dentistLocation" id="formGroupExampleInput" placeholder="Location" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput4">External link</label>
              <input type="text" class="form-control" v-model="dentistExternalLink" id="formGroupExampleInput" placeholder="External link" />
            </div>
            <div class="form-group">
              <label for="inputState">Sex</label>
              <select class="form-control" v-model="dentistSex">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </form>
          <button class="btn btn-primary btn-lg" @click.prevent="addDentist()">Login</button>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { db } from "@/services/index.js";

export default {
  name: "AddDentist",
  components: {},

  data() {
    return {
      dentistName: "",
      dentistYears: "",
      dentistDescription: "",
      dentistLocation: "",
      dentistSex: "Male",
      dentistExternalLink: "",
    };
  },

  async created() {},

  methods: {
    async addDentist() {
      console.log("Adding dentist into db");
      let userInput = {
        name: this.dentistName,
        years: this.dentistYears,
        description: this.dentistDescription,
        location: this.dentistLocation,
        sex: this.dentistSex,
        externalLink: this.dentistExternalLink,
      };
      let result = await db.addItemInCollectionMDb("dentist", userInput);
      console.log(result);
      if (result.status === 201) {
        alert("Dentist added");
      } else {
        alert("Something went wrong");
      }
      router.push("/findDentist");
    },
  },
};
</script>
