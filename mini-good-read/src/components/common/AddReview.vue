<template>
  <form v-on:submit="submitReview" class="review-form">
    <h3 class="section-header">WRITE A REVIEW</h3>
    <div class="item">
      <label class="label-text"> Score:</label>
      <star-rating
        v-model="ratingDetails.rating"
        inline
        :star-size="20"
        :show-rating="false"
      />
    </div>
    <div class="item">
      <label for="title" class="label-text">
        Title:
      </label>
      <input
        type="text"
        name="title"
        v-model="ratingDetails.title"
        class="text-input"
        required="true"
      />
    </div>
    <div class="item">
      <label for="review" class="label-text">
        Review
      </label>
      <textarea
        class="text-input text-area"
        name="review"
        v-model="ratingDetails.desc"
        required="true"
        placeholder="Tell us what you like or dislike about this product"
      ></textarea>
    </div>
    <button type="submit" class="submit-btn">Submit</button>
  </form>
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating
  },
  data() {
    return {
      ratingDetails: {
        rating: 0,
        title: "",
        desc: ""
      }
    };
  },
  methods: {
    submitReview(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$emit("addReview", this.ratingDetails);
      this.ratingDetails = {};
    }
  }
};
</script>
<style>
.review-form {
  font-family: sans-serif;
  margin: 30px 0 10px;
}
.section-header {
  font-size: 16px;
}
.label-text {
  font-size: 18px;
  line-height: 1.5;
  display: block;
  color: #6a6c77;
  font-weight: lighter;
  padding: 10px 0;
}
.text-input {
  padding: 5px;
  width: 35%;
  font-size: 14px;
  font-weight: lighter;
  border: solid 1px #e3e3e3;
  border-radius: 2px;
}
.text-area {
  height: 80px;
}
.submit-btn {
  margin: 10px 0;
  padding: 10px 25px;
  background-color: #ffd800;
  font-size: 16px;
  border: 0;
  border-radius: 2px;
}
</style>
