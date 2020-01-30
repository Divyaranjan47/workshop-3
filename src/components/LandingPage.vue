<template>
  <article class="landing-wrapper">
    <h2>{{ welcomeMsg }}</h2>
    <p class="app-description">
      {{ appDesc }}
      <a href="https://vuefest-2020.surge.sh/">Know more..</a>
    </p>
    <!-- <TopSeller />
    <section class="listing-container">
      <p class="browse-by">{{ browseBy }}</p>
      <div class="listing-categories">
        <router-link :to="'books'" class="book-listing">
          <img src="../assets/book-listing.png" alt="Book Listing Icon" />
        </router-link>
        <router-link :to="'authors'" class="author-listing">
          <img src="../assets/author-listing.png" alt="Author Listing Icon" />
        </router-link>
      </div>
    </section> -->
  </article>
</template>

<script>
// import TopSeller from "./TopSeller";

export default {
  name: "LandingPage",
  components: {
    // TopSeller
  },
  data() {
    return {
      welcomeMsg: "Welcome to Mini Good Read",
      appDesc:
        "A sample app developed to serve the purpose of learning Vue at VueFest 2020, Deloitte.",
      browseBy: "You can further explore based on below options:",
      links: [
        {
          id: 0,
          text: "Home",
          page: "/"
        },
        {
          id: 1,
          text: "Books",
          page: "/Books"
        },
        {
          id: 2,
          text: "Authors",
          page: "/Authors"
        }
      ]
    };
  }
};
</script>
<style>
.landing-wrapper {
  padding: 5rem;
  text-align: center;
}

.landing-wrapper h2 {
  font-size: 7rem;
}

.landing-wrapper .app-description {
  padding: 3rem 0;
  font-size: 2rem;
  text-align: center;
  color: #44576e;
}

.landing-wrapper .listing-container {
  padding: 10rem 5rem 0;
}

.landing-wrapper .browse-by {
  font-size: 2rem;
  color: #3c3c3c;
}

.landing-wrapper .listing-categories {
  display: flex;
  width: 100%;
  padding: 5rem;
  justify-content: space-around;
}

.book-listing,
.author-listing {
  max-width: 40%;
  padding: 5rem 0;
  border: 2px solid #2c2c2c;
}

.book-listing:hover,
.author-listing:hover {
  border-color: #fcd633;
}

.book-listing img,
.author-listing img {
  max-width: 70%;
}
</style>
