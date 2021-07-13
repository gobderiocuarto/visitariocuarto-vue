<template>
  <router-link
    :to="'/evento/' + event.id + '/' + event.slug"
    custom
    v-slot="{ navigate }"
  >
    <span
      :class="event.frame ? 'card card-frame' : 'card'"
      @click="navigate"
      @keypress.enter="navigate"
      role="link"
    >
      <div v-if="!isLoaded" class="card-spinner">
        <Spinner />
      </div>
      <div v-if="isError">
        <img
          v-show="isLoaded || isError"
          class="card-image not-found"
          src="https://images.unsplash.com/photo-1508402476522-c77c2fa4479d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
          @load="loaded"
          @error="error"
        />
      </div>
      <div v-else>
        <img
          v-show="isLoaded || !isError"
          class="card-image"
          :src="event.image.largeUrl"
          alt=""
          @load="loaded"
          @error="error"
        />
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
              <div class="date-time">
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
          <div class="content-footer">
            <div class="card-place">
              <font-awesome-icon icon="map-marker-alt" class="card-icon" /><span
                >{{ event.place.organization }}</span
              >
            </div>
            <div class="tags">
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
    </span>
  </router-link>
</template>
<script>
import Spinner from "./Spinner.vue";
export default {
  name: "EventCard",
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
