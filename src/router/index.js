import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Events from "../views/Events.vue";
import Event from "../views/Event.vue";
import Services from "../views/Services.vue";
import Service from "../views/Service.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  // Events Routes
  {
    path: "/eventos",
    name: "Events",
    component: Events,
    meta: {
      title: "Eventos",
    },
  },
  {
    path: "/eventos/filter",
    name: "EventsFilter",
    component: Events,
    meta: {
      title: "Eventos",
    },
  },
  {
    path: "/evento/:id/:slug",
    name: "Event",
    component: Event,
    meta: {
      title: "Evento",
    },
  },
  // Services Routes
  {
    path: "/servicios",
    name: "Services",
    component: Services,
    meta: {
      title: "Servicios",
    },
  },
  {
    path: "/servicios/filter",
    name: "ServicesFilter",
    component: Services,
    meta: {
      title: "Servicios",
    },
  },
  {
    path: "/servicio/:id/:slug",
    name: "Service",
    component: Service,
    meta: {
      title: "Servicio",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log(to);
  // console.log(from);
  let documentTitle = (document.title = `${process.env.VUE_APP_TITLE}`);

  if (to.meta.title) {
    documentTitle += ` | ${to.meta.title}`;
  }

  if (to.params.title) {
    documentTitle += ` | ${to.params.title}`;
  }
  document.title = documentTitle;
  next();
});

export default router;
