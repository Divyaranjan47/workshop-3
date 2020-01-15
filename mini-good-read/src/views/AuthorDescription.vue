<template>
  <div>
    <AppHeader />
    <div>
    Author Description
    </div>
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "authorDescription",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
