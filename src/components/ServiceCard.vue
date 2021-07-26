<template>
  <router-link
    :to="'/servicio/' + service.id + '/' + service.slug"
    tag="a"
    v-slot="{ href, navigate }"
  >
    <a
      :class="
        service.frame ? 'card service-card card-frame' : 'card service-card'
      "
      @click="navigate"
      :href="href"
    >
      <div class="row">
        <div class="col-md-3 col-xl-2">
          <figure v-if="service.image">
            <div v-if="!isLoaded" class="card-image center spinner">
              <Spinner />
            </div>
            <div v-if="isError">
              <div class="card-image center error" @error="error">
                <font-awesome-icon icon="image" size="2x" class="card-icon" />
                <small>imagen no disponible</small>
                <div>
                  <br />
                </div>
              </div>
            </div>
            <div v-else>
              <img
                v-if="isLoaded || !isError"
                class="card-image"
                :src="service.image.smallUrl"
                alt=""
                @load="loaded"
                @error="error"
              />
            </div>
          </figure>
          <figure v-else>
            <div class="card-image center error" @error="error">
              <font-awesome-icon icon="image" size="2x" class="card-icon" />
              <small>imagen no disponible</small>
              <div>
                <br />
              </div>
            </div>
          </figure>
        </div>
        <div class="col-md-9 col-xl-10">
          <div class="card-body">
            <h5 class="card-title">
              {{ service.name }}
            </h5>
            <div class="card-categories">
              <div class="category">
                <font-awesome-icon icon="folder" class="card-icon" />{{
                  service.category.name
                }}
              </div>
              <div v-if="service.tags.length" class="tags">
                <font-awesome-icon icon="tag" class="card-icon" />
                <span
                  v-for="(tag, index) in service.tags.slice(0, 4)"
                  :key="index"
                  >{{ tag.name }}</span
                >
                <b class="text-secondary" v-if="service.tags.length > 4">+</b>
              </div>
            </div>
            <div class="card-contact">
              <div v-if="service.phone" class="contact-phone">
                <font-awesome-icon icon="mobile-alt" class="card-icon" />{{
                  service.phone
                }}
              </div>
              <div v-if="service.places.length" class="contact-address">
                <font-awesome-icon
                  icon="map-marker-alt"
                  class="card-icon"
                /><span
                  v-for="(place, index) in service.places.slice(0, 1)"
                  :key="index"
                  >{{ place.street }} {{ place.number }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </router-link>
</template>
<script>
import Spinner from "./Spinner.vue";
export default {
  name: "ServiceCard",
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
    loaded() {
      this.isLoaded = true;
    },
    error() {
      this.isLoaded = true;
      this.isError = true;
    },
  },
};
</script>
