<template>
  <div class="recommended">
    <h5>Eventos recomendados</h5>
    <spinner v-if="isLoading" />
    <template v-else>
      <div v-for="(event, index) in events" :key="index">
        <div>
          <b-link :to="'/evento/' + event.id + '/' + event.slug">{{
            event.title
          }}</b-link>
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
export default {
  name: "RecommendedEvents",
  data() {
    return {
      isLoading: false,
      events: [],
      paginate: 2,
    };
  },
  components: { Spinner },
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
