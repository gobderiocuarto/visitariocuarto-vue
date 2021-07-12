<template>
  <b-navbar toggleable="lg" type="dark" variant="secondary" sticky>
    <b-container>
      <b-navbar-brand to="/">VISITÁ RÍO CUARTO</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Qué">
            <li v-for="(item, index) in que" :key="index">
              <router-link tag="a" class="dropdown-item" :to="item.path">{{
                item.title
              }}</router-link>
            </li>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Donde">
            <li v-for="(item, index) in donde" :key="index">
              <router-link tag="a" class="dropdown-item" :to="item.path">{{
                item.title
              }}</router-link>
            </li>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Cuando">
            <li v-for="(item, index) in cuando" :key="index">
              <router-link tag="a" class="dropdown-item" :to="item.path">{{
                item.title
              }}</router-link>
            </li>
          </b-nav-item-dropdown>
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/eventos"
              >Eventos</router-link
            >
          </li>

          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/servicios"
              >Servicios</router-link
            >
          </li>

          <SearchEvents />
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
import SearchEvents from "@/components/SearchEvents.vue";
export default {
  name: "Navbar",
  components: {
    SearchEvents,
  },
  data() {
    return {
      type: "",
      query: "",
      donde: [
        {
          title: "Resto Bares",
          path: "/eventos/filter?c=resto-bares",
          slug: "resto-bares",
        },
        {
          title: "Discotecas - Pubs",
          path: "/eventos/filter?c=discotecas-pubs",
          slug: "discotecas-pubs",
        },
        // {
        //   title: "Museos y Centros Culturales ",
        //   path: "/eventos/filter?c=museos-y-centros-culturales",
        //   slug: "museos-y-centros-culturales",
        // },
        // {
        //   title: "Paseos al aire libre",
        //   path: "/eventos/filter?c=paseos-al-aire-libre",
        //   slug: "paseos-al-aire-libre",
        // },
        // {
        //   title: "Teatros ",
        //   path: "/eventos/filter?c=teatros",
        //   slug: "teatros",
        // },
      ],
      que: [
        {
          title: "Congresos y Jornadas",
          path: "/eventos/filter?t=congresos-y-jornadas",
          slug: "congresos-y-jornadas",
        },
        {
          title: "Cultura y Espectáculos",
          path: "/eventos/filter?t=cultura-y-espectaculos",
          slug: "cultura-y-espectaculos",
        },
        {
          title: "Deportes y Recreación",
          path: "/eventos/filter?t=deportes-y-recreacion",
          slug: "deportes-y-recreacion",
        },
        {
          title: "Ferias y compras",
          path: "/eventos/filter?t=ferias-y-compras",
          slug: "ferias-y-compras",
        },
        {
          title: "Infantiles",
          path: "/eventos/filter?t=infantiles",
          slug: "infantiles",
        },
      ],
      cuando: [
        {
          title: "Hoy ",
          path: "/eventos/filter?d=today",
          slug: "today",
        },
        {
          title: "Mañana ",
          path: "/eventos/filter?d=tomorrow",
          slug: "tomorrow",
        },
        {
          title: "Fin de semana ",
          path: "/eventos/filter?d=weekend",
          slug: "weekend",
        },
        {
          title: "Este mes ",
          path: "/eventos/filter?d=month",
          slug: "month",
        },
      ],
    };
  },
  // methods: {
  //   getAllEvents(query) {
  //     //console.log(query);
  //     location.href = "/eventos/filter/all/events";
  //   },
  //   getEventsByTag(query) {
  //     //console.log(query);
  //     location.href = "/#/eventos/tag?query=" + query;
  //   },
  //   getEventsByCategory(query) {
  //     //console.log(query);
  //     location.href = "/eventos/filter?c=" + query;
  //   },
  //   getEventsByDate(query) {
  //     //console.log(query);
  //     location.href = "/eventos/filter?d=" + query;
  //   },
  // },
};
</script>
