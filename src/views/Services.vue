<template>
  <div class="wrapper">
    <div class="container">
      <h1>Servicios</h1>
      <p v-if="$route.query.s">{{ $route.query.s }}</p>
      <p v-else-if="$route.query.t">{{ $route.query.t }}</p>
      <p v-else-if="$route.query.c">{{ $route.query.c }}</p>
      <p v-else-if="$route.query.d">{{ $route.query.d }}</p>
      <p v-else-if="$route.query.f">{{ $route.query.f }}</p>
      <p v-else>todos</p>
      <search-services />
      <p class="mt-3">total {{ total }} | page: {{ page }}</p>
      <hr />
      <div class="row">
        <div class="col-lg-9 col-xl-8">
          <div v-if="isLoading" class="text-center"><spinner /></div>
          <div v-if="!isLoading">
            <div v-if="isEmpty">no hay servicios</div>
            <div v-if="!isEmpty">
              <list-of-services :services="services" />
              <div v-if="isReLoading"><spinner /></div>
              <div v-if="!isReLoading" class="text-center">
                <button
                  v-if="hasMore"
                  class="btn btn-primary mt-3"
                  @click="handleScrollInfinite"
                >
                  ver mas
                </button>
                <button v-else class="btn btn-primary" disabled>
                  cargar más
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 ol-xl-4">
          <recommended-events />
          <recommended-services msg="donde dormir" />
          <recommended-services msg="donde comer" />
          <recommended-services msg="otros servcios" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
import ListOfServices from "@/components/ListOfServices";
import Spinner from "../components/Spinner.vue";
import SearchServices from "../components/SearchServices.vue";
import RecommendedEvents from "../components/RecommendedEvents.vue";
import RecommendedServices from "../components/RecommendedServices.vue";
export default {
  name: "Services",

  components: {
    Spinner,
    ListOfServices,
    SearchServices,

    RecommendedServices,
    RecommendedEvents,
  },

  data() {
    return {
      isLoading: false,
      isReLoading: false,
      isEmpty: false,
      query: null,
      total: 0,
      services: {},
      paginate: 4,
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
        ? `/services?search=${this.$route.query.s}&`
        : null;
      const filterByTag = this.$route.query.t
        ? `/services/tags/${this.$route.query.t}?`
        : null;
      const filterByCategory = this.$route.query.c
        ? `/services/categories/${this.$route.query.c}?`
        : null;

      const query = filterBySearch
        ? filterBySearch
        : filterByTag
        ? filterByTag
        : filterByCategory
        ? filterByCategory
        : null;

      this.query = query;

      // console.log([filterBySearch, filterByTag, filterByCategory]);
      // console.log(query);

      Promise.all([api.getServices({ paginate: this.paginate, query: query })])
        .then(([services]) => {
          const count = services.data.length;
          //console.log(count);
          this.total = count;
          this.isLoading = false;
          this.hasMore = true;
          this.page = 1;
          this.prev = null;
          this.next = null;

          if (count < this.paginate) {
            this.hasMore = false;
          }

          if (count) {
            this.isEmpty = false;
            this.services = services.data;
          } else {
            this.isEmpty = true;
          }
        })
        .finally(() => (this.isLoading = false));
    },

    handleScrollInfinite() {
      this.isReLoading = true;
      this.page++;
      let url = "&page=" + this.page;
      Promise.all([api.getServices({ query: this.query, page: url })])
        .then(([services]) => {
          this.next = services.links.next;
          this.services = this.services.concat(services.data);
          this.total = this.total + services.data.length;
          if (this.next == null) {
            this.hasMore = false;
          }
        })
        .finally(() => (this.isReLoading = false));
    },
  },
};
</script>
