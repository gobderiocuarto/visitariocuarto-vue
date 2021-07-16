<template>
  <div class="recommended">
    <h5>{{ title }}</h5>
    <spinner v-if="isLoading" />
    <template v-else>
      <div v-for="(service, index) in services" :key="index">
        <div>
          <b-link :to="'/servicio/' + service.id + '/' + service.slug">{{
            service.name
          }}</b-link>
        </div>
      </div>
      <b-link
        class="btn btn-sm btn-outline-primary mt-3"
        :to="'/servicios/filter?c=' + slug"
      >
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
  components: { Spinner },
  name: "RecommendedServices",
  props: {
    title: String,
    filter: String,
    slug: String,
  },
  data() {
    return {
      isLoading: false,
      isEmpty: false,
      query: null,
      services: {},
      paginate: 2,
      hasMore: true,
    };
  },
  created() {
    this.getData();
  },

  methods: {
    getData() {
      this.isLoading = true;
      //console.log(this.tag);

      const query = this.filter
        ? `/services/${this.filter}/${this.slug}?`
        : null;

      //this.query = query;

      //console.log(query);

      Promise.all([api.getServices({ paginate: this.paginate, query: query })])
        .then(([services]) => {
          const count = services.data.length;
          this.isLoading = false;
          if (count) {
            this.isEmpty = false;
            this.services = services.data;
          } else {
            this.isEmpty = true;
          }
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
