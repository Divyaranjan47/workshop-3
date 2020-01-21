<template>
  <header class="header-wrapper">
    <div class="logo-wrapper">
      <img alt="Mini Good Read Logo" src="../assets/logo.png" />
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
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
