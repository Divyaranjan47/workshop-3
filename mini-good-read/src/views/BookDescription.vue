<template>
  <div>
    <AppHeader />
    <div>
    Book Description
    </div>
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "bookDescription",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
