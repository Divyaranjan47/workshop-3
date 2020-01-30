<template>
  <div>
    <div class="book-container">
      <div class="book-desc">
        <img src="../assets/book-cover.png" class="book-img" alt="" />
        <StarRating
          v-model="rating"
          :star-size="25"
          :show-rating="false"
          :read-only="true"
        />
        <h2 class="bold-text">{{ book.title }}</h2>
        <p class="desc">{{ book.desc }}</p>
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
        <AddReview
          v-if="showReview"
          v-on:addReview="addReview"
          v-on:closeReview="toggleReview"
        />
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddReview from "@/components/common/AddReview.vue";
import ReviewItems from "@/components/common/ReviewItems";
import StarRating from "vue-star-rating";
import bookDetails from "../assets/mock-data/bookDetails.json";

export default {
  name: "bookDescription",
  data() {
    return {
      reviewList: [],
      showReview: false,
      id: this.$route.params.id,
      book: {}
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
      return Math.round(currentRating);
    }
  },
  components: {
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
  },
  mounted() {
    this.book = bookDetails[this.id];
    this.reviewList = this.book.ratings;
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
