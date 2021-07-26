<template>
  <router-link
    :to="'/evento/' + event.id + '/' + event.slug"
    custom
    v-slot="{ navigate }"
  >
    <span
      class="event-card-hightlights"
      @click="navigate"
      @keypress.enter="navigate"
      role="link"
    >
      <div class="card">
        <img :src="event.image.mediumUrl" alt="" class="card-image" />
        <div class="card-body">
          <h5 class="card-title">{{ event.title }}</h5>
          <p class="card-date">
            {{ event.start_date | moment("dddd D [de] MMM YYYY") }}
          </p>

          <p class="card-place">{{ event.place.organization }}</p>
        </div>
      </div>
    </span>
  </router-link>
</template>
<script>
// import Spinner from "./Spinner.vue";
export default {
  name: "EventCardHightlights",
  components: {
    // Spinner,
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
