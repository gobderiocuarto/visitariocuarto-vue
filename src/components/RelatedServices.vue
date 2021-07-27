<template>
  <div class="recommended">
    <h5>Tambien te puede interesar</h5>
    <spinner v-if="isLoading" />
    <template v-else>
      <div v-for="(service, index) in services" :key="index">
        <!-- <div>
          <b-link :to="'/servicio/' + service.id + '/' + service.slug">{{
            service.name
          }}</b-link>
        </div> -->
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

      const query = this.category
        ? `/services/categories/${this.category}?`
        : null;

      // console.log(query);

      Promise.all([api.getServices({ paginate: this.paginate, query: query })])
        .then(([services]) => {
          this.services = services.data;
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
