<template>
  <v-card id="_v-card" width="350px" elevation="2" dark class="mx-auto my-12">
    <v-card-title>Update Employee Details </v-card-title>
    <v-form @submit.prevent="submitForm">
      <v-text-field required label="User Name" hide-details="auto" class="ml-5 mb-10 mr-5" v-model.lazy.trim="formContent.name" />
      <v-text-field required label="Email Address" hide-details="auto" class="ml-5 mb-10 mr-5" v-model="formContent.email" />
      <v-text-field required label="Role" hide-details="auto" class="ml-5 mb-10 mr-5" v-model="formContent.role" />
      <v-text-field required label="Salary" hide-details="auto" class="ml-5 mb-10 mr-5" v-model.number.lazy="formContent.salary" />
      <v-btn depressed class="ml-10 mb-10 green--text" @click="submitForm">
          Submit
      </v-btn>

    </v-form>
    

  </v-card>

</template>

<script>
import Axios from '@/apis/Axios';
import router from '@/router';
export default {
  name: "EditEmpComp",
  data() {
    return {
        formContent:{
            name:"",
            role:"",
            salary:null,
            email:""
        }
            
     };
  },
 async mounted(){
let { data } = await Axios.get(`/employee/${this.$route.params.id}`);
    this.formContent = data
  },
  methods:{
     async submitForm(){
         try {
             await Axios.put(`/employee/${this.$route.params.id}`, this.formContent);
                router.push("/viewEmp")
         } catch (error) {
             console.log(error);
         }

      }
  }
};
</script>

<style lang="css" scoped>
/* #v-card {
  width: 50%;
} */
</style>
