<template>
  <section class="carousel-of-events">
    <div class="container">
      <h3>Eventos Descatados</h3>
      <div class="row">
        <div class="col-md-4" v-for="(event, index) in events" :key="index">
          <div class="card">
            <img :src="event.image.mediumUrl" alt="" class="card-image" />
            <div class="card-body">
              <h5>{{ event.title }}</h5>
              <p class="lead">
                {{ event.start_date | moment("dddd D [de] MMM YYYY") }}
              </p>
              <router-link
                :to="`/evento/${event.id}/${event.slug}`"
                custom
                v-slot="{ navigate }"
              >
                <a
                  class="btn btn-primary"
                  @click="navigate"
                  @keypress.enter="navigate"
                  role="link"
                  >ver más</a
                >
              </router-link>
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
  name: "CarouselOfEvents",
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
        console.log(events);
      });
    },
  },
};
</script>
