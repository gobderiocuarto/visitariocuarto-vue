<template>
  <div>
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
            <handle-date
              class="date"
              :start="event.calendars[0].start_date"
              :end="event.calendars[0].end_date"
            />
            <div v-if="event.is_frame">
              <b-link
                class="btn btn-outline-light"
                :to="'/eventos/filter?f=' + event.id + '&' + event.slug"
              >
                ver eventos
              </b-link>
            </div>
            <div v-else>
              <b-link
                class="btn btn-outline-light"
                :to="{
                  name: 'Event',
                  params: {
                    id: event.id,
                    slug: event.slug,
                    title: event.title,
                  },
                }"
              >
                ver mas
              </b-link>
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
import api from "@/services/api";
import HandleDate from "./HandleDate.vue";
export default {
  name: "SlidesEvents",
  components: {
    HandleDate,
  },
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
