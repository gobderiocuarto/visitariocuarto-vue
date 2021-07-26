<template>
  <div class="detail">
    <h1 class="detail-title">{{ event.title }}</h1>
    <div v-if="event.image.largeUrl">
      <div v-if="!isLoaded" class="detail-spinner">
        <Spinner />
      </div>
      <img
        v-show="isLoaded && !isError"
        class="detail-image"
        :src="event.image.largeUrl"
        alt=""
        @load="imageLoaded"
        @error="imageError"
      />
    </div>
    <!-- <p class="detail-summary">{{ event.summary }}</p> -->

    <div class="detail-description" v-html="event.description"></div>
  </div>
</template>
<script>
import Spinner from "./Spinner.vue";
export default {
  name: "EventDetail",
  components: {
    Spinner,
  },
  props: {
    event: Object,
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
