<template>
  <b-navbar toggleable="lg" type="dark" variant="secondary" sticky>
    <b-container>
      <b-navbar-brand to="/">
        <logo />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Qué">
            <b-dropdown-item
              v-for="(item, index) in que"
              :key="index"
              :to="item.path"
              >{{ item.title }}</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Donde">
            <b-dropdown-item
              v-for="(item, index) in donde"
              :key="index"
              :to="item.path"
              >{{ item.title }}</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Cuando">
            <b-dropdown-item
              v-for="(item, index) in cuando"
              :key="index"
              :to="item.path"
              >{{ item.title }}</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item class="nav-item" to="/eventos">Eventos</b-nav-item>

          <b-nav-item class="nav-item" to="/servicios">Servicios</b-nav-item>

          <SearchEvents />
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
import SearchEvents from "@/components/SearchEvents.vue";
import Logo from "@/components/Logo.vue";
export default {
  name: "Navbar",
  components: {
    SearchEvents,
    Logo,
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
