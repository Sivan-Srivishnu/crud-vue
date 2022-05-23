<template>
    <v-card>
    <v-toolbar
      color="cyan"
      dark
      flat
    >
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab @click="activeTab = 'CreateEmpVue'">CREATE </v-tab>
            <v-tab @click="activeTab = 'TableCompVue'">VIew </v-tab>

            
          
        </v-tabs>
        <keep-alive>
                <component :is="activeTab"/>
            </keep-alive>
      </template>
    </v-toolbar>

    
    
  </v-card>
</template>

<script>
    import TableCompVue from "./TableComp.vue"
    import CreateEmpVue from './CreateEmp.vue'
    export default {
        name:"CommanTab",
        data(){
            return {
        tab: null,
        
        activeTab:"CreateEmpVue"
        
      }
      
    },

    components:{
        TableCompVue,
        CreateEmpVue

    }
        }
    
</script>

<style scoped>

</style>