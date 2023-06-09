<template>
  <div class="notable-commerces">
    <notable-commerces-hero></notable-commerces-hero>
    <b-container>
      <h1>Comercios Notables</h1>
      <div class="row notable-commerces-description">
        <div class="col-md-6">
          <p class="lead">
            ¡Bienvenidos! En esta sección nos adentraremos en la fascinante
            historia de los comercios notables de la ciudad de Río Cuarto.
          </p>
          <p>
            Estos establecimientos icónicos no sólo son puntos de referencia en
            nuestra ciudad, sino que también son auténticos tesoros culturales
            que merecen ser descubiertos y valorados. Acompáñanos en este
            recorrido virtual mientras exploramos algunos de los comercios más
            destacados, llenos de encanto y riqueza histórica.
          </p>
          <p>
            El programa de comercios Notables está regido por la ordenanza
            143/21.
          </p>
          <p>
            Si querés anotar a tu comercio en el Registro y ser parte del
            programa, chequea este
            <a
              href="http://riocuarto.gov.ar/programas/comercios-notables/"
              target="_blank"
              ><b>link</b></a
            >
            en donde están las bases y condiciones y el formulario para
            inscribirte.
          </p>
        </div>
        <div class="col-md-6">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/WmYz9JhE6BA?rel=0&autoplay=0&enablejsapi=1"
            allowfullscreen
          ></b-embed>
        </div>
      </div>

      <div v-if="isLoading" class="text-center"><spinner /></div>

      <div class="notable-commerces-list">
        <h4 class="mb-4">Comercios</h4>
        <notable-commerces-list v-if="!isLoading" :services="services" />
      </div>

      <div v-if="!isReLoading" class="text-center">
        <button
          v-if="hasMore"
          class="btn btn-primary mt-3"
          @click="handleScrollInfinite"
        >
          ver más
        </button>
        <button v-else class="btn btn-primary" disabled>cargar más</button>
      </div>
    </b-container>
  </div>
</template>

<script>
import api from "@/services/api";
import Spinner from "@/components/Spinner.vue";
import NotableCommercesHero from "@/components/NotableCommercesHero.vue";
import NotableCommercesList from "@/components/NotableCommercesList.vue";

export default {
  name: "NotableCommerce",

  components: {
    Spinner,
    NotableCommercesHero,
    NotableCommercesList,
  },

  data() {
    return {
      isLoading: false,
      isReLoading: false,
      isEmpty: false,
      query: null,
      total: 0,
      services: {},
      paginate: 6,
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
      const query = `/services/tags/comercios-notables?`;

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

      //console.log(this.query);
      Promise.all([
        api.getServices({
          query: this.query,
          paginate: this.paginate,
          page: url,
        }),
      ])
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
