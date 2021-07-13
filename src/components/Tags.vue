<template>
  <div class="tags">
    <h5>Etiquetas</h5>
    <router-link
      v-for="(tag, index) in tags"
      :key="index"
      :to="'/eventos/filter?t=' + tag.slug"
    >
      <span class="tags-item">
        {{ tag.name }}
      </span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Tags",
  props: {
    tags: Array,
  },
};
</script>
