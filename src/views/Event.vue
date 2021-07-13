<template>
  <div class="wrapper event">
    <div v-if="isLoading">cargando</div>
    <template v-if="event.frame">
      <HeroEventFrame :frame="event.frame" />
    </template>
    <div class="container">
      <h1>Evento</h1>
      <div class="row">
        <div class="col-md-8">
          {{ event.title }}
        </div>
        <div class="col-md-4">col</div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/services/api";
import HeroEventFrame from "../components/HeroEventFrame.vue";
export default {
  components: { HeroEventFrame },
  name: "Event",
  data() {
    return {
      isLoading: false,
      event: {},
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const id = this.$route.params.id;
      this.isLoading = true;

      console.log(id);

      Promise.all([api.getEvent(id)])
        .then(([event]) => {
          this.event = event;
          //console.log(event);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
