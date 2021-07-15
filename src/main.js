import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/scss/styles.scss";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faFlag,
  faImage,
  faFolder,
  faTag,
  faPhoneAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faFlag,
  faImage,
  faFolder,
  faTag,
  faPhoneAlt,
  faMobileAlt
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const moment = require("moment");
require("moment/locale/es");

Vue.use(require("vue-moment"), {
  moment,
});

console.log(Vue.moment().locale()); //es

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
