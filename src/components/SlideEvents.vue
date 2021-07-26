<template>
  <div class="">
    <b-carousel
      id="slide-home"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="(event, index) in events" :key="index">
        <template #img>
          <img
            class="caruosel-image"
            :src="event.image.largeUrl"
            alt="image slot"
          />
          <div class="carousel-caption">
            <h1>{{ event.title }}</h1>
            <b-link
              class="btn btn-outline-light"
              :to="'/evento/' + event.id + '/' + event.slug"
            >
              ver mas
            </b-link>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
import api from "@/services/api";
export default {
  name: "SlidesEvents",
  data() {
    return {
      events: [],
      slide: 0,
      sliding: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      Promise.all([api.getEventsHighlights({ url: "slider_hero" })]).then(
        ([events]) => {
          this.events = events;
        }
      );
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
