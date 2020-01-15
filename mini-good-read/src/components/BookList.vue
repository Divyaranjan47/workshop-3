<template>
  <div class="container">
    <div class="bookslist">
      <div class="listItem" v-for="book in books" v-bind:key="book.id">
        <BookTile :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import BookTile from "./common/BookTile";
// import axios from "axios";
import bookJson from "../assets/mock-data/books.json";

export default {
  name: "BookList",
  components: {
    BookTile
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      books: [
        {
          id: 0,
          image: "./assets/book1.png",
          title: "TITLE",
          author: "AUTHOR",
          desc: "DESCRIPTION",
          rate: "RATING"
        },
        {
          id: 1,
          image: "./assets/book1.png",
          title: "TITLE",
          author: "AUTHOR",
          desc: "DESCRIPTION",
          rate: "RATING"
        },
        {
          id: 2,
          image: "./assets/book1.png",
          title: "TITLE",
          author: "AUTHOR",
          desc: "DESCRIPTION",
          rate: "RATING"
        }
      ]
    };
  },
  mounted() {
    this.books = bookJson;
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
  justify-content: space-between;
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
