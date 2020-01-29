<template>
  <div>
    <div class="author-desc">
      <img src="../assets/author.png" class="auth-img" alt="" />
      <h2 class="bold-text">{{ author.title }}</h2>
      <p class="desc">{{ author.desc }}</p>
    </div>
    <h2 class="bold-text head">{{ author.title }}'s books</h2>
    <BookList :filterBy="author" />
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import BookList from "@/components/BookList.vue";
import authorDetails from "../assets/mock-data/authorDetails.json";

export default {
  name: "authorDescription",
  data() {
    return {
      author: authorDetails[this.$route.params.id] || {}
    };
  },
  components: {
    BookList
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
.desc {
  font-size: 24px;
  text-align: center;
  width: 50%;
  margin: 0 auto;
}
.head {
  text-transform: uppercase;
  text-decoration: underline;
}
</style>
