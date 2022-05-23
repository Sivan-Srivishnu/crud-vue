<template>
  <v-app>
    <v-card dark class="float-right p-2">
      <router-link to="/"><v-btn class="green--text">CREATE</v-btn></router-link> |
      <router-link to="/viewEmp"><v-btn class="yellow--text">VIEW</v-btn></router-link>
    </v-card>
    <router-view/>
  </v-app>
</template>

<style lang="scss">



  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

</style>
