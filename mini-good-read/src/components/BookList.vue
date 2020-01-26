<template>
  <div class="container">
    <div class="bookslist">
      <div class="listItem" v-for="book in books" v-bind:key="book.id">
        <BookTile :book="book" :isBook="true" />
      </div>
    </div>
  </div>
</template>

<script>
import BookTile from "./common/BookTile";
import bookJson from "../assets/mock-data/books.json";

export default {
  name: "BookList",
  props: {
    filterBy: Object
  },
  components: {
    BookTile
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      books: []
    };
  },
  mounted() {
    this.books = bookJson;
    if (this.filterBy) {
      this.books = bookJson.filter(e => this.filterBy.id === e.author.id);
    }
  }
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.bookslist {
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
}
.details ul li {
  padding: 1rem 0;
  font-size: 20px;
}

.listItem {
  display: inline-block;
  width: 30%;
  margin: 0 1rem;
}
.details {
  width: 70%;
  margin: 2rem 0;
}
hr {
  border: 0.5px solid black;
  width: 100%;
}
.container div:last-child hr {
  display: none;
}
</style>
