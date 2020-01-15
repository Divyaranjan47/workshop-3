<template>
  <div class="container">
    <div v-for="author in authors" v-bind:key="author.id">
      <div class="bookslist">
        <div class="listItems">
          <router-link
            :to="{ name: 'authorDescription', params: { id: author.id } }"
          >
            <img alt="" src="../assets/book1.png" />
          </router-link>
        </div>
        <div class="details">
          <ul>
            <li>{{ author.name }}</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorList",
  data() {
    return {
      authors: [
        {
          id: 0,
          name: "AUTHOR"
        },
        {
          id: 1,
          name: "AUTHOR"
        },
        {
          id: 2,
          name: "AUTHOR"
        }
      ]
    };
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
  width: 100%;
}
.details ul li {
  padding: 1rem 0;
  font-size: 20px;
}

.listItems {
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
