<template>
  <div class="list-of-services">
    <div class="row">
      <div
        class="col-sm-6 col-md-12"
        v-for="(service, index) in services"
        :key="index"
      >
        <ServiceCard :service="service" />
      </div>
    </div>
  </div>
</template>
<script>
import ServiceCard from "@/components/ServiceCard";
export default {
  name: "ListOfServices",
  props: {
    services: Array,
  },
  components: {
    ServiceCard,
  },
};
</script>
