import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import Party from "@/components/Party";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/party",
      name: "Party",
      component: Party
    }
  ]
});
