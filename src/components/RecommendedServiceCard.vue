<template>
  <b-link
    class="card mb-2"
    :to="{
      name: 'Service',
      params: { id: service.id, slug: service.slug, title: service.name },
    }"
  >
    <div class="card-body">
      <h4 class="card-title">{{ service.name }}</h4>
      <div class="card-category">
        <font-awesome-icon icon="folder" class="card-icon" />
        <span>{{ service.category.name }}</span>
      </div>
      <div
        class="card-address"
        v-for="(place, index) in service.places"
        :key="index"
      >
        {{ place.address }}
      </div>
      <div class="card-phone">{{ service.phone }}</div>
    </div>
  </b-link>
</template>
<script>
export default {
  name: "RecommendedServiceCard",
  props: {
    service: Object,
  },
};
</script>
