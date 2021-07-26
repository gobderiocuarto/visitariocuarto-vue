<template>
  <div class="tags">
    <h5>Etiquetas</h5>
    <b-link
      class="tags-item tags-link"
      :to="url + 'filter?t=' + tag.slug"
      v-for="(tag, index) in tags"
      :key="index"
    >
      {{ tag.name }}
    </b-link>
  </div>
</template>
<script>
export default {
  name: "Tags",
  props: {
    tags: Array,
    url: String,
  },
};
</script>
