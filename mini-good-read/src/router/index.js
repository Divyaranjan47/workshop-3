import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BookListing from "../views/BookListing.vue";
import AuthorListing from "../views/AuthorListing.vue";
import BookDescription from "../views/BookDescription.vue";
import AuthorDescription from "../views/AuthorDescription.vue";

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
