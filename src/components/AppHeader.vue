<template>
  <header class="header-wrapper">
    <div class="logo-wrapper">
      <img alt="Mini Good Read Logo" src="../assets/logo.png" />
    </div>
    <Navigation />
  </header>
</template>

<script>
import Navigation from "../components/Navigation";

export default {
  name: "AppHeader",
  components: {
    Navigation: Navigation
  }
};
</script>
<style scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  padding: 3rem 5rem;
  background-color: #ffd800;
}

.logo-wrapper {
  display: inline-block;
  width: 30%;
}
</style>
