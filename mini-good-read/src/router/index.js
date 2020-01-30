import Vue from "vue";
import VueRouter from "vue-router";
import BookList from "@/components/BookList.vue";
import BookDescription from "../views/BookDescription.vue";
import AuthorDescription from "../views/AuthorDescription.vue";
import AuthorList from "@/components/AuthorList.vue";
import LandingPage from "@/components/LandingPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage
  },
  {
    path: "/books",
    name: "books",
    component: BookList
  },
  {
    path: "/authors",
    name: "authors",
    component: AuthorList
  },
  {
    path: "/bookDescription/:id",
    name: "bookDescription",
    component: BookDescription
  },

  {
    path: "/authorDescription/:id",
    name: "authorDescription",
    component: AuthorDescription
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
