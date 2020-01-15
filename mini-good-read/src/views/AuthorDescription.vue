<template>
  <div>
    <AppHeader />
    <div class="author-desc">
      <img src="../assets/author.png" class="auth-img" alt="" />
      <StarRating
        v-model="author.rating"
        :star-size="25"
        :show-rating="false"
        :read-only="true"
      />
      <h2 class="bold-text">{{ author.name }}</h2>
      <p>Description</p>
    </div>
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import StarRating from "vue-star-rating";

export default {
  name: "authorDescription",
  data() {
    return {
      author: {
        name: "Kyle simpson",
        rating: 3
      }
    };
  },
  components: {
    AppHeader,
    AppFooter,
    StarRating
  }
};
</script>
<style scoped>
.author-desc {
  text-align: center;
  margin: 20px 0;
}
.bold-text {
  font-size: 24px;
  text-align: center;
  margin: 20px;
}
.vue-star-rating {
  justify-content: space-around;
}
</style>
