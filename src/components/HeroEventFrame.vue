<template>
  <div class="hero-event-frame">
    <div class="">
      <h3>{{ frame.title }}</h3>
      <h4>
        <handle-date :start="frame.start_date" :end="frame.end_date" />
      </h4>
      <b-link
        v-if="pathName === 'event'"
        class="btn btn-secondary"
        :to="'/eventos/filter?f=' + frame.id + '&' + frame.slug"
        >ver eventos</b-link
      >
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
import HandleDate from "./HandleDate.vue";

export default {
  components: { HandleDate },
  name: "HeroEventFrame",
  props: {
    frame_id: [String, Number],
  },
  data() {
    return {
      isLoading: false,
      frame: {},
      pathName: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.pathName = this.$route.name;
      Promise.all([api.getEvent(this.frame_id)])
        .then(([event]) => {
          this.frame = event;
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
