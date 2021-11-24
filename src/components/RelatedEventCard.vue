<template>
  <b-link
    :to="{
      name: 'Event',
      params: {
        id: event.id,
        slug: event.slug,
        title: event.title,
      },
    }"
    :class="
      event.frame
        ? 'card event-related-card card-is-frame'
        : 'card event-related-card'
    "
  >
    <div class="row">
      <div class="col-lg-4">
        <div class="card-info">
          <div class="grid-container">
            <div class="card-day">
              {{ event.start_date | moment("DD") }}
            </div>
            <div class="card-month">
              {{ event.start_date | moment("MMM") }}
            </div>
            <img class="card-image" :src="event.image.smallUrl" alt="" />
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card-body">
          <div>
            <h4 class="card-title">{{ event.title }}</h4>
            <div class="card-date">
              <div class="date-item">
                <font-awesome-icon icon="calendar-alt" class="card-icon" />{{
                  event.start_date | moment("dddd")
                }}
              </div>
              <div class="date-item">
                <font-awesome-icon icon="clock" class="card-icon" />{{
                  event.start_time.slice(0, 5)
                }}hs
              </div>
              <div class="date-item">
                <font-awesome-icon icon="map-marker-alt" class="card-icon" />{{
                  event.place.organization
                }}
              </div>
            </div>
            <div v-if="event.frame" class="card-frame">
              <font-awesome-icon icon="flag" class="card-icon" />{{
                event.frame.title
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-link>
</template>
<script>
export default {
  name: "RelatedEventCard",
  props: {
    event: Object,
  },
};
</script>
