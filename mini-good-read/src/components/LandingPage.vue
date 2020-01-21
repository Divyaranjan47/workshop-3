<template>
  <article class="landing-wrapper">
    <h2>{{ welcomeMsg }}</h2>
    <p class="app-description">
      {{ appDesc }}
      <a href="https://vuefest-2020.surge.sh/" target="_blank">Know more..</a>
    </p>
  </article>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      welcomeMsg: "Welcome to Mini Good Read",
      appDesc:
        "A sample app developed to serve the purpose of learning Vue at VueFest 2020, Deloitte."
    };
  }
};
</script>
<style>
.landing-wrapper {
  padding: 5rem;
  text-align: center;
}

.landing-wrapper h2 {
  font-size: 7rem;
}

.landing-wrapper .app-description {
  padding: 3rem 0;
  font-size: 2rem;
  text-align: center;
  color: #44576e;
}
</style>
