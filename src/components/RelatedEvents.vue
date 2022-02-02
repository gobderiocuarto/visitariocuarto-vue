<template>
  <div v-if="showEvents" class="related">
    <h5>Tambien te puede interesar</h5>
    <spinner v-if="isLoading" />
    <template v-else>
      <div v-for="(event, index) in events" :key="index">
        <related-event-card :event="event" />
      </div>
      <b-link
        class="btn btn-sm btn-outline-primary mt-3"
        :to="'/eventos/filter?t=' + category"
      >
        Ver mas
      </b-link>
    </template>
  </div>
</template>
<script>
import api from "@/services/api";
import Spinner from "./Spinner.vue";
import RelatedEventCard from "./RelatedEventCard.vue";
export default {
  name: "RelatedEvents",
  components: {
    Spinner,
    RelatedEventCard,
  },
  props: {
    category: String,
  },
  data() {
    return {
      isLoading: false,
      events: [],
      showEvents: false,
      paginate: 4,
      query: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.isLoading = true;

      const query = this.category ? `/events/tags/${this.category}?` : null;

      Promise.all([api.getEvents({ paginate: this.paginate, query: query })])
        .then(([events]) => {
          const data = events.data;
          const id = this.$route.params.id;

          function removeItemById(data, id) {
            const filter = data.filter((item) => item.id !== id);
            return filter;
          }
          const filter = removeItemById(data, id);

          if (filter.length !== 0) {
            this.showEvents = true;
            this.events = filter;
          } else {
            this.events = data;
          }
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
