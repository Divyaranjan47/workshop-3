<template>
  <article class="BookTile" @click="openBook">
    <img src="../../assets/book-cover.png" alt="" />
    <h3 class="text-bold title">{{ book.title }}</h3>
    <p class="desc text-medium">
      By
      <a :href="'/authorDescription/' + book.author.id">{{
        book.author.name
      }}</a>
    </p>
    <p class="text-medium">
      Rated
      <star-rating
        v-model="rating"
        inline
        :star-size="15"
        :show-rating="false"
        :read-only="true"
      />
      by {{ book.ratings.length }} users
    </p>
    <p class="book-desc text-medium">{{ book.desc }}</p>
  </article>
</template>
<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating
  },
  props: {
    book: Object
  },
  computed: {
    rating() {
      let currentRating = 0;
      if (this.book.ratings.length > 0) {
        const total = this.book.ratings.reduce((acc, cur) => {
          return acc + cur.rating;
        }, 0);
        currentRating = total / this.book.ratings.length;
      }
      return currentRating;
    }
  },
  methods: {
    openBook() {
      this.$router.push({
        path: `/bookDescription/${this.book.id}`
      });
    }
  }
};
</script>
<style scoped>
.BookTile {
  border: 1px solid grey;
  border-radius: 6px;
  padding: 10px;
  text-align: center;
  background: #ffffff;
  max-width: 350px;
  box-shadow: 0 8px 11px 9px rgba(0, 0, 0, 0.04);
  cursor: pointer;
}
.BookTile:hover {
  border: 1px solid #ffd800;
  box-shadow: none;
}

.title {
  margin: 20px 0;
}
.text-bold {
  font-size: 24px;
  text-decoration: none;
  color: #022e46;
}
.text-medium {
  font-size: 16px;
  color: #000000;
  margin: 10px;
}
.book-desc {
  color: #44576e;
}
</style>
