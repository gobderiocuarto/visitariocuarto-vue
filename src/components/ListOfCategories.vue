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
          <router-link :to="'/eventos'" v-slot="{ navigate }">
            <a
              class="btn btn-block btn-light mb-3 mb-sm-0"
              @click="navigate"
              @keypress.enter="navigate"
              role="link"
              >{{ category.title }}</a
            ></router-link
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
