<template>
  <div class="home text-center">
    <slide-events />
    <list-of-events-hightlights />
    <list-of-categories
      :categories="categoriesOfEvents"
      title="Encontrá tu evento"
    />
    <section>
      <h2>próximos eventos</h2>
      <div class="container">
        <list-of-events :events="events" />
        <b-link class="btn btn-primary" to="/eventos">ver mas</b-link>
      </div>
    </section>
    <list-of-categories
      :categories="categoriesOfServices"
      title="Conocé nuestros servicios"
    />
    <list-of-places-recommended />
  </div>
</template>

<script>
import api from "@/services/api";
import ListOfCategories from "../components/ListOfCategories.vue";
import ListOfEvents from "../components/ListOfEvents.vue";
import ListOfEventsHightlights from "../components/ListOfEventsHightlights.vue";
import SlideEvents from "../components/SlideEvents.vue";
import ListOfPlacesRecommended from "../components/ListOfPlacesRecommended.vue";

export default {
  name: "Home",
  components: {
    SlideEvents,
    ListOfEventsHightlights,
    ListOfCategories,
    ListOfEvents,
    ListOfPlacesRecommended,
  },
  data() {
    return {
      isLoading: false,
      events: [],
      paginate: 6,
      categoriesOfEvents: [
        {
          id: 1,
          title: "deportes",
          link: "/eventos/filter?s=deportes",
        },
        {
          id: 2,
          title: "cultura",
          link: "/eventos/filter?s=cultura",
        },
        {
          id: 3,
          title: "infantiles",
          link: "/eventos/filter?s=infantiles",
        },
        {
          id: 4,
          title: "mucho más",
          link: "/eventos",
        },
      ],
      categoriesOfServices: [
        {
          id: 1,
          title: "alojamiento",
          link: "/servicios/filter?s=alojamiento",
        },
        {
          id: 2,
          title: "gastronomía",
          link: "/servicios/filter?s=gastronomia",
        },
        {
          id: 3,
          title: "esparcimiento",
          link: "/servicios/filter?s=esparcimiento",
        },
        {
          id: 4,
          title: "mucho más",
          link: "/servicios",
        },
      ],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.isLoading = true;

      const filterBySearch = this.$route.query.s
        ? `/events?search=${this.$route.query.s}&`
        : null;
      const filterByTag = this.$route.query.t
        ? `/events/tags/${this.$route.query.t}?`
        : null;
      const filterByCategory = this.$route.query.c
        ? `/events/categories/${this.$route.query.c}?`
        : null;
      const filterByDate = this.$route.query.d
        ? `/events/when/${this.$route.query.d}?`
        : null;
      const filterByFrame = this.$route.query.f
        ? `/frames/${this.$route.query.f}/events?`
        : null;

      const query = filterBySearch
        ? filterBySearch
        : filterByTag
        ? filterByTag
        : filterByCategory
        ? filterByCategory
        : filterByDate
        ? filterByDate
        : filterByFrame
        ? filterByFrame
        : null;

      this.query = query;

      Promise.all([api.getEvents({ paginate: this.paginate, query: query })])
        .then(([events]) => {
          const count = events.data.length;

          this.total = count;
          this.isLoading = false;
          this.hasMore = true;
          this.page = 1;
          this.prev = null;
          this.next = null;

          if (count < 9) {
            this.hasMore = false;
          }

          if (count) {
            this.isEmpty = false;
            this.events = events.data;
          } else {
            this.isEmpty = true;
          }
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
