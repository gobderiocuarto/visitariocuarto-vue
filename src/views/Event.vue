<template>
  <main>
    <template v-if="event.frame || event.is_frame">
      <div class="header-lists header-lists-frame">
        <div class="container">
          <HeroEventFrame :frame_id="event.frame.id" />
        </div>
      </div>
    </template>
    <section class="event">
      <div class="container">
        <div v-if="isLoading">
          <Spinner />
        </div>
        <div v-if="!isLoading">
          <div class="row">
            <div class="col-md-8">
              <div class="detail">
                <h1 class="detail-title">{{ event.title }}</h1>
                <image-loader
                  v-if="event.image"
                  class="detail-image"
                  :image="event.image.mediumUrl"
                />
              </div>
              <p class="detail-summary">{{ event.summary }}</p>
              <div class="detail-description" v-html="event.description"></div>
              <event-data :event="event" />
              <tags :tags="event.tags" url="/eventos/" class="mb-4" />
              <related-events :category="event.tags[0].slug" />
            </div>
            <div class="col-md-4">
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
      </div>
    </section>
  </main>
</template>
<script>
import api from "@/services/api";
import HeroEventFrame from "../components/HeroEventFrame.vue";
// import EventDetail from "../components/EventDetail.vue";
import EventData from "../components/EventData.vue";
import Tags from "../components/Tags.vue";
import RelatedEvents from "../components/RelatedEvents.vue";
import RecommendedServices from "../components/RecommendedServices.vue";
import Spinner from "../components/Spinner.vue";
import ImageLoader from "@/components/ImageLoader.vue";
export default {
  components: {
    HeroEventFrame,
    // EventDetail,
    EventData,
    Tags,
    RelatedEvents,
    RecommendedServices,
    Spinner,
    ImageLoader,
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

      Promise.all([api.getEvent(id)])
        .then(([event]) => {
          this.event = event;
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
