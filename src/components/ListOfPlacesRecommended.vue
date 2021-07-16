<template>
  <section>
    <div class="container">
      <h2>Descubrí Nuestra Ciudad</h2>

      <div v-for="(service, index) in services" :key="index">
        <div>
          <b-link :to="'/servicio/' + service.id + '/' + service.slug">{{
            service.name
          }}</b-link>
        </div>
      </div>

      <b-link
        class="btn btn-sm btn-outline-primary mt-3"
        :to="'/servicios/filter?t=lugares-destacados'"
      >
        Ver mas
      </b-link>
    </div>
  </section>
</template>
<script>
import api from "@/services/api";
export default {
  name: "ListOfPlacesRecommended",
  data() {
    return {
      isLoading: false,
      isEmpty: false,
      query: null,
      services: {},
      paginate: 4,
    };
  },
  created() {
    this.getData();
  },

  methods: {
    getData() {
      this.isLoading = true;

      const query = "/services/tags/lugares-destacados?";

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
          //console.log(count);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
