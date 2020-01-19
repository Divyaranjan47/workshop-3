<template>
  <div>
    <AppHeader />
    <div class="author-desc">
      <img src="../assets/author.png" class="auth-img" alt="" />
      <h2 class="bold-text">{{ author.name }}</h2>
      <p class="desc">{{ author.desc }}</p>
    </div>
    <h2 class="bold-text head">{{ author.name }}'s books</h2>
    <BookList />
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import BookList from "@/components/BookList.vue";

export default {
  name: "authorDescription",
  data() {
    return {
      author: {
        name: "Scott Issac",
        desc:
          "He is a software architect who is best known for the development of Dynamic HTML, which is at the core of what is commonly termed Ajax.",
        totalBooks: 2
      }
    };
  },
  components: {
    AppHeader,
    AppFooter,
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
