<template>
  <b-link
    :to="{
      name: 'Event',
      params: { id: event.id, slug: event.slug, title: event.title },
    }"
    :class="event.frame ? 'card event-card card-frame' : 'card event-card'"
  >
    <div v-if="event.image">
      <card-image :image="event.image.mediumUrl" />
    </div>
    <div v-else>
      <card-image-not-found iconSize="2x" />
    </div>
    <div class="card-body">
      <div class="card-content">
        <div class="content-inner">
          <h3 class="card-title">{{ event.title }}</h3>
          <div class="card-date">
            <div class="date-day">
              <font-awesome-icon icon="calendar-alt" class="card-icon" />
              <p>{{ event.start_date | moment("dddd D [de] MMM YYYY") }}</p>
            </div>
            <div class="date-time" v-if="event.start_time !== '00:00:00'">
              <font-awesome-icon icon="clock" class="card-icon" />
              <span>{{ event.start_time.slice(0, 5) }}hs</span>
            </div>
          </div>
          <div class="card-text">{{ event.summary }}</div>
          <div v-if="event.frame" class="card-frame">
            <font-awesome-icon icon="flag" class="card-icon" />
            {{ event.frame.title }}
          </div>
        </div>
        <div class="content-footer" v-if="event.place">
          <div class="card-place">
            <font-awesome-icon icon="map-marker-alt" class="card-icon" /><span
              >{{ event.place.organization }}</span
            >
          </div>
          <div class="tags" v-if="event.tags">
            <div
              class="tags-item tags-sm"
              v-for="(tag, index) in event.tags.slice(0, 2)"
              :key="index"
            >
              {{ tag.name }}
            </div>
            <div v-if="event.tags.length > 2" class="tags-item">+</div>
          </div>
        </div>
      </div>
    </div>
  </b-link>
</template>
<script>
import CardImage from "./CardImage.vue";
import CardImageNotFound from "./CardImageNotFound.vue";
// import Spinner from "./Spinner.vue";
export default {
  name: "EventCard",
  components: {
    CardImage,
    CardImageNotFound,
    // Spinner,
  },
  props: {
    event: Object,
  },
};
</script>
