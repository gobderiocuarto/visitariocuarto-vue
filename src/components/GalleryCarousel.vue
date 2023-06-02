<template>
  <div class="gallery">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
    >
      <b-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :img-src="image.mediumUrl"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "GalleryCarousel",
  props: {
    images: Array,
  },
  data() {
    return {
      slide: 0,
    };
  },
};
</script>
