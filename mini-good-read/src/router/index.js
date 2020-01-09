import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BookListing from "../views/BookListing.vue";
import AuthorListing from "../views/AuthorListing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/books",
    name: "books",
    component: BookListing
  },
  {
    path: "/authors",
    name: "authors",
    component: AuthorListing
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
