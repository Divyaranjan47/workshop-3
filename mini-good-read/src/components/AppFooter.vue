<template>
  <footer class="footer-wrapper">
    <p class="copyright">{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      copyright: "Copyright to VueFest 2020 @ Deloitte"
    };
  }
};
</script>

<style scoped>
.footer-wrapper {
  display: flex;
  justify-content: center;
  padding: 3rem 5rem;
  background-color: #ffd800;
}

.copyright {
  font-size: 1.5rem;
  color: #2c2c2c;
}
</style>
