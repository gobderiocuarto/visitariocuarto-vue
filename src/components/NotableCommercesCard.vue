<template>
  <b-link
    class="card"
    :to="{
      name: 'NotableCommercesSingle',
      params: {
        id: service.id,
        slug: service.slug,
        title: service.title,
      },
    }"
  >
    <div v-if="service.image">
      <card-image :image="service.image.mediumUrl" />
    </div>
    <div v-else>
      <card-image-not-found iconSize="2x" />
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ service.name }}</h3>
      <p class="card-text" v-if="service.summary">
        {{ service.summary }}
      </p>
      <span class="card-link">ver más</span>
    </div>
  </b-link>
</template>

<script>
import CardImage from "./CardImage.vue";
import CardImageNotFound from "./CardImageNotFound.vue";
export default {
  name: "NotableCommercesCard",
  components: {
    CardImage,
    CardImageNotFound,
    // Spinner,
  },
  props: {
    service: Object,
  },
};
</script>
