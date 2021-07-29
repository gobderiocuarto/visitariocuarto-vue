<template>
  <div class="list-of-categories">
    <div class="container">
      <h4>{{ title }}</h4>
      <div class="row justify-content-center">
        <div
          class="col-12 col-sm-5 col-lg-3 col-xl-2"
          v-for="(category, index) in categories"
          :key="index"
        >
          <b-link
            class="btn btn-block btn-outline-primary"
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
