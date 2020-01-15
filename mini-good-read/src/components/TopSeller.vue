<template>
  <section class="TopSeller">
    <h2 class="text-bold header">Top sellers of 2019</h2>
    <div class="flex-container">
      <BookTile :book="book" v-for="book in books" :key="book.id" />
    </div>
  </section>
</template>
<script>
import BookTile from "./common/BookTile";
import bookJson from "../assets/mock-data/books.json";

export default {
  name: "TopSeller",
  components: {
    BookTile
  },
  data() {
    return {
      name: "Jack",
      books: []
    };
  },
  methods: {},
  mounted() {
    this.books = bookJson;
  }
};
</script>
<style scoped>
.header {
  margin: 20px 0;
  text-align: left;
  font-size: 26px;
  color: #023753;
}
.flex-container {
  display: flex;
  justify-content: space-between;
}
</style>
