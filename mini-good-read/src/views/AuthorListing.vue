<template>
  <div>
    <AppHeader />
    <div>
    <AuthorList />
    </div>
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AuthorList from "@/components/AuthorList.vue";

export default {
  name: "authors",
  components: {
    AppHeader,
    AppFooter,
    AuthorList
  }
};
</script>
