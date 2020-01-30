<template>
  <nav class="menu-wrapper">
    <ul>
      <li v-for="routes in links" v-bind:key="routes.id">
        <router-link :to="`${routes.page}`">{{ routes.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Home",
          page: "/"
        },
        {
          id: 1,
          text: "Books",
          page: "/books"
        },
        {
          id: 2,
          text: "Authors",
          page: "/authors"
        }
      ]
    };
  }
};
</script>
<style>
.menu-wrapper {
  display: inline-block;
  width: 70%;
}

.menu-wrapper ul {
  display: flex;
  justify-content: flex-end;
}

.menu-wrapper ul li {
  padding: 0 0 0 3rem;
  font-size: 2rem;
}

.menu-wrapper ul li a {
  color: #000;
  text-decoration: none;
}

.menu-wrapper ul li a:hover {
  border-bottom: 3px solid #000;
}

.router-link-exact-active {
  border-bottom: 3px solid #000;
}
</style>
