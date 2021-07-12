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
      <img
        class="card-image"
        :src="event.image.mediumUrl"
        alt=""
        loading="lazy"
      />
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
      <div class="card-footer">footer</div>
    </span>
  </router-link>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>
