<template>
  <div>
    <AppHeader />
    <div v-for="data in $options.books" v-bind:key="data.title">
    {{data.title}}
    </div>
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import books from "@/data/book.json";

export default {
  name: "bookDescription",
  books:books,
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
