<template>
  <div>
    <AppHeader />
    <div>
      <BookList />
    </div>
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import BookList from "@/components/BookList.vue";

export default {
  name: "books",
  components: {
    AppHeader,
    AppFooter,
    BookList
  }
};
</script>
