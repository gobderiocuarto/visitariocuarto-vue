<template>
  <section>
    <div class="container">
      <h2>Descubrí Nuestra Ciudad</h2>
      <div class="row justify-content-center">
        <div
          class="col-md-6 col-lg-3"
          v-for="(service, index) in services"
          :key="index"
        >
          <place-card :service="service" />
        </div>
      </div>

      <b-link
        class="btn btn-primary mt-3"
        :to="'/servicios/filter?t=lugares-destacados'"
      >
        ver más
      </b-link>
    </div>
  </section>
</template>
<script>
import api from "@/services/api";
import PlaceCard from "../components/PlaceCard.vue";
export default {
  name: "ListOfPlacesRecommended",
  components: {
    PlaceCard,
  },
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
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
