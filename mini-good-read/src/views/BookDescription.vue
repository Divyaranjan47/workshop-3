<template>
  <div>
    <AppHeader />
    <div class="book-container">
      <div class="book-desc">
        <img src="../assets/book-cover.png" class="book-img" alt="" />
        <StarRating
          v-model="rating"
          :star-size="25"
          :show-rating="false"
          :read-only="true"
        />
        <h2 class="bold-text">You don't know JS</h2>
        <p class="desc">
          Description is Symphony 4 Piece Right Arm Facing Sectional mnsbvFHJGV
          VHGSFDHG GHFAGHSbkjdsb hsghjvdsjhfhgv
        </p>
      </div>
      <section class="review">
        <h2 class="title-text bold-text">Reviews Section</h2>
        <ReviewItems :reviews="reviewList" />
        <button
          class="submit-btn"
          type="button"
          v-if="!showReview"
          @click="toggleReview"
        >
          Write A Review
        </button>
        <AddReview v-if="showReview" v-on:addReview="addReview" />
      </section>
    </div>
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AddReview from "@/components/common/AddReview.vue";
import ReviewItems from "@/components/common/ReviewItems";
import StarRating from "vue-star-rating";

export default {
  name: "bookDescription",
  data() {
    return {
      reviewList: [],
      showReview: false
    };
  },
  computed: {
    rating() {
      let currentRating = 0;
      if (this.reviewList.length > 0) {
        const total = this.reviewList.reduce((acc, cur) => {
          return acc + cur.rating;
        }, 0);
        currentRating = total / this.reviewList.length;
      }
      return currentRating;
    }
  },
  components: {
    AppHeader,
    AppFooter,
    StarRating,
    AddReview,
    ReviewItems
  },
  methods: {
    toggleReview() {
      this.showReview = !this.showReview;
    },
    addReview(data) {
      this.reviewList.push(data);
      this.toggleReview();
    }
  }
};
</script>
<style scoped>
.book-container {
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
}
.book-desc {
  text-align: center;
  margin: 20px 0;
  padding: 0 30px;
  width: 30%;
}
.bold-text {
  font-size: 24px;
  text-align: center;
  margin: 20px;
}
.title-text.bold-text {
  text-align: left;
  margin: 20px 0;
}
.vue-star-rating {
  justify-content: space-around;
}
.review {
  width: 55%;
}
.desc {
  font-weight: lighter;
  font-weight: lighter;
}
</style>
