<template>
  <div>
    <div v-if="!isLoaded" class="card-image center spinner">
      <Spinner />
    </div>
    <img class="card-image" :src="image" alt="" @load="loaded" @error="error" />
  </div>
</template>
<script>
import Spinner from "./Spinner.vue";
export default {
  components: {
    Spinner,
  },
  name: "CardImage",
  props: {
    image: String,
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
