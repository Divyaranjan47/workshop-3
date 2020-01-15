<template>
 <div class="container">
  <div v-for="routes in books" v-bind:key="routes.id">
   <div class="bookslist">
    <div class="listItems">
     <router-link :to="{name: 'bookDescription' , params: {id: routes.id }}">
      <img alt="" src="../assets/book1.png" />
     </router-link>
  </div>
<div class="details">
<ul>
<li>{{routes.title}}</li>
<li>{{routes.author}}</li>
<li>{{routes.desc}}</li>
<li>{{routes.rate}}</li></ul>
</div>
</div>
<hr>
</div>
</div>
</template>

<script>
export default {
  name: "BookList",
  data() {
    return {
      books: [
        {
          id: 0,
          image: './assets/book1.png',
          title: "TITLE",
          author:"AUTHOR",
          desc:"DESCRIPTION",
          rate:"RATING"
        },
        {
          id: 1,
          image: './assets/book1.png',
          title: "TITLE",
          author:"AUTHOR",
          desc:"DESCRIPTION",
          rate:"RATING"
        },
        {
          id: 2,
          image: './assets/book1.png',
          title: "TITLE",
          author:"AUTHOR",
          desc:"DESCRIPTION",
          rate:"RATING"
        }
      ]
    };
  }
};
</script>
<style>

.container {
display: flex;
 flex-direction:column;
  padding: 2rem;
 background-color: #e9e9e9
}
.bookslist{
    display:flex;
    margin:auto;
    align-items:center;
    flex-direction:row;
    width:100%;

}
.details ul li{
  padding: 1rem 0;
  font-size: 20px;
}

.listItems{
  display: inline-block;
  width: 30%;
  margin:0 1rem;
}
.details{
    width:70%;
    margin:2rem 0;
}
hr{
   border: .5px solid black;
   width:100%;
}
.container div:last-child hr{
  display:none;
}
</style>