<template>
  <div class="list-of-categories">
    <div class="container">
      <h3>{{ title }}</h3>
      <div class="row justify-content-center">
        <div
          class="col-md-2"
          v-for="(category, index) in categories"
          :key="index"
        >
          <b-link
            class="btn btn-block btn-light mb-3 mb-sm-0"
            :to="category.link"
            >{{ category.title }}</b-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListOfCategories",
  props: {
    title: String,
    categories: Array,
  },
};
</script>
