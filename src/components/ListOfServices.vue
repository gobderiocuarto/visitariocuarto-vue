<template>
  <div class="list-of-services">
    <div class="row">
      <div
        class="col-md-6 col-xl-4"
        v-for="(service, index) in services"
        :key="index"
      >
        <router-link :to="'/servicio/' + service.id + '/' + service.slug">
          {{ service.name }}
          <!-- <ServiceCard :event="event" /> -->
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
// import ServiceCard from "@/components/ServiceCard";
export default {
  name: "ListOfServices",
  props: {
    services: Array,
  },
  components: {
    // ServiceCard,
  },
};
</script>
