<template>
  <div class="detail">
    <h1 class="detail-title">{{ service.name }}</h1>
    <div v-if="service.image">
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
      <div class="col-md-6">
        <div class="detail-info">
          <h4>Ubicación</h4>
          <div class="" v-for="(place, index) in service.places" :key="index">
            <div>{{ place.street }} {{ place.number }}</div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="detail-info">
          <h4>Contacto</h4>
          <div v-if="service.phone">
            <a :href="'tel:' + service.phone">{{ service.phone }}</a>
          </div>
          <div v-if="service.email">
            <a :href="'mailto:' + service.email">{{ service.email }}</a>
          </div>
          <div v-if="service.web">
            <div class="detail-info">
              <a
                :href="service.web"
                target="_blank"
                rel="noopener noreferrer"
                >{{ service.web }}</a
              >
            </div>
          </div>
        </div>
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
