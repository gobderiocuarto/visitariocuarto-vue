import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Events from "../views/Events.vue";
import Event from "../views/Event.vue";
import Services from "../views/Services.vue";
import Service from "../views/Service.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // Events Routes
  {
    path: "/eventos",
    name: "events",
    component: Events,
  },
  {
    path: "/eventos/filter",
    name: "eventsFilter",
    component: Events,
  },
  {
    path: "/evento/:id/:slug",
    name: "event",
    component: Event,
  },
  // Services Routes
  {
    path: "/servicios",
    name: "services",
    component: Services,
  },
  {
    path: "/servicios/filter",
    name: "servicesFilter",
    component: Services,
  },
  {
    path: "/servicio/:id/:slug",
    name: "service",
    component: Service,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
