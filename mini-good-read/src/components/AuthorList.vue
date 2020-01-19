<template>
  <div class="container">
    <div class="bookslist">
      <div class="listItem" v-for="author in authors" v-bind:key="author.id">
        <BookTile :book="author" />
      </div>
    </div>
  </div>
</template>

<script>
import BookTile from "./common/BookTile";
// import axios from "axios";
import authorJson from "../assets/mock-data/authors.json";

export default {
  name: "BookList",
  components: {
    BookTile
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      authors: []
    };
  },
  mounted() {
    this.authors = authorJson;
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
