import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Party from "@/components/Party";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/events",
      name: "Parties",
      component: Party
    },
    {
      path: "/events/:id",
      name: "Party",
      component: Party
    }
  ]
});
