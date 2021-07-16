<template>
  <div class="recommended">
    <h5>Tambien te puede interesar</h5>
    <spinner v-if="isLoading" />
    <template v-else>
      <div v-for="(event, index) in events" :key="index">
        <div>
          <b-link :to="'/evento/' + event.id + '/' + event.slug">{{
            event.title
          }}</b-link>
        </div>
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
export default {
  name: "RelatedEvents",
  components: {
    Spinner,
  },
  props: {
    category: String,
  },
  data() {
    return {
      isLoading: false,
      events: [],
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
      // console.log(this.category);

      const query = this.category ? `/events/tags/${this.category}?` : null;

      // console.log(query);

      Promise.all([api.getEvents({ paginate: this.paginate, query: query })])
        .then(([events]) => {
          //console.log(events.data);
          this.events = events.data;
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
