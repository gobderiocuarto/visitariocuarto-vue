<template>
  <section class="list-of-events-hightlights">
    <div class="container">
      <h2>Eventos Descatados</h2>
      <div class="row justify-content-center">
        <div class="col-md-4" v-for="(event, index) in events" :key="index">
          <div class="card">
            <img :src="event.image.mediumUrl" alt="" class="card-image" />
            <div class="card-body">
              <h5>{{ event.title }}</h5>
              <p class="lead">
                {{ event.start_date | moment("dddd D [de] MMM YYYY") }}
              </p>
              <b-link
                class="btn btn-primary"
                :to="`/evento/${event.id}/${event.slug}`"
              >
                ver mas
              </b-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import api from "@/services/api";
export default {
  name: "ListOfEventsHightlights",
  data() {
    return {
      events: [],
    };
  },
  components: {},
  created() {
    this.getData();
  },
  methods: {
    getData() {
      Promise.all([api.getEventsHighlights({ url: "" })]).then(([events]) => {
        this.events = events;
      });
    },
  },
};
</script>
