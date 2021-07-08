<template>
  <div>
    <h1>Eventos</h1>
    <p v-if="$route.query.s">{{ $route.query.s }}</p>
    <p v-else-if="$route.query.t">{{ $route.query.t }}</p>
    <p v-else-if="$route.query.c">{{ $route.query.c }}</p>
    <p v-else>todos</p>
    <hr />
    <div v-if="isLoading"><h1>Cargando...</h1></div>
    <list-of-events v-if="!isLoading" :events="events"></list-of-events>
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
      events: {},
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
        ? `?search=${this.$route.query.s}&`
        : null;
      const filterByTag = this.$route.query.t
        ? `/tags/${this.$route.query.t}?`
        : null;
      const filterByCategory = this.$route.query.c
        ? `/categories/${this.$route.query.c}?`
        : null;
      const filterByDate = this.$route.query.d
        ? `/when/${this.$route.query.d}?`
        : null;

      const query = filterBySearch
        ? filterBySearch
        : filterByTag
        ? filterByTag
        : filterByCategory
        ? filterByCategory
        : filterByDate
        ? filterByDate
        : null;

      // console.log([filterBySearch, filterByTag, filterByCategory]);
      console.log(query);

      Promise.all([api.getEvents({ query: query })])
        .then(([events]) => {
          this.events = events;
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
