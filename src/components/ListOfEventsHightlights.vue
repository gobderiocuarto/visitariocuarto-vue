<template>
  <section v-if="count !== 0" class="list-of-events-hightlights">
    <div class="container">
      <h2>Eventos Recomendados</h2>
      <div class="row justify-content-center">
        <div class="col-md-4" v-for="(event, index) in events" :key="index">
          <div class="card">
            <b-link :to="`/evento/${event.id}/${event.slug}`">
              <img :src="event.image.mediumUrl" alt="" class="card-image" />
            </b-link>
            <div class="card-body">
              <h5 class="card-title">{{ event.title }}</h5>
              <p class="card-text">
                {{ event.start_date | moment("dddd D [de] MMMM YYYY") }}
              </p>
              <b-link
                class="btn btn-primary"
                :to="`/evento/${event.id}/${event.slug}`"
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
export default {
  name: "ListOfEventsHightlights",
  data() {
    return {
      events: [],
      count: 0,
    };
  },
  components: {},
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
