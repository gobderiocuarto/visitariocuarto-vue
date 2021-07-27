<template>
  <div class="recommended recommended-event">
    <h5>Eventos recomendados</h5>
    <spinner v-if="isLoading" />
    <template v-else>
      <div class="row">
        <div
          class="col-md-6 col-lg-12"
          v-for="(event, index) in events"
          :key="index"
        >
          <event-card-hightlights :event="event" />
        </div>
      </div>
      <b-link class="btn btn-sm btn-outline-primary mt-3" :to="'/eventos'">
        Ver mas
      </b-link>
    </template>
    <hr />
  </div>
</template>
<script>
import api from "@/services/api";
import Spinner from "./Spinner.vue";
import EventCardHightlights from "./EventCardHightlights.vue";
export default {
  name: "RecommendedEvents",
  data() {
    return {
      isLoading: false,
      events: [],
      paginate: 2,
    };
  },
  components: { Spinner, EventCardHightlights },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.isLoading = true;
      Promise.all([
        api.getEventsHighlights({ paginate: this.paginate, url: "" }),
      ])
        .then(([events]) => {
          this.events = events;
          //console.log(events);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
