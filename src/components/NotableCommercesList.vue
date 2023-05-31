<template>
  <div class="row">
    <div class="col-md-4" v-for="(service, index) in services" :key="index">
      <notable-commerces-card :service="service" />
    </div>
  </div>
</template>

<script>
import NotableCommercesCard from "./NotableCommercesCard.vue";
export default {
  components: { NotableCommercesCard },
  name: "NotableCommercesList",
  props: {
    services: Array,
  },
};
</script>
