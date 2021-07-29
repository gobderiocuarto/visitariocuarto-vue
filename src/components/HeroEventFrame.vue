<template>
  <div class="bg-primary text-white py-5">
    <div
      class="container d-flex align-items-center justify-content-between py-5"
    >
      <div>
        <h3>{{ frame.title }}</h3>
        <h4>
          <handle-date :start="frame.start_date" :end="frame.end_date" />
        </h4>
      </div>
      <div>
        <b-link
          class="btn btn-secondary ml-2"
          :to="'/evento/' + frame.id + '/' + frame.slug"
          >mas info</b-link
        >
        <b-link
          class="btn btn-secondary ml-2"
          :to="'/eventos/filter?f=' + frame.id + '&' + frame.slug"
          >ver eventos</b-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import HandleDate from "./HandleDate.vue";
export default {
  components: { HandleDate },
  name: "HeroEventFrame",
  props: {
    frame: Object,
  },
};
</script>
