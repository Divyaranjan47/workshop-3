<template>
  <div>
    <AppHeader />
    <LandingPage />
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import LandingPage from "@/components/LandingPage.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "home",
  components: {
    AppHeader,
    LandingPage,
    AppFooter
  }
};
</script>
