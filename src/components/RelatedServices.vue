<template>
  <div class="related">
    <h5>Tambien te puede interesar</h5>
    <spinner v-if="isLoading" />
    <template v-else>
      <div v-for="(service, index) in services" :key="index">
        <service-card :service="service" />
      </div>
      <b-link
        class="btn btn-sm btn-outline-primary mt-3"
        :to="'/servicios/filter?c=' + category"
      >
        Ver mas
      </b-link>
    </template>
  </div>
</template>
<script>
import api from "@/services/api";
import Spinner from "./Spinner.vue";
import ServiceCard from "./ServiceCard.vue";

export default {
  name: "RelatedServices",
  components: {
    Spinner,
    ServiceCard,
  },
  props: {
    category: String,
  },
  data() {
    return {
      isLoading: false,
      services: [],
      paginate: 5,
      query: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.isLoading = true;
      const query = this.category
        ? `/services/categories/${this.category}?`
        : null;

      Promise.all([api.getServices({ paginate: this.paginate, query: query })])
        .then(([services]) => {
          const data = services.data;
          const id = this.$route.params.id;

          function removeItemById(data, id) {
            const filter = data.filter((item) => item.id !== id);
            return filter;
          }
          const filter = removeItemById(data, id);

          this.services = filter;
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
