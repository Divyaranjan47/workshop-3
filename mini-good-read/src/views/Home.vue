<template>
  <div>
    <AppHeader />
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "home",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
