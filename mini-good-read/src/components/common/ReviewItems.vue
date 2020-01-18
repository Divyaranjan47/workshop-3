<template>
  <ul class="review-items">
    <li class="item" v-for="review in reviews" :key="review.id">
      <p>
        <star-rating
          v-model="review.rating"
          inline
          :star-size="15"
          :show-rating="false"
          :read-only="true"
        />
        {{ review.title }}
      </p>
      <p class="desc">{{ review.desc }}</p>
    </li>
  </ul>
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  props: {
    reviews: Array
  },
  components: {
    StarRating
  }
};
</script>
<style scoped>
.review-items {
  font-size: 16px;
  margin: 5px;
  padding: 0;
  margin: 0;
}
.desc {
  font-weight: lighter;
  font-size: 14px;
}
.item {
  border: 1px solid #ffd800;
  padding: 0 15px;
  margin: 5px 0;
  border-radius: 2px;
}
</style>
