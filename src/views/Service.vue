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
            <tags :tags="service.tags" url="/servicios/" class="mb-4" />
            <related-services />
          </div>
          <div class="col-md-4">
            <recommended-events />
            <recommended-services msg="donde dormir" />
            <recommended-services msg="donde comer" />
            <recommended-services msg="otros servcios" />
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
