<template>
  <div class="form-wrap">
    <button
      type="submit"
      class="submit-btn"
      @click="isFormOpen = true"
      v-if="!isFormOpen"
    >
      ADD BOOK
    </button>
    <form data-v-26e0a6ee="" v-else>
      <h3 class="section-header">ADD BOOK</h3>
      <div class="item">
        <label for="title" class="label-text"> Book Title: </label>
        <input
          type="text"
          name="title"
          required="required"
          class="input-field"
          placeholder="Title"
        />
      </div>
      <div class="item">
        <label for="review" class="label-text"> Description </label>
        <textarea
          name="review"
          required="required"
          placeholder="Short description of book"
          class="input-field text-area"
        ></textarea>
      </div>
      <button type="submit" class="submit-btn">Submit</button>
      <button
        type="button"
        class="submit-btn close"
        @click="isFormOpen = false"
      >
        Close
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      isFormOpen: false
    };
  }
};
</script>
<style>
.form-wrap {
  position: absolute;
  right: 85px;
  top: 0;
  text-align: initial;
  width: 220px;
}
.input-field {
  padding: 5px;
  width: 90%;
  font-size: 14px;
  border: solid 1px #e3e3e3;
  border-radius: 2px;
}
</style>
