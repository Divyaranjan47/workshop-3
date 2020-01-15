<template>
  <div>
    <AppHeader />
    <div class="author-desc">
      <img src="../assets/book-cover.png" class="book-img" alt="" />
      <StarRating
        v-model="rating"
        :star-size="25"
        :show-rating="false"
        :read-only="true"
      />
      <h2 class="bold-text">You don't know JS</h2>
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
  name: "bookDescription",
  data() {
    return {
      rating: 4
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
