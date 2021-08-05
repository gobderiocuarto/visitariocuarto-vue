<template>
  <b-link :to="url">
    <div class="event-card-hightlights">
      <div class="card">
        <img :src="event.image.mediumUrl" alt="" class="card-image" />
        <div class="card-body">
          <h5 class="card-title">{{ event.title }}</h5>
          <p class="card-date">
            {{ event.start_date | moment("dddd D [de] MMM YYYY") }}
          </p>
          <p v-if="event.place" class="card-place">
            {{ event.place.organization }}
          </p>
          <p v-if="event.is_frame">es mframe</p>
        </div>
      </div>
    </div>
  </b-link>
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
      isFrame: false,
      url: null,
    };
  },
  created() {
    this.getFrame();
  },
  methods: {
    getFrame() {
      this.isFrame = this.event.is_frame;
      if (!this.isFrame) {
        this.url = `/evento/${this.event.id}/${this.event.slug}`;
      } else {
        this.url = `/eventos/filter?f=${this.event.id}&${this.event.slug}`;
      }
    },
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
