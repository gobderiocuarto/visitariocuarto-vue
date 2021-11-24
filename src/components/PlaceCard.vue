<template>
  <b-link
    :to="{
      name: 'Service',
      params: { id: service.id, slug: service.slug, title: service.name },
    }"
  >
    <div class="card place-card">
      <img class="card-image" :src="service.image.smallUrl" alt="" />
      <div class="card-body">
        <h4 class="card-title">{{ service.name }}</h4>
      </div>
    </div>
  </b-link>
</template>
<script>
export default {
  name: "PlaceCard",
  props: {
    service: Object,
  },
};
</script>
