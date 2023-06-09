<template>
  <div class="notable-commerces notable-commerces-detail">
    <notable-commerces-hero></notable-commerces-hero>
    <b-container>
      <div v-if="isLoading">
        <Spinner />
      </div>
      <div v-if="!isLoading" class="row justify-content-between">
        <div class="col-md-8 col-lg-8">
          <h4>Comercios Notables</h4>
          <h1>{{ service.name }}</h1>
          <div class="summary">{{ service.summary }}</div>

          <div v-if="service.image">
            <div v-if="!isLoaded" class="spinner">
              <Spinner />
            </div>
            <img
              v-show="isLoaded && !isError"
              class="image"
              :src="service.image.largeUrl"
              alt=""
              @load="imageLoaded"
              @error="imageError"
            />
          </div>

          <div
            class="description"
            v-if="service.description"
            v-html="service.description"
          ></div>
          <p class="text-danger" v-else>No hay descripcion cargada</p>

          <gallery-carousel :images="service.gallery_images" />

          <b-link
            class="btn btn-sm btn-primary my-5"
            :to="{
              name: 'NotableCommerces',
            }"
          >
            volver
          </b-link>
        </div>
        <div v-if="service.video_link" class="col-md-4 col-lg-3">
          <div class="video">
            <b-embed
              type="iframe"
              aspect="9by16"
              :src="`https://www.youtube.com/embed/${service.video_link}?rel=0&autoplay=0&enablejsapi=1`"
              allowfullscreen
            ></b-embed>
          </div>
        </div>
        <div v-else class="col-md-4 col-lg-4">
          <div class="video">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/WmYz9JhE6BA?rel=0&autoplay=0&enablejsapi=1"
              allowfullscreen
            ></b-embed>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import api from "@/services/api";
import NotableCommercesHero from "@/components/NotableCommercesHero.vue";
import Spinner from "../components/Spinner.vue";
import GalleryCarousel from "@/components/GalleryCarousel.vue";

export default {
  name: "NotableCommercesSingle",

  components: {
    NotableCommercesHero,
    Spinner,
    GalleryCarousel,
  },
  data() {
    return {
      isLoading: false,
      service: {},
      isLoaded: false,
      isError: false,
    };
  },
  watch: {
    $route() {
      this.getData();
    },
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const id = this.$route.params.id;
      this.isLoading = true;

      //console.log(id);

      Promise.all([api.getService(id)])
        .then(([service]) => {
          this.service = service;
          console.log(service);
        })
        .finally(() => (this.isLoading = false));
    },
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
