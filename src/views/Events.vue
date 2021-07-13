<template>
  <div class="wrapper events">
    <div class="container">
      <h1>Eventos</h1>
      <p v-if="$route.query.s">{{ $route.query.s }}</p>
      <p v-else-if="$route.query.t">{{ $route.query.t }}</p>
      <p v-else-if="$route.query.c">{{ $route.query.c }}</p>
      <p v-else-if="$route.query.d">{{ $route.query.d }}</p>
      <p v-else-if="$route.query.f">{{ $route.query.f }}</p>
      <p v-else>todos</p>
      <hr />
      <p>total {{ total }} | page: {{ page }}</p>
      <div v-if="isLoading">cargando</div>
      <div v-else>
        <div v-if="isEmpty">no hay registros</div>
        <div v-else>
          <ListOfEvents :events="events" />
          <button
            v-if="hasMore"
            class="btn btn-outline-primary"
            @click="handleScrollInfinite"
          >
            ver mas
          </button>
          <button v-else class="btn btn-outline-primary" disabled>
            ver mas
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
import ListOfEvents from "@/components/ListOfEvents";
export default {
  name: "Events",

  components: {
    ListOfEvents,
  },

  data() {
    return {
      isLoading: false,
      isEmpty: false,
      query: null,
      total: 0,
      events: {},
      page: 1,
      prev: null,
      next: null,
      hasMore: true,
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

      // console.log([filterBySearch, filterByTag, filterByCategory]);
      // console.log(query);

      Promise.all([api.getEvents({ query: query })])
        .then(([events]) => {
          const count = events.data.length;
          //console.log(count);
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

    handleScrollInfinite() {
      this.page++;
      let url = "&page=" + this.page;
      Promise.all([api.getEvents({ query: this.query, page: url })])
        .then(([events]) => {
          this.next = events.links.next;
          this.events = this.events.concat(events.data);
          if (this.next == null) {
            this.hasMore = false;
          }
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
