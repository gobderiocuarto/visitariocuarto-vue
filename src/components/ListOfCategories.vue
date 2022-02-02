<template>
  <div class="list-of-categories">
    <div class="container">
      <h4>{{ title }}</h4>
      <div class="row justify-content-center">
        <div
          class="col-12 col-sm-6 col-lg-3"
          v-for="(category, index) in categories"
          :key="index"
        >
          <b-link class="btn btn-block btn-outline-dark" :to="category.link">
            {{ category.title }}
            <i
              class="fas fa-fw fa-lg fa-home"
              :class="category.icon && category.icon"
            ></i>
          </b-link>
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
