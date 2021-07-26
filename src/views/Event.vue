<template>
  <main>
    <template v-if="event.frame">
      <HeroEventFrame :frame="event.frame" />
    </template>
    <section class="event">
      <div class="container">
        <div v-if="isLoading">
          <Spinner />
        </div>
        <div v-if="!isLoading" class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-md-8">
                <event-detail :event="event" />
              </div>
              <div class="col-md-4">
                <event-data :event="event" />
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <!-- <event-detail :event="event" /> -->
            <tags :tags="event.tags" url="/eventos/" class="mb-4" />
            <related-events :category="event.tags[0].slug" />
          </div>
          <div class="col-md-4">
            <!-- <event-data :event="event" /> -->
            <!-- <recommended-events /> -->
            <recommended-services
              title="¿Dónde Alojarme?"
              filter="categories"
              slug="alojamiento"
              url="c"
            />
            <recommended-services
              title="¿Dónde Comer?"
              filter="categories"
              slug="gastronomia"
              url="c"
            />
            <recommended-services
              title="Conocé nuestra ciudad"
              filter="tags"
              slug="lugares-destacados"
              url="t"
            />
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
// import RecommendedEvents from "../components/RecommendedEvents.vue";
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
    // RecommendedEvents,
    RelatedEvents,
    Spinner,
  },
  data() {
    return {
      isLoading: false,
      event: {},
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
