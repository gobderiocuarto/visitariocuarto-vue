<template>
  <div class="detail">
    <h1 class="detail-title">{{ service.name }}</h1>
    <div v-if="service.image.largeUrl">
      <div v-if="!isLoaded" class="detail-spinner">
        <Spinner />
      </div>
      <img
        v-show="isLoaded && !isError"
        class="detail-image"
        :src="service.image.largeUrl"
        alt=""
        @load="imageLoaded"
        @error="imageError"
      />
    </div>
    <div class="row mb-3">
      <div class="col-6">
        <h4>Ubicación</h4>
        <span v-for="(place, index) in service.places.slice(0, 1)" :key="index">
          {{ place.street }} {{ place.number }}
        </span>
      </div>
      <div class="col-6">
        <h4>Contacto</h4>
        {{ service.phone }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>Más Información</h4>
        <div class="detail-description" v-html="service.description"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Spinner from "./Spinner.vue";
export default {
  name: "ServiceDetail",
  components: {
    Spinner,
  },
  props: {
    service: Object,
  },
  data() {
    return {
      isLoaded: false,
      isError: false,
    };
  },
  methods: {
    imageLoaded() {
      this.isLoaded = true;
    },
    imageError() {
      this.isLoaded = true;
      this.isError = true;
    },
  },
};
</script>
