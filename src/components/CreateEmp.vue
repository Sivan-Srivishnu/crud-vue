<template>
  <v-card id="_v-card" width="350px" elevation="2" dark class="mx-auto my-12">
    <v-card-title class="green" rounded>
      Enter The Employee Details
    </v-card-title>
    <v-form @submit="submitForm" lazy-validation>
      <v-text-field
        required
        label="User Name"
        hide-details="auto"
        class="ml-5 mb-10 mr-5"
        
        v-model.lazy.trim="formContent.name"
      />
      <v-text-field
        required
        
        label="Email Address"
        hide-details="auto"
        class="ml-5 mb-10 mr-5"
        v-model="formContent.email"
      />
      <v-text-field
        required
        label="Role"
        hide-details="auto"
        class="ml-5 mb-10 mr-5"
        v-model="formContent.role"
      />
      <v-text-field
        required
        label="Salary"
        hide-details="auto"
        class="ml-5 mb-10 mr-5"
        v-model.number.lazy="formContent.salary"
      />
      <v-btn depressed class="ml-10 mb-10 green--text" @click="submitForm">
        Submit
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import Axios from "@/apis/Axios";
import router from "@/router";
export default {
  name: "CreateEmp",
  data() {
    return {
      formContent: {
        name: "",
        role: "",
        salary: null,
        email: "",
      },
    };
  },
  methods: {
      
    async submitForm() {
      try {
        
        await Axios.post("/employee", this.formContent);
        router.push("/viewEmp");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="css" scoped>
/* #v-card {
  width: 50%;
} */
</style>
