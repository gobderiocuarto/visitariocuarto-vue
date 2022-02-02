<template>
  <section v-if="count !== 0" class="list-of-events-hightlights">
    <div class="container">
      <h2>Eventos Recomendados</h2>
      <div class="row justify-content-center">
        <div
          class="col-md-6 col-lg-4"
          v-for="(event, index) in events"
          :key="index"
        >
          <div class="card">
            <b-link
              :to="{
                name: 'Event',
                params: {
                  id: event.id,
                  slug: event.slug,
                  title: event.title,
                },
              }"
            >
              <img :src="event.image.mediumUrl" alt="" class="card-image" />
            </b-link>
            <div class="card-body">
              <h5 class="card-title text-uppercase">{{ event.title }}</h5>
              <div class="card-title">
                <handle-date
                  class="card-date"
                  :start="event.calendars[0].start_date"
                  :end="event.calendars[0].end_date"
                />
              </div>
              <!-- <p class="card-text">
                {{ event.start_date | moment("dddd D [de] MMMM YYYY") }}
              </p> -->
              <b-link
                class="btn btn-sm btn-primary text-uppercase"
                :to="{
                  name: 'Event',
                  params: {
                    id: event.id,
                    slug: event.slug,
                    title: event.title,
                  },
                }"
              >
                ver más
              </b-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import api from "@/services/api";
import HandleDate from "./HandleDate.vue";
export default {
  name: "ListOfEventsHightlights",
  data() {
    return {
      events: [],
      count: 0,
    };
  },
  components: {
    HandleDate,
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      Promise.all([
        api.getEventsHighlights({ url: "slider_eventos_destacados" }),
      ]).then(([events]) => {
        this.count = events.length;
        this.events = events;
      });
    },
  },
};
</script>
