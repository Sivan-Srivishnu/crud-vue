<template>
  <v-app>
    <v-simple-table>
      <thead>
        <tr>
          <th><i class="fa-solid fa-id-card"></i> EMP ID</th>
          <th><i class="fa-solid fa-user"></i> NAME</th>
          <th><i class="fa-solid fa-envelope"></i> EMAIL ID</th>
          <th><i class="fa-solid fa-dice-d6"></i> ROLE</th>
          <th><i class="fa-solid fa-money-bill-1"></i> SALARY</th>
          <th><i class="fa-solid fa-pen"></i> EDIT POST</th>
          <th><i class="fa-solid fa-trash-can"></i> DELETE POST</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="list in rowsData" :id="list.id" :key="list.id">
          <td>{{ list.id }}</td>
          <td>{{ list.name }}</td>
          <td>{{ list.email }}</td>
          <td>{{ list.role }}</td>
          <td>{{ list.salary }}</td>
          <td>
            <v-btn color="primary" @click="editPost(list.id)">EDIT</v-btn>
          </td>
          <td>
            <v-btn dark @click="deletePost(list.id)" class="red">DELETE</v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-simple-table>

    <v-card elevation="0" class="my-5 d-flex mx-auto">
      <v-btn
        v-if="empList.length !== 0"
        dark
        class="mr-10 mt-5 mb-5 ml-5"
        @click="sortA"
        ><i class="fa-solid fa-arrow-up-1-9"></i
      ></v-btn>
      <!-- <v-pagination
      dark
      v-model="page"
      :length="6"
    ></v-pagination> -->
      <v-btn
        v-if="empList.length !== 0"
        dark
        class="mr-10 mt-5 mb-5 ml-5"
        @click="sortD"
        ><i class="fa-solid fa-arrow-down-9-1"></i
      ></v-btn>
    </v-card>
    <div>
      <v-select label="Rows" :items="items" v-model="select" @change="fun">
      </v-select>
    </div>
    <div>
      <v-btn v-for="i in numbers" :key="i" @click="fun2(i)">
        {{ i }}
      </v-btn>
    </div>
  </v-app>
</template>

<script>
import Axios from "@/apis/Axios";
import router from "@/router";
export default {
  name: "TableComp",
  data() {
    return {
      name: "",
      role: "",
      id: "",
      empList: [],
      loading: false,
      page: 1,
      perPage: 9,
      pages: [],
      items: [5, 10, 15],
      select: 5,
      rowsData: [],
      numbers: 0,
    };
  },
  async created() {
    console.log(this.empList.length);
    this.fetchUsers();
  },

  methods: {
    sorting() {},
    editPost(e) {
      router.push(`/editEmp/${e}`);
    },
    async deletePost(e) {
      await Axios.delete(`/employee/${e}`);
      this.fetchUsers();
    },
    async fetchUsers() {
      try {
        this.empList = await (await Axios.get("/employee")).data;
        this.fun();
      } catch (error) {
        console.log(error);
      }
    },
    async sortA() {
      this.empList = await (await Axios.get("/employee")).data;
      this.empList.sort((a, b) => {
        return a.salary - b.salary;
      });
    },
    async sortD() {
      this.empList = await (await Axios.get("/employee")).data;
      this.empList.sort((a, b) => {
        return b.salary - a.salary;
      });
    },

    paginate(empList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return empList.slice(from, to);
    },
    fun() {
      this.rowsData = this.empList.slice(0, this.select);
      this.numbers = Math.trunc(this.empList.length / this.select) + 1;
    },
    fun2(n) {
      let a = this.select * n;
      this.rowsData = this.empList.slice(a - this.select, a);
    },
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    },
  },
};
</script>

<style lang="scss" scoped></style>
