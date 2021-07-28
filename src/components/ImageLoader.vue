<template>
  <div class="image-loader">
    <div v-if="!isLoaded" :class="isCard ? 'spinner card-spinner' : 'spinner'">
      <spinner />
    </div>
    <img v-show="isLoaded" :src="image" alt="" @load="loaded" />
  </div>
</template>
<script>
import Spinner from "./Spinner.vue";
export default {
  name: "ImageLoader",
  components: {
    Spinner,
  },
  props: {
    image: String,
    isCard: Boolean,
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
    },
  },
};
</script>
