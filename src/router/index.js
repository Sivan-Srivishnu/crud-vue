import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateEmp from "../components/CreateEmp.vue"
import TableComp from "../components/TableComp.vue"
import EditEmpComp from "../components/EditEmpComp.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "CreateEmp",
    component: CreateEmp,
  },
  {
    path: "/viewEmp",
    name: "TableComp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TableComp,
  },
  {
    path: "/editEmp/:id",
    name: "EditEmp",
    component: EditEmpComp,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
