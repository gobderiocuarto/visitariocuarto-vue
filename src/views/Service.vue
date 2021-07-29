<template>
  <main>
    <section class="service">
      <div class="container">
        <div v-if="isLoading">
          <Spinner />
        </div>
        <div v-if="!isLoading" class="row">
          <div class="col-md-8">
            <service-detail :service="service" />
            <tags :tags="service.tags" url="/servicios/" />
            <related-services :category="service.category.slug" />
          </div>
          <div class="col-md-4">
            <recommended-events />
            <recommended-services
              title="¿Dónde Alojarme?"
              filter="categories"
              slug="alojamiento"
            />
            <recommended-services
              title="¿Dónde Comer?"
              filter="categories"
              slug="gastronomia"
            />
            <recommended-services
              title="Conocé nuestra ciudad"
              filter="tags"
              slug="lugares-destacados"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import api from "@/services/api";
import ServiceDetail from "../components/ServiceDetail.vue";
import Tags from "../components/Tags.vue";
import RecommendedEvents from "../components/RecommendedEvents.vue";
import RecommendedServices from "../components/RecommendedServices.vue";
import RelatedServices from "../components/RelatedServices.vue";
import Spinner from "../components/Spinner.vue";
export default {
  components: {
    ServiceDetail,
    Tags,
    RecommendedServices,
    RecommendedEvents,
    RelatedServices,
    Spinner,
  },
  data() {
    return {
      isLoading: false,
      service: {},
    };
  },
  watch: {
    $route() {
      this.getData();
    },
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const id = this.$route.params.id;
      this.isLoading = true;

      //console.log(id);

      Promise.all([api.getService(id)])
        .then(([service]) => {
          this.service = service;
          //console.log(event);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
