<template>
  <main>
    <template v-if="event.frame">
      <HeroEventFrame :frame="event.frame" />
    </template>
    <section class="event">
      <div class="container">
        <!-- <h1>Evento</h1> -->
        <div v-if="isLoading">
          <Spinner />
        </div>
        <div v-if="!isLoading" class="row">
          <div class="col-md-8">
            <event-detail :event="event" />
            <tags :tags="event.tags" class="mb-4" />
            <related-events />
          </div>
          <div class="col-md-4">
            <event-data :event="event" />
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
import HeroEventFrame from "../components/HeroEventFrame.vue";
import EventDetail from "../components/EventDetail.vue";
import Tags from "../components/Tags.vue";
import EventData from "../components/EventData.vue";
import RecommendedEvents from "../components/RecommendedEvents.vue";
import RelatedEvents from "../components/RelatedEvents.vue";
import RecommendedServices from "../components/RecommendedServices.vue";
import Spinner from "../components/Spinner.vue";
export default {
  components: {
    HeroEventFrame,
    EventDetail,
    Tags,
    EventData,
    RecommendedServices,
    RecommendedEvents,
    RelatedEvents,
    Spinner,
  },
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

      //console.log(id);

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
